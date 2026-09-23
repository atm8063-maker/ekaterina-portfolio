import os
from PIL import Image

def crop_bottom(img_path):
    try:
        img = Image.open(img_path)
        width, height = img.size
        # Crop bottom 15% to remove captions
        crop_amount = int(height * 0.15)
        cropped_img = img.crop((0, 0, width, height - crop_amount))
        cropped_img.save(img_path)
        print(f"Cropped {img_path}: {width}x{height} -> {width}x{height - crop_amount}")
    except Exception as e:
        print(f"Failed to process {img_path}: {e}")

directory = r"C:\Users\Екатерина\.gemini\portfolio Ekaterina\public\Кейсы\02-contact-real-estate"

for filename in os.listdir(directory):
    if filename.endswith(".jpg"):
        crop_bottom(os.path.join(directory, filename))
