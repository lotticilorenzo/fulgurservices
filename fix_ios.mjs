import fs from 'fs'
import path from 'path'

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const dirFile = path.join(dir, file)
    const dirent = fs.statSync(dirFile)
    if (dirent.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        filelist = walkSync(dirFile, filelist)
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile)
      }
    }
  }
  return filelist
}

const basePath = 'C:\\Users\\lotti\\Desktop\\fulgurservices\\src'
const files = walkSync(basePath)

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8')
  let original = content

  // 1. Min-h-screen & h-screen -> 100dvh
  content = content.replace(/min-h-screen/g, 'min-h-[100dvh]')
  
  if (file.includes('ScrollVideoSection')) {
    content = content.replace(/h-screen/g, 'h-[100dvh]')
  }
  
  // 4. Overscroll contain
  if (file.includes('Navbar.tsx')) {
    content = content.replace(/h-\[100dvh\] overflow-hidden/g, 'h-[100dvh] overflow-hidden overscroll-contain')
  }
  
  if (file.includes('FloatingActions.tsx')) {
     content = content.replace(/className="px-6 py-6 min-h-\[260px\]"/g, 'className="px-6 py-6 min-h-[260px] overflow-y-auto overscroll-contain"')
  }

  // 2 + 3. Fonts and appearance in forms
  if (file.includes('ContactForm.tsx') || file.includes('PreventiveForm.tsx')) {
     content = content.replace(/font-sans text-sm text-\[var\(--tx-1\)\]/g, "font-sans text-base text-[var(--tx-1)] appearance-none")
  }
  
  if (file.includes('LavoraConNoiClient.tsx')) {
     content = content.replace(/px-6 py-4 text-sm focus:ring-2/g, "px-6 py-4 text-base appearance-none focus:ring-2")
  }

  if (content !== original) {
    fs.writeFileSync(file, content)
    console.log(`Updated: ${path.relative(basePath, file)}`)
  }
}

console.log('iOS & WebKit fixes applied successfully.')
