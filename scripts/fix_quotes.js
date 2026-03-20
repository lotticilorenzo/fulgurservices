const fs = require('fs');
const path = require('path');

try {
  const reportPath = path.join(__dirname, '..', 'eslint_report.json');
  if (!fs.existsSync(reportPath)) {
    console.error('eslint_report.json non trovato');
    process.exit(1);
  }

  let rawJSON = fs.readFileSync(reportPath, 'utf16le');
  if (rawJSON.charCodeAt(0) === 0xFEFF) {
    rawJSON = rawJSON.slice(1);
  }
  const reports = JSON.parse(rawJSON);
  let totalFixed = 0;

  reports.forEach(fileReport => {
    const errorMessages = fileReport.messages.filter(m => m.ruleId === 'react/no-unescaped-entities');
    
    if (errorMessages.length > 0) {
      let content = fs.readFileSync(fileReport.filePath, 'utf8');
      let lines = content.split('\n');
      
      // We must apply fixes from bottom to top so line/col don't shift!
      errorMessages.sort((a, b) => b.line - a.line || b.column - a.column);
      
      errorMessages.forEach(err => {
        // ESLint string might point exactly to '
        const lineIdx = err.line - 1;
        const colIdx = err.column - 1;
        
        const lineText = lines[lineIdx];
        if (lineText && lineText[colIdx] === "'") {
          lines[lineIdx] = lineText.slice(0, colIdx) + "&apos;" + lineText.slice(colIdx + 1);
          totalFixed++;
        } else if (lineText && lineText[colIdx] === '"') {
          lines[lineIdx] = lineText.slice(0, colIdx) + "&quot;" + lineText.slice(colIdx + 1);
          totalFixed++;
        }
      });
      
      fs.writeFileSync(fileReport.filePath, lines.join('\n'), 'utf8');
    }
  });

  console.log(`Fix completato. Apostrofi/Virgolette corretti: ${totalFixed}`);
} catch (error) {
  console.error('Detailed Error:', error);
}
