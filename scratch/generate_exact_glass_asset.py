import os
from PIL import Image, ImageFilter, ImageEnhance, ImageOps, ImageChops

base_path = "public/images/hero/thanush-base.webp"
glass_out_path = "public/images/hero/thanush-glass.webp"

# 1. Load exact source base image (896 x 1199)
base_img = Image.open(base_path).convert("RGB")
w, h = base_img.size

# 2. Extract anatomical & structural contour edges (crystalline glass highlights)
gray_img = base_img.convert("L")
edges = gray_img.filter(ImageFilter.FIND_EDGES)
edges = ImageEnhance.Contrast(edges).enhance(3.0)
edges = ImageEnhance.Brightness(edges).enhance(1.5)
edges_rgb = ImageOps.colorize(edges, black="#08090A", white="#FFFFFF")

# 3. Create high-pass translucent cyber-glass tone map
inverted = ImageOps.invert(gray_img)
glass_tone = ImageOps.colorize(inverted, black="#0F1012", white="#A0B0C0")

# 4. Blend edge highlights over glass tone layer
glass_combined = ImageChops.add(glass_tone, edges_rgb, scale=1.0)

# Add subtle crimson refraction highlight on structural lines
red_accent = ImageOps.colorize(edges, black="#000000", white="#D52B32")
final_glass = ImageChops.screen(glass_combined, red_accent)

# 5. Save directly as public/images/hero/thanush-glass.webp (896 x 1199)
final_glass.save(glass_out_path, "WEBP", quality=95)

print(f"Successfully generated 100% pixel-aligned glass asset!")
print(f"Base dimensions: {base_img.size[0]} x {base_img.size[1]}")

verify_glass = Image.open(glass_out_path)
print(f"Glass dimensions: {verify_glass.size[0]} x {verify_glass.size[1]}")
