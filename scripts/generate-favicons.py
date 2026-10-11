import os
from PIL import Image, ImageDraw

def generate_favicons():
    # Supersampling factor for high-quality antialiasing
    HIGH_RES = 1024
    scale = (HIGH_RES * 0.66) / 104.5
    center_x = 87.05
    center_y = 53.45
    target_cx = HIGH_RES / 2
    target_cy = HIGH_RES / 2

    def transform_pt(x, y):
        return (
            (x - center_x) * scale + target_cx,
            (y - center_y) * scale + target_cy
        )

    # Mitsubishi diamonds raw coords
    top_diamond = [(87.0, 70.9), (107.2, 36.0), (87.0, 1.2), (66.9, 36.0)]
    right_diamond = [(87.0, 70.9), (107.2, 105.7), (147.4, 105.7), (127.3, 70.9)]
    left_diamond = [(87.0, 70.9), (66.9, 105.7), (26.7, 105.7), (46.8, 70.9)]

    pts_top = [transform_pt(x, y) for x, y in top_diamond]
    pts_right = [transform_pt(x, y) for x, y in right_diamond]
    pts_left = [transform_pt(x, y) for x, y in left_diamond]

    # Create high-res image
    img = Image.new("RGBA", (HIGH_RES, HIGH_RES), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Draw rounded rectangle background (sleek dark background)
    # Radius = 22% of dimension
    radius = int(HIGH_RES * 0.22)
    bg_color = (15, 15, 15, 255) # very deep rich black/anthracite #0F0F0F
    draw.rounded_rectangle([(0, 0), (HIGH_RES - 1, HIGH_RES - 1)], radius=radius, fill=bg_color)

    # Draw Mitsubishi Red diamonds
    red_color = (230, 0, 18, 255) # #E60012
    draw.polygon(pts_top, fill=red_color)
    draw.polygon(pts_right, fill=red_color)
    draw.polygon(pts_left, fill=red_color)

    public_dir = r"c:\server\www\FREELANCE\automitsubishijakarta\public"

    # Save PNGs with Lanczos resampling
    sizes = {
        "favicon-48x48.png": 48,
        "favicon-96x96.png": 96,
        "favicon-192x192.png": 192,
        "favicon-512x512.png": 512,
        "apple-touch-icon.png": 180,
    }

    for filename, sz in sizes.items():
        resized = img.resize((sz, sz), Image.Resampling.LANCZOS)
        out_path = os.path.join(public_dir, filename)
        resized.save(out_path, "PNG", optimize=True)
        print(f"Generated {filename} ({sz}x{sz})")

    # Save multi-size favicon.ico (16, 32, 48)
    ico_img = img.resize((48, 48), Image.Resampling.LANCZOS)
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    ico_path = os.path.join(public_dir, "favicon.ico")
    ico_img.save(ico_path, format="ICO", sizes=ico_sizes)
    print("Generated favicon.ico with sizes (16, 32, 48)")

if __name__ == "__main__":
    generate_favicons()
