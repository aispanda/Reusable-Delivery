"""Exercise the private results validator through its command line."""

import json
from pathlib import Path
import subprocess
import sys
from tempfile import TemporaryDirectory
import unittest


ROOT = Path(__file__).resolve().parents[1]
EXAMPLE = json.loads((ROOT / "examples/results.example.json").read_text(encoding="utf-8"))


class ValidateResultsTest(unittest.TestCase):
    def check_results(self, records, *options):
        with TemporaryDirectory() as directory:
            path = Path(directory) / "results.json"
            path.write_text(json.dumps(records), encoding="utf-8")
            return subprocess.run(
                [sys.executable, str(ROOT / "scripts/validate_results.py"), str(path), *options],
                check=False,
                capture_output=True,
                text=True,
            )

    def test_distinct_agents_and_run_ids_pass(self):
        result = self.check_results(EXAMPLE)
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_matching_agents_fail_in_both_modes(self):
        record = dict(EXAMPLE[0], testerAgent=EXAMPLE[0]["builderAgent"])
        for options in ((), ("--historical",)):
            with self.subTest(options=options):
                result = self.check_results([record], *options)
                self.assertEqual(result.returncode, 1)
                self.assertIn("must differ", result.stderr)

    def test_historical_mode_allows_only_complete_absence(self):
        record = dict(EXAMPLE[0])
        del record["testerAgent"]
        result = self.check_results([record], "--historical")
        self.assertEqual(result.returncode, 1)
        del record["builderAgent"]
        self.assertEqual(self.check_results([record]).returncode, 1)
        result = self.check_results([record], "--historical")
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("Independence unverified for 1 historical record", result.stdout)

    def test_duplicate_run_ids_fail_in_both_modes(self):
        duplicate = dict(EXAMPLE[1], runId=EXAMPLE[0]["runId"])
        for options in ((), ("--historical",)):
            with self.subTest(options=options):
                result = self.check_results([EXAMPLE[0], duplicate], *options)
                self.assertEqual(result.returncode, 1)
                self.assertIn("duplicate runId", result.stderr)
                self.assertNotIn(duplicate["runId"], result.stderr)

    def test_invalid_date_fails_without_printing_private_value(self):
        invalid_date = "2026-02-30T10:00:00-05:00"
        result = self.check_results([dict(EXAMPLE[0], runAt=invalid_date)])
        self.assertEqual(result.returncode, 1)
        self.assertIn("failed schema rule format", result.stderr)
        self.assertNotIn(invalid_date, result.stderr)
