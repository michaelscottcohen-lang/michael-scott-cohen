#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageEnhance

ROOT = Path(__file__).resolve().parents[1]
out = ROOT / "src/app/opengraph-image.jpg"
portrait_path = ROOT / "public/images/michael-hero-latest.jpg"

canvas = Image.new("RGB", (1200, 630), "#0B1320")
portrait = Image.open(portrait_path).convert("RGB")
scale = max(480 / portrait.width, 630 / portrait.height)
portrait = portrait.resize((round(portrait.width * scale), round(portrait.height * scale)), Image.Resampling.LANCZOS)
left = max(0, (portrait.width - 480) // 2)
portrait = portrait.crop((left, 0, left + 480, 630))
portrait = ImageEnhance.Color(portrait).enhance(0.82)
canvas.paste(portrait, (720, 0))

draw = ImageDraw.Draw(canvas)
draw.rectangle((690, 0, 780, 630), fill="#0B1320")
for x in range(690, 801):
    alpha = (x - 690) / 111
    pixel = portrait.getpixel((min(479, x - 321), 315))
    if not isinstance(pixel, tuple):
        raise TypeError("expected RGB portrait")
    color = tuple(round((1 - alpha) * a + alpha * b) for a, b in zip((11, 19, 32), pixel))
    draw.line((x, 0, x, 630), fill=color)

serif_path = "/System/Library/Fonts/Supplemental/Georgia.ttf"
sans_path = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
serif = ImageFont.truetype(serif_path, 66)
sans = ImageFont.truetype(sans_path, 22)
small = ImageFont.truetype(sans_path, 18)

draw.text((72, 74), "MICHAEL SCOTT COHEN", font=small, fill="#9FC4E3")
draw.text((72, 145), "Builder.", font=serif, fill="#F4F1EA")
draw.text((72, 225), "Operator.", font=serif, fill="#F4F1EA")
draw.text((72, 305), "Investor.", font=serif, fill="#F4F1EA")
draw.line((72, 426, 610, 426), fill="#476782", width=3)
draw.text((72, 465), "Ideas and lessons from inside the work.", font=sans, fill="#C9C7C1")
draw.text((72, 545), "michaelscottcohen.com", font=small, fill="#9FC4E3")

out.parent.mkdir(parents=True, exist_ok=True)
canvas.save(out, "JPEG", quality=90, optimize=True, progressive=True)
print(f"wrote {out} {out.stat().st_size} bytes")
