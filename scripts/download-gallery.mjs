import fs from 'fs';
import path from 'path';

const url = 'https://www.fulgurservice.it/pages/gallery';
const downloadDir = path.join(process.cwd(), 'public', 'images', 'gallery');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

async function scrapeGallery() {
  console.log('Fetching URL: ' + url);
  const response = await fetch(url);
  const html = await response.text();

  // Regex to extract all image URLs
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  let match;
  let i = 1;
  const downloaded = new Set();

  while ((match = imgRegex.exec(html)) !== null) {
    let imgSrc = match[1];
    if (imgSrc.startsWith('//')) {
      imgSrc = 'https:' + imgSrc;
    } else if (imgSrc.startsWith('/')) {
      imgSrc = 'https://www.fulgurservice.it' + imgSrc;
    }

    // Filter to only Shopify CDN images and avoid UI icons
    if (!imgSrc.includes('cdn.shopify.com/s/files') || imgSrc.toLowerCase().includes('logo') || imgSrc.toLowerCase().includes('icon')) {
      continue;
    }
    
    // Some urls might be low-res like _400x.jpg. Try to get the original if possible, or just strip query params.
    let cleanUrl = imgSrc.split('?')[0];
    
    // Shopify often adds _1024x1024 or _large to filenames. E.g. image_1024x1024.jpg
    // Let's just download whatever the src is, removing the query.
    
    if (downloaded.has(cleanUrl)) continue;
    downloaded.add(cleanUrl);

    let ext = path.extname(cleanUrl) || '.jpg';
    if(ext.includes('&')) ext = ext.split('&')[0];
    
    const filePath = path.join(downloadDir, `old-gallery-${i}${ext}`);

    console.log(`Downloading: ${cleanUrl}`);
    try {
      const imgRes = await fetch(cleanUrl);
      const buffer = await imgRes.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(buffer));
      console.log(`Saved -> old-gallery-${i}${ext}`);
      i++;
    } catch (err) {
      console.error('Error downloading:', cleanUrl, err.message);
    }
  }
  console.log(`\nFinished downloading ${i - 1} images.`);
}

scrapeGallery();
