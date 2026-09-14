
// GMA Observatory - script.js corrigé avec traduction biomes
const translations = {
  fr: {
    brand: "GMA — Observatoire du Capital Vivant",
    nav_home: "Accueil",
    nav_pres: "Présentation",
    nav_formulas: "Formules",
    nav_indices: "Indices",
    nav_map: "Carte SIG",
    nav_calc: "Calculateur BRₘ",
    nav_delphi: "Delphi",
    nav_contact: "Contact",
    hero_title_top: "Observatoire International GMA",
    hero_title_bottom: "Capital Vivant",
    hero_sub: "CAPITAL VIVANT · SURVEILLANCE · ANALYSE · PROTECTION",
    cta_calc: "Calculer BRₘ →",
    cta_delphi: "Contribuer bénévolement",
    cta_map: "Suivi des sites",
    stat1: "Sites formalisés",
    stat2: "Sites à valider",
    stat3: "BRₘ max (El Bayadh–Djelfa)",
    stat4: "Seuil heuristique",
    home_kicker: "GMA · lecture rapide",
    home_operational: "CADRE OPÉRATIONNEL",
    home_concept: "Du concept au signal territorial",
    home_concept_text: "Le site ne présente pas seulement le BRₘ : il montre comment passer de la pression et de la résilience à une décision d’investigation, puis à une validation experte.",
    home_step1: "1. Observer",
    home_step2: "2. Calculer",
    home_step3: "3. Comparer",
    home_step4: "4. Valider",
    home_data_status: "STATUT DES DONNÉES",
    home_poc: "Preuve de concept",
    home_formal_sites: "Sites formalisés",
    home_priority_candidates: "Sites à valider",
    home_illustrative: "Ensemble du catalogue",
    home_external_calibration: "Calibration externe",
    home_to_conduct: "À conduire",
    home_interpretation: "INTERPRÉTATION",
    home_signal_not_verdict: "Le BRₘ est un signal, pas un verdict",
    home_signal_text: "La version BRₘ⁰ est exploratoire. Le franchissement d’un seuil sert à prioriser l’analyse et ne remplace ni expertise locale, ni protocole statistique, ni validation indépendante.",
    // Biomes - FR
    biome_all: "Tous les biomes",
    biome_mediterranean: "Méditerranéen",
    biome_steppe: "Hauts Plateaux / Steppe",
    biome_oasis: "Oasis Saharienne",
    biome_sahel: "Sahel",
    biome_tropical_forest: "Forêt Tropicale Humide",
    biome_wetland: "Zone Humide / Ramsar",
    biome_mountain: "Montagne",
    biome_savanna: "Savane / Brousse",
    biome_delta: "Delta Fluvial",
    filter_biome_label: "Filtrer par biome :",
    pres_title: "Présentation de l’Observatoire",
    pres_p1: "L’Observatoire International GMA (Global Mesological Alert) est une plateforme dédiée à la détection et à la gestion des ruptures écologiques et institutionnelles. Il s’appuie sur le concept de Capital Vivant et sur l’écologie opérationnelle.",
    pres_p2: "Le Capital Vivant désigne l’ensemble des infrastructures critiques de subsistence — biodiversité, sols, eau et savoirs traditionnels associés — sans lesquelles la viabilité des territoires et la dignité de leurs habitants ne peuvent être assurées.",
    pres_p3: "Le système d’alerte mésologique globale (GMA) propose un signal heuristique, l’indice de rupture mésologique (BRₘ), conçu pour prioriser l’investigation et structurer le jugement expert.",
    pres_p4: "L’Observatoire s’adresse aux chercheurs, gestionnaires de territoires et experts volontaires souhaitant contribuer à la validation empirique du cadre.",
    book_title: "Ouvrage de référence",
    book_subtitle: "From Mediterranean Lessons to an Exploratory Framework for Territorial Resilience",
    author_title: "L’auteur",
    author_bio: "Chercheur en écologie opérationnelle et mésologie. Travaux centrés sur les systèmes socio-écologiques méditerranéens et nord-africains, la résilience territoriale et la formalisation d’outils d’alerte (GMA, BRₘ, médiance de résilience).",
    epistemic_title: "Statut épistémique",
    epistemic_text: "Ce travail présente un cadre théorique, un appareil d’indices et une preuve de concept empirique (n=10 sites algériens). Il ne constitue pas une validation externe.",
    formulas_title: "Formules et définitions",
    f1_title: "1. Indice de Rupture Mésologique (BRₘ)",
    f1_desc: "Signal heuristique de déséquilibre entre pression anthropique et résilience écologique. Le seuil ≈ 1,20 est provisoire et ne constitue pas un seuil réglementaire.",
    contact_title: "Contact",
    contact_email: "Email",
    contact_orcid: "ORCID",
    contact_doi: "DOI",
    license: "Licence CC BY-NC-SA 4.0 — Non commercialisable (Livre) + CC-BY 4.0 / CC0 (Baseline)",
    footer_copy: "© 2026 Observatoire International GMA — Capital Vivant · Mourad Ahmim"
  },
  en: {
    brand: "GMA — Living Capital Observatory",
    nav_home: "Home",
    nav_pres: "About",
    nav_formulas: "Formulas",
    nav_indices: "Indices",
    nav_map: "SIG Map",
    nav_calc: "BRₘ Calculator",
    nav_delphi: "Delphi",
    nav_contact: "Contact",
    hero_title_top: "International GMA Observatory",
    hero_title_bottom: "Living Capital",
    hero_sub: "LIVING CAPITAL · MONITORING · ANALYSIS · PROTECTION",
    cta_calc: "Calculate BRₘ →",
    cta_delphi: "Volunteer contribution",
    cta_map: "Site tracking",
    stat1: "Formalized sites",
    stat2: "Sites to validate",
    stat3: "BRₘ max (El Bayadh–Djelfa)",
    stat4: "Heuristic threshold",
    home_kicker: "GMA · quick read",
    home_operational: "OPERATIONAL FRAMEWORK",
    home_concept: "From concept to territorial signal",
    home_concept_text: "The site does not only present BRₘ: it shows how to move from pressure and resilience to an investigation decision, then to expert validation.",
    home_step1: "1. Observe",
    home_step2: "2. Calculate",
    home_step3: "3. Compare",
    home_step4: "4. Validate",
    home_data_status: "DATA STATUS",
    home_poc: "Proof of concept",
    home_formal_sites: "Formalized sites",
    home_priority_candidates: "Priority candidates",
    home_illustrative: "Full catalog",
    home_external_calibration: "External calibration",
    home_to_conduct: "To be conducted",
    home_interpretation: "INTERPRETATION",
    home_signal_not_verdict: "BRₘ is a signal, not a verdict",
    home_signal_text: "BRₘ⁰ version is exploratory. Threshold crossing is used to prioritize analysis and does not replace local expertise, statistical protocol, nor independent validation.",
    // Biomes - EN - THIS IS THE FIX
    biome_all: "All biomes",
    biome_mediterranean: "Mediterranean",
    biome_steppe: "High Plateaus / Steppe",
    biome_oasis: "Saharan Oasis",
    biome_sahel: "Sahel",
    biome_tropical_forest: "Tropical Humid Forest",
    biome_wetland: "Wetland / Ramsar",
    biome_mountain: "Mountain",
    biome_savanna: "Savanna / Bushland",
    biome_delta: "River Delta",
    filter_biome_label: "Filter by biome:",
    pres_title: "Observatory Presentation",
    pres_p1: "The International GMA Observatory (Global Mesological Alert) is a platform dedicated to detection and management of ecological and institutional ruptures. It is based on the concept of Living Capital and operational ecology.",
    pres_p2: "Living Capital designates all critical subsistence infrastructures — biodiversity, soils, water and associated traditional knowledge — without which territorial viability and dignity cannot be ensured.",
    pres_p3: "The Global Mesological Alert system (GMA) proposes a heuristic signal, the Mesological Rupture Index (BRₘ), designed to prioritize investigation and structure expert judgment.",
    pres_p4: "The Observatory addresses researchers, territory managers and volunteer experts willing to contribute to empirical validation of the framework.",
    book_title: "Reference book",
    book_subtitle: "From Mediterranean Lessons to an Exploratory Framework for Territorial Resilience",
    author_title: "The author",
    author_bio: "Researcher in operational ecology and mesology. Work focused on Mediterranean and North African socio-ecological systems, territorial resilience and formalization of alert tools (GMA, BRₘ, resilience mediance).",
    epistemic_title: "Epistemic status",
    epistemic_text: "This work presents a theoretical framework, an index apparatus and an empirical proof of concept (n=10 Algerian sites). It does not constitute external validation.",
    formulas_title: "Formulas and definitions",
    f1_title: "1. Mesological Rupture Index (BRₘ)",
    f1_desc: "Heuristic signal of imbalance between anthropogenic pressure and ecological resilience. Threshold ≈ 1.20 is provisional and not regulatory.",
    contact_title: "Contact",
    contact_email: "Email",
    contact_orcid: "ORCID",
    contact_doi: "DOI",
    license: "CC BY-NC-SA 4.0 License — Non-commercial (Book) + CC-BY 4.0 / CC0 (Baseline)",
    footer_copy: "© 2026 International GMA Observatory — Living Capital · Mourad Ahmim"
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gma_lang', lang);
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  // Update all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Re-render biome filters with new language
  if (typeof renderBiomeFilters === 'function') {
    renderBiomeFilters();
  }
  if (typeof renderSites === 'function') {
    renderSites();
  }
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
  document.querySelectorAll('nav button').forEach(b => {
    b.classList.toggle('active', b.dataset.page === pageId);
  });
  window.scrollTo(0,0);
  if (pageId === 'carte' && typeof initMap === 'function') {
    setTimeout(initMap, 100);
  }
}

// FIX BIOMES : génère les boutons avec data-i18n FR/EN
function renderBiomeFilters() {
  const biomes = [
    { key: 'biome_all', value: 'all' },
    { key: 'biome_mediterranean', value: 'mediterranean' },
    { key: 'biome_steppe', value: 'steppe' },
    { key: 'biome_oasis', value: 'oasis' },
    { key: 'biome_sahel', value: 'sahel' },
    { key: 'biome_tropical_forest', value: 'tropical_forest' },
    { key: 'biome_wetland', value: 'wetland' },
    { key: 'biome_mountain', value: 'mountain' },
    { key: 'biome_savanna', value: 'savanna' },
    { key: 'biome_delta', value: 'delta' }
  ];
  ['biome-filters','map-biome-filters'].forEach(id => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = '';
    biomes.forEach(b => {
      const btn = document.createElement('button');
      btn.className = 'biome-btn';
      btn.setAttribute('data-i18n', b.key);
      btn.setAttribute('data-biome', b.value);
      btn.textContent = translations[currentLang][b.key] || b.key;
      btn.style.cssText = 'padding:6px 12px;border:1px solid #cbd5e1;border-radius:999px;background:#fff;font-size:13px;cursor:pointer;margin:3px;';
      btn.onclick = () => filterByBiome(b.value, btn);
      container.appendChild(btn);
    });
  });
  // also translate all spans with data-i18n in mesures section
  document.querySelectorAll('#mesures [data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
}

function filterByBiome(biome, btnElement) {
  document.querySelectorAll('.biome-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  if (typeof filterSitesByBiome === 'function') {
    filterSitesByBiome(biome);
  } else {
    // fallback: dispatch event
    window.currentBiomeFilter = biome;
    if (typeof renderSites === 'function') renderSites();
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('gma_lang') || 'fr';
  setLang(saved);
  renderBiomeFilters();
  // KaTeX render
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '\\[', right: '\\]', display: true},
        {left: '\\(', right: '\\)', display: false},
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false}
      ]
    });
  }
});
