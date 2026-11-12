#!/usr/bin/env python3
"""Generate complete routes; --check fails on source/output drift."""
from pathlib import Path
import argparse

ROOT = Path(__file__).resolve().parents[1]

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    failed = []
    bootstrap = (ROOT / 'src/bootstrap.md').read_text(encoding='utf-8')
    core = (ROOT / 'src/core.md').read_text(encoding='utf-8')
    for route, title in [('new', 'Create new work'), ('migrate', 'Migrate existing work')]:
        text = f'# {title}\n\n' + bootstrap.rstrip() + '\n\n## Route\n\n' + (ROOT / f'src/{route}.md').read_text(encoding='utf-8').rstrip() + '\n\n' + core
        path = ROOT / route / 'DELIVERY.md'
        if args.check:
            if not path.exists() or path.read_bytes() != text.encode('utf-8'):
                failed.append(str(path.relative_to(ROOT)))
        else:
            path.parent.mkdir(exist_ok=True)
            path.write_text(text, encoding='utf-8', newline='\n')
    if failed:
        parser.exit(1, 'Generated guide drift: ' + ', '.join(failed) + '\n')
    print('Generated guides match sources.' if args.check else 'Generated both complete guides.')

if __name__ == '__main__':
    main()
