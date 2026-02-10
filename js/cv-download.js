const cvFilesByLang = {
  pt: "assets/cv/Manoel-Netto-CV-PT.pdf",
  en: "assets/cv/Manoel-Netto-CV-EN.pdf",
  es: "assets/cv/Manoel-Netto-CV-ES.pdf"
};

const cvLabelsByLang = {
  pt: "📄 Baixar CV (PDF)",
  en: "📄 Download CV (PDF)",
  es: "📄 Descargar CV (PDF)"
};

function normalizeLang(lang) {
  return cvFilesByLang[lang] ? lang : "pt";
}

function updateCvDownload(lang) {
  const normalizedLang = normalizeLang((lang || "pt").toLowerCase());
  const downloadBtn = document.getElementById("downloadCvBtn");

  if (!downloadBtn) {
    console.warn("Elemento downloadCvBtn não encontrado.");
    return;
  }

  downloadBtn.href = cvFilesByLang[normalizedLang];
  downloadBtn.textContent = cvLabelsByLang[normalizedLang];
}

window.updateCvDownload = updateCvDownload;
