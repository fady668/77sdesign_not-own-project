from PIL import Image


def is_cmyk(image_path: str):
    with Image.open(image_path) as img:
        return img.mode == "CMYK"
