const fs = require('fs');
const path = require('path');

const explicitMap = {
  "/videos/entrata-fulgur.mp4": "/videos/impresa-pulizie-parma-videopresentazione.mp4",
  "/videos/entrata-fulgur-mobile.mp4": "/videos/impresa-pulizie-parma-videopresentazione-mobile.mp4",
  "/videos/macchina-pulitrice.mp4": "/videos/pulizie-industriali-macchinari-parma.mp4",
  "/videos/macchina-pulitrice-mobile.mp4": "/videos/pulizie-industriali-macchinari-parma-mobile.mp4",
  "/videos/goccia-acqua.mp4": "/videos/pulizie-professionali-ecosostenibili-acqua.mp4",
  "/videos/goccia-acqua-mobile.mp4": "/videos/pulizie-professionali-ecosostenibili-acqua-mobile.mp4",
  "/videos/scroll-section.mp4": "/videos/metodo-lavoro-pulizie-parma-processo.mp4",

  "/images/logo-official.webp": "/images/logo-fulgur-service-impresa-pulizie-parma.webp",
  "/images/logo-fulgur-service.png": "/images/logo-impresa-di-pulizie-parma-fulgur.png",
  "/images/chi-siamo.webp": "/images/fondatore-impresa-pulizie-fulgur-service-parma.webp",
  "/images/real-team-fulgur.webp": "/images/team-operatori-pulizie-professionali-parma.webp",
  "/images/real-van-fulgur.webp": "/images/flotta-furgoni-impresa-pulizie-parma.webp",
  "/images/parma-copertura-territorio.jpg": "/images/zone-copertura-servizi-pulizie-parma-provincia.jpg",

  "/images/macchinari/klindex-polisher-ai.png": "/images/macchinari/monospazzola-lucidatrice-parma-klindex.png",
  "/images/macchinari/industrial-vacuum-ai.png": "/images/macchinari/aspiratore-industriale-polveri-cfm-parma.png",

  "/images/servizi/pulizia-pannelli-fotovoltaici-parma.png": "/images/servizi/lavaggio-pulizia-pannelli-fotovoltaici-parma.png",
  "/images/servizi/pulizie-hotel-alberghi-parma.png": "/images/servizi/pulizie-settore-alberghiero-hotel-bed-breakfast-parma.png",

  "/images/gallery/gallery-project-1.jpg": "/images/gallery/pulizie-a-fondo-prima-dopo-parma.jpg",
  "/images/gallery/gallery-project-2.jpg": "/images/gallery/trattamento-superfici-pavimenti-prima-dopo-parma.jpg",
  "/images/gallery/gallery-project-3.jpg": "/images/gallery/lucidatura-marmo-gres-risultato-parma.jpg",
  "/images/gallery/gallery-project-4.png": "/images/gallery/operatori-squadra-pulizie-fulgur-service.png",
  "/images/gallery/gallery-project-5.jpg": "/images/gallery/pulizia-vetrate-in-quota-piattaforma-parma.jpg",
  "/images/gallery/gallery-project-6.jpg": "/images/gallery/macchinari-pulizia-professionale-industriale.jpg",
  "/images/gallery/gallery-project-7.jpg": "/images/gallery/pulizia-capannone-magazzino-industriale-parma.jpg",
  "/images/gallery/gallery-project-8.jpg": "/images/gallery/risultato-pulizia-pavimentazione-resina.jpg",
  "/images/gallery/gallery-project-9.jpg": "/images/gallery/pulizie-uffici-aziendali-open-space-parma.jpg",
  "/images/gallery/gallery-project-10.jpg": "/images/gallery/pulizia-condominio-parti-comuni-parma.jpg",
  "/images/gallery/gallery-project-11.jpg": "/images/gallery/sanificazione-vapore-ambienti-sensibili.jpg",
  "/images/gallery/gallery-project-12.jpg": "/images/gallery/pulizia-post-cantiere-nuova-costruzione.jpg",
};

