import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const CONFIG = {
  inputDir: './public/images',
  outputFormat: 'webp' as const,
  maxWidth: 1920,
  quality: 75,
  extensions: ['.jpg', '.jpeg', '.png'],
};

async function optimizeImages() {
  console.log('🚀 Starting image optimization engine...');
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;

  async function walkDir(dir: string) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        await walkDir(fullPath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (CONFIG.extensions.includes(ext)) {
          const relativePath = path.relative(CONFIG.inputDir, fullPath);
          const outputPath = fullPath.replace(ext, `.${CONFIG.outputFormat}`);

          try {
            const originalSize = stat.size;
            
            const image = sharp(fullPath);
            const metadata = await image.metadata();

            let pipeline = image;
            if (metadata.width && metadata.width > CONFIG.maxWidth) {
              pipeline = pipeline.resize(CONFIG.maxWidth);
            }

            await pipeline
              .toFormat(CONFIG.outputFormat, { quality: CONFIG.quality })
              .toFile(outputPath);

            const optimizedSize = fs.statSync(outputPath).size;

            totalOriginalSize += originalSize;
            totalOptimizedSize += optimizedSize;
            processedCount++;

            console.log(`✅ [${processedCount}] ${relativePath} Optimized: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
            
            // Delete original if it was a different extension
            if (fullPath !== outputPath) {
              // fs.unlinkSync(fullPath); // Keeping originals for now as a safety measure unless requested otherwise
            }
          } catch (error) {
            console.error(`❌ Error processing ${file}:`, error);
          }
        }
      }
    }
  }

  await walkDir(CONFIG.inputDir);

  const totalSaved = totalOriginalSize - totalOptimizedSize;
  const reductionPercent = ((totalSaved / totalOriginalSize) * 100).toFixed(2);

  console.log('\n--- 📊 Optimization Summary ---');
  console.log(`Files Processed: ${processedCount}`);
  console.log(`Original Size:   ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized Size:  ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Saved:     ${(totalSaved / 1024 / 1024).toFixed(2)} MB (${reductionPercent}%)`);
  console.log('-------------------------------\n');
}

optimizeImages().catch(console.error);
