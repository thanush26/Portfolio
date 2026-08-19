import os
from PIL import Image

base_path = "public/images/hero/thanush-base.webp"
glass_path = "public/images/hero/thanush-glass.webp.png"
if not os.path.exists(glass_path):
    glass_path = "public/images/hero/thanush-glass.webp"

img_base = Image.open(base_path)
img_glass = Image.open(glass_path)

print(f"Base image mode={img_base.mode}, size={img_base.size}")
print(f"Glass image mode={img_glass.mode}, size={img_glass.size}")

# Target dimensions: EXACT 896 x 1199
target_width, target_height = img_base.size # 896, 1199
target_aspect = target_width / target_height

# Crop and fit img_glass to match 896 x 1199 aspect ratio without stretching
glass_width, glass_height = img_glass.size
glass_aspect = glass_width / glass_height

if glass_aspect > target_aspect:
    # Glass image is wider than target: crop left & right sides
    new_width = int(glass_height * target_aspect)
    offset_x = (glass_width - new_width) // 2
    crop_box = (offset_x, 0, offset_x + new_width, glass_height)
else:
    # Glass image is taller than target: crop top & bottom
    new_height = int(glass_width / target_aspect)
    offset_y = (glass_height - new_height) // 2
    crop_box = (0, offset_y, glass_width, offset_y + new_height)

cropped_glass = img_glass.crop(crop_box)
resized_glass = cropped_glass.resize((target_width, target_height), Image.Resampling.LANCZOS)

# Save as WebP with 896 x 1199 dimensions
out_path = "public/images/hero/thanush-glass.webp"
resized_glass.convert("RGB").save(out_path, "WEBP", quality=92)

print(f"Successfully processed glass asset to match base asset exactly!")
print(f"Final Base dimensions: {img_base.size[0]} x {img_base.size[1]}")

final_glass = Image.open(out_path)
print(f"Final Glass dimensions: {final_glass.size[0]} x {final_glass.size[1]}")
