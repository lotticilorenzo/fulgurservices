import fs from 'fs'
import path from 'path'

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      if (!['node_modules', '.git', '.next'].includes(file)) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const files = walkSync('src');
const images = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Image tags
  const imgRegex = /<Image[^>]+>/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgTag = match[0];
    const srcMatch = imgTag.match(/src=["']([^"']+)["']/);
    const altMatch = imgTag.match(/alt=["']([^"']*)["']/);
    if (srcMatch && srcMatch[1].startsWith('/')) {
      images.push({ file, type: 'Image', src: srcMatch[1], alt: altMatch ? altMatch[1] : 'MISSING' });
    }
  }

  // Data entries (like in services-data.ts, case-studies, gallery)
  const dataRegex = /src:\s*["'](\/images\/[^"']+)["'][^}]*alt:\s*["']([^"']*)["']/g;
  while ((match = dataRegex.exec(content)) !== null) {
    images.push({ file, type: 'Data', src: match[1], alt: match[2] });
  }

  // Video and Source tags
  const vidRegex = /<(video|source)[^>]+>/g;
  while ((match = vidRegex.exec(content)) !== null) {
    const vidTag = match[0];
    const srcMatch = vidTag.match(/src=["']([^"']+)["']/);
    const posterMatch = vidTag.match(/poster=["']([^"']+)["']/);
    if (srcMatch && srcMatch[1].startsWith('/')) {
      images.push({ file, type: 'Video', src: srcMatch[1], alt: 'N/A' });
    }
    if (posterMatch && posterMatch[1].startsWith('/')) {
      images.push({ file, type: 'Video Poster', src: posterMatch[1], alt: 'N/A' });
    }
  }
}

// Deduplicate by src using a Map
const uniqueMedia = new Map();
images.forEach(i => {
  if (!uniqueMedia.has(i.src)) {
    uniqueMedia.set(i.src, i);
  }
});

fs.writeFileSync('extracted_media.json', JSON.stringify(Array.from(uniqueMedia.values()), null, 2));
console.log('Done writing extracted_media.json');
