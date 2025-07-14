import fs from "fs";
import path from "path";
import { getPlaiceholder } from "plaiceholder";
import sharp from "sharp";

const galleryDir = path.join(process.cwd(), "public/photo_gallery");
const outputFile = path.join(process.cwd(), "blurDataURLs.json");

const exts = [".jpg", ".jpeg", ".png", ".webp", ".JPG"];
const files = fs
  .readdirSync(galleryDir)
  .filter((file) => exts.includes(path.extname(file)));

const results = await Promise.all(
  files.map(async (file) => {
    const filePath = path.join(galleryDir, file);
    const src = `/photo_gallery/${file}`;
    const { base64 } = await getPlaiceholder(filePath);

    // Get image dimensions
    const { width, height } = await sharp(filePath).metadata();

    return {
      src,
      blurDataURL: base64,
      width,
      height,
    };
  })
);

fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
console.log(`Wrote ${results.length} entries to ${outputFile}`);
