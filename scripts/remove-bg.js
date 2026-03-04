
import { Jimp } from "jimp";
import path from "path";

async function main() {
  const imagePath = path.resolve("public/S500照片.png");
  console.log(`Processing: ${imagePath}`);
  
  try {
    const image = await Jimp.read(imagePath);
    
    // Scan all pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // Define threshold for white
      // If pixel is very light (near white)
      if (red > 240 && green > 240 && blue > 240) {
        // Make it transparent
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.write("public/S500照片_transparent.png");
    console.log("Done! Saved to public/S500照片_transparent.png");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

main();
