import os
from PIL import Image

src_path = r"C:\Users\Admin\Downloads\WhatsApp Image 2026-08-20 at 1.59.20 AM.jpeg"
base_path = "public/images/hero/thanush-base.webp"
glass_out_path = "public/images/hero/thanush-glass.webp"

img_src = Image.open(src_path).convert("RGB")
img_base = Image.open(base_path).convert("RGB")

target_w, target_h = img_base.size # 896, 1199
target_aspect = target_w / target_h

src_w, src_h = img_src.size
src_aspect = src_w / src_h

# Center crop to match exact aspect ratio (896/1199)
if src_aspect > target_aspect:
    new_w = int(src_h * target_aspect)
    offset_x = (src_w - new_w) // 2
    crop_box = (offset_x, 0, offset_x + new_w, src_h)
else:
    new_h = int(src_w / target_aspect)
    offset_y = (src_h - new_h) // 2
    crop_box = (0, offset_y, src_w, offset_y + new_h)

cropped = img_src.crop(crop_box)
resized = cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

# Save as WEBP at public/images/hero/thanush-glass.webp
resized.save(glass_out_path, "WEBP", quality=95)

print(f"Successfully processed WhatsApp glass asset into thanush-glass.webp!")
print(f"Base dimensions: {img_base.size[0]} x {img_base.size[1]}")

final_glass = Image.open(glass_out_path)
print(f"Glass dimensions: {final_glass.size[0]} x {final_glass.size[1]}")
