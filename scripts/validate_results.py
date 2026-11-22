"""Validate a private results file without printing its contents."""

import argparse
import json
from pathlib import Path
import sys

from jsonschema import Draft202012Validator


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("results", type=Path)
    parser.add_argument(
        "--historical", action="store_true", help="Allow old records with neither agent ID."
    )
    args = parser.parse_args()

    schema_path = Path(__file__).resolve().parents[1] / "templates/results.schema.json"
    schema = json.loads(schema_path.read_text(encoding="utf-8"))
    Draft202012Validator.check_schema(schema)
    format_checker = Draft202012Validator.FORMAT_CHECKER
    if "date-time" not in format_checker.checkers:
        parser.error("Install rfc3339-validator to enable date-time validation.")

    try:
        results = json.loads(args.results.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        print("Unable to read a valid JSON results file.", file=sys.stderr)
        return 1

    validator = Draft202012Validator(schema, format_checker=format_checker)
    errors = list(validator.iter_errors(results))
    for error in errors:
        # Report the location and rule without exposing private values.
        print(f"{error.json_path}: failed schema rule {error.validator}", file=sys.stderr)
    if errors:
        return 1

    historical_count = 0
    invalid = False
    for index, run in enumerate(results):
        if "builderAgent" not in run:
            if args.historical:
                historical_count += 1
            else:
                print(f"$[{index}]: builderAgent and testerAgent are required", file=sys.stderr)
                invalid = True
        elif run["builderAgent"] == run["testerAgent"]:
            print(f"$[{index}]: builderAgent and testerAgent must differ", file=sys.stderr)
            invalid = True

    if invalid:
        return 1
    print(f"Validated {len(results)} run record(s).")
    if historical_count:
        print(f"Independence unverified for {historical_count} historical record(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
