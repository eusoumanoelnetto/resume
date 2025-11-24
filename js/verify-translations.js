// Script de Verificação de Traduções
// Execute no console do navegador para verificar traduções faltantes

function verifyTranslations() {
  console.log('=== VERIFICAÇÃO DE TRADUÇÕES ===\n');
  
  // Coletar todas as chaves data-lang do HTML
  const elements = document.querySelectorAll('[data-lang]');
  const usedKeys = new Set();
  
  elements.forEach(el => {
    usedKeys.add(el.getAttribute('data-lang'));
  });
  
  console.log(`Total de elementos com data-lang: ${elements.length}`);
  console.log(`Chaves únicas: ${usedKeys.size}\n`);
  
  // Verificar cada idioma
  const languages = ['pt', 'en', 'es'];
  
  languages.forEach(lang => {
    console.log(`\n--- Verificando idioma: ${lang.toUpperCase()} ---`);
    const missing = [];
    
    usedKeys.forEach(key => {
      if (!translations[lang] || !translations[lang][key]) {
        missing.push(key);
      }
    });
    
    if (missing.length > 0) {
      console.error(`❌ Traduções faltando (${missing.length}):`, missing);
    } else {
      console.log(`✅ Todas as traduções presentes!`);
    }
  });
  
  // Listar todas as chaves usadas
  console.log('\n=== CHAVES USADAS NO HTML ===');
  console.log(Array.from(usedKeys).sort());
}

// Executar automaticamente
if (typeof translations !== 'undefined') {
  verifyTranslations();
} else {
  console.error('Objeto translations não encontrado! Verifique se o arquivo translations.js foi carregado.');
}
