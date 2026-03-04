
import { Jimp } from "jimp";
import path from "path";

async function main() {
  const imagePath = path.resolve("public/S500照片.png");
  console.log(`Processing: ${imagePath}`);
  
  try {
    const image = await Jimp.read(imagePath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;

    // Helper to get pixel index
    const getIdx = (x, y) => (y * width + x) * 4;

    // Helper to check if pixel is "white-ish"
    const isWhite = (x, y) => {
      const idx = getIdx(x, y);
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      // Check if close to white (255, 255, 255)
      // Tolerance: sum of differences < 30 or individual > 240
      // Let's use a strict threshold for "background white"
      return r > 230 && g > 230 && b > 230;
    };

    // Helper to check if pixel is already transparent
    const isTransparent = (x, y) => {
      const idx = getIdx(x, y);
      return image.bitmap.data[idx + 3] === 0;
    };

    // BFS Flood Fill
    const queue = [];
    const visited = new Set();
    
    // Start from corners
    const corners = [
      [0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1]
    ];

    for (const [x, y] of corners) {
      if (isWhite(x, y)) {
        queue.push([x, y]);
        visited.add(`${x},${y}`);
      }
    }

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      const idx = getIdx(x, y);

      // Make transparent
      image.bitmap.data[idx + 3] = 0;

      // Check neighbors
      const neighbors = [
        [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const key = `${nx},${ny}`;
          if (!visited.has(key) && isWhite(nx, ny)) {
            visited.add(key);
            queue.push([nx, ny]);
          }
        }
      }
    }

    await image.write("public/S500照片_transparent.png");
    console.log("Done! Saved to public/S500照片_transparent.png with flood fill.");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

main();
