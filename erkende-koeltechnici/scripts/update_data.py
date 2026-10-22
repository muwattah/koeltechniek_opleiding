#!/usr/bin/env python3
"""Werk de zoekgegevens voor de erkende-koeltechnici-site bij via de officiële Vlaamse PDF."""
from __future__ import annotations
import hashlib
import json
import os
from pathlib import Path
import re
import sys
import tempfile
from datetime import datetime
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo

import fitz

URL = "https://erkenningen.omgeving.vlaanderen.be/erk-services/ws/rest/dataset/lijst/technici_koeltechniek.pdf"
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data.js"


def fetch():
    req = Request(URL, headers={"User-Agent": "Mozilla/5.0 (compatible; ErkenningenChecker/1.0)", "Accept": "application/pdf,*/*", "Cache-Control": "no-cache"})
    with urlopen(req, timeout=65) as response:
        data = response.read(25 * 1024 * 1024 + 1)
    if len(data) > 25 * 1024 * 1024 or not data.startswith(b"%PDF-"):
        raise ValueError("PDF ontbreekt of is onverwacht groot")
    return data


def parse(pdf):
    document = fitz.open(stream=pdf, filetype="pdf")
    if document.page_count < 30:
        raise ValueError("Onverwacht weinig pagina's")
    cover = document[0].get_text()
    if "Erkende koeltechnici" not in cover:
        raise ValueError("Onjuiste bron-PDF")
    match = re.search(r"Versie\s+(\d{2}/\d{2}/\d{4})", cover)
    if not match:
        raise ValueError("Versiedatum niet gevonden")
    rows = []
    for page_index in range(1, document.page_count):
        for block in document[page_index].get_text("blocks"):
            lines = [s.strip() for s in block[4].splitlines() if s.strip()]
            if len(lines) < 3 or not (39 <= block[0] < 755):
                continue
            name = lines[0]
            if name in ("Naam", "ACTIEF", "Status"):
                continue
            if "ACTIEF" not in lines and not re.search(r"\bTKI\s+(?:I{1,3}|IV)\b", " ".join(lines)):
                continue
            registration = lines[1]
            if registration in ("ACTIEF", "Bijscholing") or re.fullmatch(r"TKI\s+(?:I{1,3}|IV)", registration):
                continue
            if name != name.upper():
                continue
            rows.append([name, registration, page_index + 1])
    if not 1000 <= len(rows) <= 30000:
        raise ValueError(f"Onverwacht aantal namen: {len(rows)}")
    return {
        "bron": URL,
        "versie": match.group(1),
        "gecontroleerd_op": datetime.now(ZoneInfo("Europe/Brussels")).isoformat(timespec="seconds"),
        "aantal": len(rows),
        "sha256": hashlib.sha256(pdf).hexdigest(),
        "personen": rows,
    }


def main():
    content = parse(fetch())
    js = "// Gegenereerd uit de officiële Vlaamse PDF.\nwindow.KOEL_DATA=" + json.dumps(content, ensure_ascii=False, separators=(",", ":")) + ";\n"
    with tempfile.NamedTemporaryFile("w", encoding="utf-8", dir=ROOT, prefix=".data-", suffix=".tmp", delete=False) as tmp:
        tmp.write(js)
        temporary = Path(tmp.name)
    os.replace(temporary, OUTPUT)
    print("Bijgewerkt:", content["versie"], "—", content["aantal"], "vermeldingen", content["gecontroleerd_op"])


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print("Download/verwerking mislukt; vorige gegevens blijven staan:", error, file=sys.stderr)
        sys.exit(1)
