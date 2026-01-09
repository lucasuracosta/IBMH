import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = './public/images';
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  const files = await readdir(IMAGES_DIR);

  for (const file of files) {
    const filePath = join(IMAGES_DIR, file);
    const fileStats = await stat(filePath);
    const ext = extname(file).toLowerCase();

    // Skip if not an image or already small
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const sizeMB = fileStats.size / (1024 * 1024);

    // Only optimize files larger than 500KB
    if (fileStats.size < 500 * 1024) {
      console.log(`Skipping ${file} (${sizeMB.toFixed(2)} MB) - already optimized`);
      continue;
    }

    console.log(`Processing ${file} (${sizeMB.toFixed(2)} MB)...`);

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      // Resize if wider than MAX_WIDTH
      if (metadata.width > MAX_WIDTH) {
        image.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }

      // Output path (convert large PNGs to JPG if no alpha)
      let outputPath = filePath;

      if (ext === '.png') {
        // Check if the image has alpha channel
        if (metadata.hasAlpha) {
          // Keep as PNG but optimize
          await image
            .png({ quality: PNG_QUALITY, compressionLevel: 9 })
            .toFile(filePath + '.tmp');
        } else {
          // Convert to JPEG (much smaller)
          const jpgPath = filePath.replace('.png', '.jpg');
          await image
            .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
            .toFile(jpgPath);
          console.log(`  -> Converted to JPEG: ${basename(jpgPath)}`);
          outputPath = jpgPath;
        }
      } else {
        // JPEG optimization
        await image
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
          .toFile(filePath + '.tmp');
      }

      // Replace original with optimized version
      if (outputPath === filePath) {
        const { rename, unlink } = await import('fs/promises');
        await unlink(filePath);
        await rename(filePath + '.tmp', filePath);
      }

      const newStats = await stat(outputPath);
      const newSizeMB = newStats.size / (1024 * 1024);
      const reduction = ((1 - newStats.size / fileStats.size) * 100).toFixed(1);

      console.log(`  -> Optimized: ${newSizeMB.toFixed(2)} MB (${reduction}% reduction)\n`);

    } catch (error) {
      console.error(`  Error processing ${file}:`, error.message);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
