#!/usr/bin/env python3
"""Generate the execution examples PDF with WeasyPrint 69.0."""

from pathlib import Path
import os
import sys

# Homebrew installs WeasyPrint's native libraries outside macOS's default
# dynamic-library search path. This is harmless on other platforms.
homebrew_library_dirs = [
    path for path in ("/opt/homebrew/lib", "/usr/local/lib") if Path(path).is_dir()
]
if homebrew_library_dirs:
    os.environ.setdefault(
        "DYLD_FALLBACK_LIBRARY_PATH", ":".join(homebrew_library_dirs)
    )

import weasyprint
from weasyprint import HTML


EXPECTED_WEASYPRINT_VERSION = "69.0"
ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs" / "execution-examples" / "index.html"
OUTPUT = ROOT / "public" / "case-studies" / "public" / "how-i-deliver.pdf"


def main() -> int:
    if weasyprint.__version__ != EXPECTED_WEASYPRINT_VERSION:
        print(
            f"Expected WeasyPrint {EXPECTED_WEASYPRINT_VERSION}, "
            f"found {weasyprint.__version__}.",
            file=sys.stderr,
        )
        return 1

    HTML(filename=SOURCE).write_pdf(OUTPUT)
    print(f"Generated {OUTPUT.relative_to(ROOT)} with WeasyPrint {weasyprint.__version__}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
