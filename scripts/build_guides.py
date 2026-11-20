#!/usr/bin/env python3
"""Generate route entries, complete guides and modules from the same sources."""

import argparse
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src"
MODULES = (
    "agreement", "privacy", "publication", "story", "using", "platform",
    "execution", "automation", "states", "review", "reference",
)
ROUTES = (("new", "Create new work"), ("migrate", "Migrate existing work"))


def source(name):
    return (SOURCE / f"{name}.md").read_text(encoding="utf-8")


def generated_files():
    bootstrap = source("bootstrap")
    generated_comment, full_intro, pinned_rules = bootstrap.split("\n\n", 2)
    if not full_intro.startswith("This document contains "):
        raise ValueError("Expected full-guide introduction in src/bootstrap.md")

    start = source("start").rstrip()
    modules = {name: source(name) for name in MODULES}
    routed = re.findall(r"\]\(\.\./modules/([\w-]+)\.md\)", start)
    if len(routed) != len(modules) or set(routed) != set(modules):
        raise ValueError("The start table must link to every generated module once")

    headings = [
        heading
        for content in modules.values()
        for heading in re.findall(r"^## (.+)$", content, flags=re.MULTILINE)
    ]
    if len(headings) != len(set(headings)):
        raise ValueError("A shared heading appears more than once in the modules")

    for name, content in modules.items():
        path = f"modules/{name}.md"
        yield path, f"{generated_comment}\n\n{content.rstrip()}\n\n<!-- end of {path} -->\n"

    core = "\n".join(modules.values())
    for route, title in ROUTES:
        prefix = f"# {title}\n\n"
        route_text = source(route).rstrip()
        yield f"{route}/DELIVERY.md", (
            f"{prefix}{bootstrap.rstrip()}\n\n## Route\n\n{route_text}\n\n{core}"
        )
        if route == "new":
            migrate_guide = "../migrate/DELIVERY.md"
            if route_text.count(migrate_guide) != 1:
                raise ValueError("Expected one migration link in src/new.md")
            route_text = route_text.replace(migrate_guide, "../migrate/START.md")
        yield f"{route}/START.md", (
            f"{prefix}{generated_comment}\n\n{start}\n\n{pinned_rules.rstrip()}"
            f"\n\n## Route\n\n{route_text}\n"
        )


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    try:
        outputs = dict(generated_files())
    except ValueError as error:
        parser.exit(1, f"{error}\n")

    failed = []
    for relative_path, content in outputs.items():
        path = ROOT / relative_path
        expected = content.encode("utf-8")
        if args.check:
            if not path.is_file() or path.read_bytes() != expected:
                failed.append(relative_path)
        else:
            path.parent.mkdir(exist_ok=True)
            path.write_bytes(expected)
    if failed:
        parser.exit(1, "Generated guide drift: " + ", ".join(failed) + "\n")
    print("Generated guides match sources." if args.check else "Generated routes, full guides and modules.")


if __name__ == "__main__":
    main()
