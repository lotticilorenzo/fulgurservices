import fs from 'fs';
import path from 'path';

const urls = [
  "https://www.fulgurservice.it/cdn/shop/files/prima_dopo_1.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/prima_e_dopo_2.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/prima_e_dopo_3.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/ibra.png",
  "https://www.fulgurservice.it/cdn/shop/files/gallery_2.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/gallery_3.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/gallery_4.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/gallery_5.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/IMG_2681.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/gallery_12.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/gallery_13_262f95cc-c4ad-4aba-aada-b3a39879822d.jpg",
  "https://www.fulgurservice.it/cdn/shop/files/gallery_14.jpg"
];

const downloadDir = path.join(process.cwd(), 'public', 'images', 'gallery');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

async function downloadImages() {
  let count = 1;
  for (const url of urls) {
    const ext = path.extname(url).split('?')[0] || '.jpg';
    const filename = `gallery-project-${count}${ext}`;
    const filePath = path.join(downloadDir, filename);

    console.log(`Downloading ${filename}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved: ${filename}`);
      count++;
    } catch (err) {
      console.error(`Failed to download ${url}: ${err.message}`);
    }
  }
}

downloadImages();