const altMap = {
  "/images/logo-official.webp": "Fulgur Service — Logo Ufficiale dell'impresa di pulizie professionali a Parma",
  "/images/logo-fulgur-service.png": "Fulgur Service Logo — Impresa Pulizie Parma",
  "/images/chi-siamo.webp": "Il fondatore di Fulgur Service davanti al furgone aziendale: la nostra impresa di pulizie a Parma",
  "/images/real-team-fulgur.webp": "Il team di operatori professionisti di Fulgur Service al lavoro a Parma",
  "/images/real-van-fulgur.webp": "La flotta moderna di furgoni Fulgur Service per pronti interventi a Parma e provincia",
  "/images/parma-copertura-territorio.jpg": "Mappa aerea di Parma e provincia, l'area coperta dai nostri servizi di pulizia professionali",
  "/images/macchinari/klindex-polisher-ai.png": "Monospazzola professionale Klindex usata per la lucidatura e la cristallizzazione dei pavimenti",
  "/images/macchinari/industrial-vacuum-ai.png": "Aspiratore industriale professionale CFM utilizzato per l'aspirazione di polveri e macerie nei capannoni",
  "/images/servizi/pulizia-pannelli-fotovoltaici-parma.png": "Operazione di lavaggio professionale per pannelli fotovoltaici a Parma e provincia",
  "/images/servizi/pulizie-hotel-alberghi-parma.png": "Servizio di pulizia e riassetto camere per hotel e strutture ricettive a Parma",
  "/images/gallery/gallery-project-1.jpg": "Risultato eccellente: prima e dopo l'intervento di pulitura a fondo per un cliente di Parma",
  "/images/gallery/gallery-project-2.jpg": "Differenza netta sul pavimento industriale prima e dopo il nostro trattamento professionale",
  "/images/gallery/gallery-project-3.jpg": "Pavimento riportato a nuovo tramite i nostri processi di lucidatura e sgrassamento",
  "/images/gallery/gallery-project-4.png": "La squadra operativa Fulgur Service impiegata in un intervento strutturato",
  "/images/gallery/gallery-project-5.jpg": "Pulizia di vetrate in altezza tramite piattaforme aeree specializzate e personale formato",
  "/images/gallery/gallery-project-6.jpg": "Flotta di macchinari industriali pronta per sanificazioni e lavaggi di grandi aree",
  "/images/gallery/gallery-project-7.jpg": "Risanamento di un grande magazzino logistico e lavaggio pavimentazione industriale a Parma",
  "/images/gallery/gallery-project-8.jpg": "Pavimentazione in resina sanificata e trattata per la massima resa visiva e igienica",
  "/images/gallery/gallery-project-9.jpg": "Ambiente di lavoro aziendale e uffici igienizzati con protocolli quotidiani",
  "/images/gallery/gallery-project-10.jpg": "Manutenzione ordinaria per le parti comuni, scale e androni di un condominio a Parma",
  "/images/gallery/gallery-project-11.jpg": "Procedura di sanificazione avanzata con vapore saturo per eliminare patogeni e batteri",
  "/images/gallery/gallery-project-12.jpg": "Intervento di sgrosso e pulizia fine cantiere al termine di una ristrutturazione edile",
};

const extractedMedia = JSON.parse(fs.readFileSync('extracted_media.json', 'utf8'));
const basePublic = path.join(__dirname, '..', 'public');
const baseSrc = path.join(__dirname, '..', 'src');

/** 1. Rename files on disk */
Object.keys(explicitMap).forEach(oldPath => {
  const newPath = explicitMap[oldPath];
  const absOld = path.join(basePublic, oldPath.replace('/images/', 'images/').replace('/videos/', 'videos/'));
  const absNew = path.join(basePublic, newPath.replace('/images/', 'images/').replace('/videos/', 'videos/'));
  
  if (fs.existsSync(absOld)) {
    console.log(`Renaming physical: ${oldPath} -> ${newPath}`);
    fs.renameSync(absOld, absNew);
  } else {
    console.log(`Warning: Physical file not found for ${oldPath}`);
  }
});

/** 2. Replace instances in code */
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
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts') || dirFile.endsWith('.json')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const allSrcFiles = walkSync(baseSrc);
let modifiedCount = 0;

for (const file of allSrcFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Step 1: Replace paths first to ensure new names are in
  // Wait, if an image uses a path and is in the explicitMap, replace it
  Object.keys(explicitMap).forEach(oldPath => {
    // Escape and global replace old path
    const regex = new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    content = content.replace(regex, explicitMap[oldPath]);
  });
  
  // Step 2: Alt tags replacement using extractedMedia mapping exactly
  // Extracted media contains exact alt currently used in the codebase.
  // We locate these exact alt values and replace them specifically.
  extractedMedia.forEach(media => {
    const currentAlt = media.alt;
    const oldPath = media.src;
    
    // Check if we defined an override in our altMap for this specific oldPath
    if (currentAlt && currentAlt !== 'MISSING' && currentAlt !== 'N/A' && altMap[oldPath]) {
      const newAlt = altMap[oldPath];
      
      // Look for alt="currentAlt" or alt='currentAlt' or alt: 'currentAlt' etc
      // Instead of guessing quotes, let's target the exact string pattern 
      // where currentAlt is literally matching.
      
      const q1 = `"${currentAlt}"`;
      const q2 = `'${currentAlt}'`;
      const rep1 = `"${newAlt}"`;
      const rep2 = `'${newAlt}'`;
      
      content = content.split(q1).join(rep1);
      content = content.split(q2).join(rep2);
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
  }
}

console.log('Done refactoring codebase. Files modified: ' + modifiedCount);
