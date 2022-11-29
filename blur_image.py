# Libraries
import argparse
import base64
from io import BytesIO
import os

# Packages
from PIL import Image, ImageFilter

path = os.path.dirname(os.path.abspath((__file__)))
output_path = os.path.join(path, "public", "images")


try:
    os.mkdir(output_path)
except OSError as e:
    print(e)


def parse_args():
    parser = argparse.ArgumentParser(
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
        description=(
            "Creates a blurred images and its base64 encoded string from an "
            "initial image"
        ),
    )

    parser.add_argument(
        "--image",
        required=True,
        type=str,
        help=("The image you want to blur"),
    )

    return parser.parse_args()


def blur_image(image):
    print("Processing", image, "...")

    name = os.path.basename(image).rsplit(".")[0]

    original_image = Image.open(image)
    ratio = original_image.width / original_image.height
    height = int(600 / ratio)
    rgb_image = original_image.convert("RGB")
    rgb_image.thumbnail(size=(600, height))
    blur_image = rgb_image.filter(ImageFilter.GaussianBlur(radius=20))
    buffered = BytesIO()
    blur_image.save(
        os.path.join(output_path, f"{name}_blur.{'jpeg'}"),
        optimize=True,
        format="jpeg"
    )
    blur_image.save(buffered, format="jpeg")
    img_base64 = bytes("data:image/jpeg;base64,", encoding='utf-8') \
        + base64.b64encode(buffered.getvalue())
    with open(os.path.join(output_path, f"{name}_blur.txt"), "w") as img_str:
        img_str.write(img_base64.decode())


def main():
    args = parse_args()

    blur_image(args.image)


if __name__ == "__main__":
    main()
