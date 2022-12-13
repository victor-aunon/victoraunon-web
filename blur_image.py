# Libraries
import argparse
import base64
from io import BytesIO
import os

# Packages
from PIL import Image, ImageFilter

path = os.path.dirname(os.path.abspath((__file__)))

try:
    os.mkdir(os.path.join(path, "public", "images"))
except OSError:
    print(os.path.join(path, "public", "images"), "already exists")


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

    parser.add_argument(
        "--radius",
        required=False,
        default=20,
        type=int,
        help=(
            "The gaussian blur radius to use for blurring the image, "
            "default is 20"
        ),
    )

    return parser.parse_args()


def blur_image(image, radius):
    print("Processing", image, "...")

    name = os.path.basename(image).rsplit(".")[0]
    output_path = os.path.join(path, os.path.dirname(image))

    original_image = Image.open(image)
    ratio = original_image.width / original_image.height
    height = int(600 / ratio)
    rgb_image = original_image.convert("RGB")
    rgb_image.thumbnail(size=(600, height))
    blur_image = rgb_image.filter(ImageFilter.GaussianBlur(radius=radius))
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

    blur_image(args.image, args.radius)


if __name__ == "__main__":
    main()
