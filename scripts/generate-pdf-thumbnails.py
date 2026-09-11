"""
Build-time: render page 1 of each project PDF → public/thumbnails/[id].jpg
Invoked by: npm run thumbnails
"""
from __future__ import annotations

import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("PyMuPDF required: python -m pip install pymupdf", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "thumbnails"

SOURCES = [
    # Case studies
    ("kids-tracker", "case_studies/kids_tracker_case_study.pdf"),
    ("crypto-app", "case_studies/crypto_app.pdf"),
    ("e-learning", "case_studies/e_learning.pdf"),
    ("event-booking", "case_studies/event_booking.pdf"),
    ("cafeteria-pre-order", "case_studies/Cafeteria Pre-Order System.pdf"),
    ("temp-wifi", "case_studies/temp_wifi.pdf"),
    # Landing pages
    ("costume-landing", "landing_page/costume_landing_page.pdf"),
    ("banner", "landing_page/banner.pdf"),
    ("beauty-landing", "landing_page/beauty_landing_page.pdf"),
    ("ai-landing", "landing_page/ai_landing_page.pdf"),
    ("education-landing", "landing_page/education_landing_page.pdf"),
    ("metaverse-ventures", "landing_page/metaverse_ventures.pdf"),
    ("it-company", "landing_page/it_company.pdf"),
    ("travel-landing", "landing_page/travel_landing_page.pdf"),
    # Dashboards
    ("chat-bot", "dashboard/chat_bot.pdf"),
    ("education-dashboard", "dashboard/Education_dashboard.pdf"),
    ("order-inventory", "dashboard/order_inventory.pdf"),
    ("performance-overview", "dashboard/Performance overview.pdf"),
    ("stock-management", "dashboard/stock_management.pdf"),
    ("voice-agent", "dashboard/Voice_agent.pdf"),
]

MAX_SIDE = 1600


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, rel in SOURCES:
        pdf_path = ROOT / "public" / rel
        if not pdf_path.exists():
            print(f"Skip missing PDF: {rel}")
            continue
        print(f"Rendering {slug}...")
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)
        zoom = 1.25
        rect = page.rect
        # Tall single-page case studies: crop a top band for card previews
        clip = None
        if rect.height > rect.width * 3:
            clip = fitz.Rect(0, 0, rect.width, min(rect.width * 10 / 16, rect.height))
            rect = clip
        while max(rect.width, rect.height) * zoom > MAX_SIDE and zoom > 0.4:
            zoom *= 0.85
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), clip=clip, alpha=False)
        # Skip blank/corrupt renders so hand-made covers are not overwritten
        samples = pix.samples
        if samples and all(b > 250 for b in samples[:: max(1, len(samples) // 500)]):
            print(f"  !! blank render — keeping existing thumbnail for {slug}")
            doc.close()
            continue
        out_path = OUT / f"{slug}.jpg"
        pix.save(out_path.as_posix(), output="jpeg", jpg_quality=82)
        doc.close()
        print(f"  -> {out_path.relative_to(ROOT)}")
    print("Done.")


if __name__ == "__main__":
    main()
