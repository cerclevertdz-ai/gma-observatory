// Sites from Living Capital (Ahmim 2026) — formal n=10 + calibration candidates
const GMA_SITES = [
  // === Formal n=10 (Appendix A) ===
  { id:1,  name:"Djurdjura", country:"Algérie", lat:36.45, lng:4.15, phenotype:"Rupture", status:"confirmé", biome:"Méditerranéen montagnard", brM:2.89 , deltaP:0.90, rEco:0.56, vulnSum:0.80, B:0.55, S:0.35, P:0.60, rho:0.30, tau:0.15, source:"LIVRE103 — Table A.0 + §10.5"},
  { id:2,  name:"Chréa–Babors", country:"Algérie", lat:36.42, lng:2.88, phenotype:"Rupture", status:"confirmé", biome:"Méditerranéen montagnard", brM:2.15 , deltaP:0.72, rEco:0.61, vulnSum:0.82, source:"LIVRE103 — Table A.0"},
  { id:3,  name:"El Bayadh–Djelfa", country:"Algérie", lat:33.68, lng:1.02, phenotype:"Rupture", status:"confirmé", biome:"Steppe", brM:5.13 , deltaP:0.86, rEco:0.30, vulnSum:0.79, source:"LIVRE103 — Table A.0"},
  { id:4,  name:"Souf–M'Zab", country:"Algérie", lat:33.12, lng:6.07, phenotype:"Rupture", status:"confirmé", biome:"Oasis saharienne", brM:4.86 , deltaP:0.85, rEco:0.32, vulnSum:0.83, source:"LIVRE103 — Table A.0"},
  { id:5,  name:"Guerbes–Senhadja", country:"Algérie", lat:36.88, lng:7.25, phenotype:"Rupture", status:"confirmé", biome:"Zone humide Ramsar", brM:2.44 , deltaP:0.74, rEco:0.55, vulnSum:0.81, source:"LIVRE103 — Table A.0"},
  { id:6,  name:"Bainem", country:"Algérie", lat:36.78, lng:2.95, phenotype:"Résilience", status:"confirmé", biome:"Forêt périurbaine", brM:0.61 , deltaP:0.35, rEco:0.75, vulnSum:0.30, source:"LIVRE103 — Table A.0"},
  { id:7,  name:"El Kala (cœur)", country:"Algérie", lat:36.90, lng:8.45, phenotype:"Résilience", status:"confirmé", biome:"Parc National", brM:0.46 , deltaP:0.25, rEco:0.85, vulnSum:0.55, source:"LIVRE103 — Table A.0"},
  { id:8,  name:"Ahaggar", country:"Algérie", lat:23.30, lng:5.55, phenotype:"Résilience", status:"confirmé", biome:"Saharien montagnard", brM:0.26 , deltaP:0.10, rEco:0.63, vulnSum:0.645, source:"LIVRE103 — Table A.0"},
  { id:9,  name:"Yakouren–Akfadou", country:"Algérie", lat:36.72, lng:4.45, phenotype:"Résilience", status:"confirmé", biome:"Forêt de chênes", brM:0.68 , deltaP:0.35, rEco:0.74, vulnSum:0.448, source:"LIVRE103 — Table A.0"},
  { id:10, name:"Tassili n'Ajjer", country:"Algérie", lat:25.50, lng:8.50, phenotype:"Résilience", status:"confirmé", biome:"Sahara", brM:0.21 , deltaP:0.08, rEco:0.57, vulnSum:0.475, source:"LIVRE103 — Table A.0"},

  // === Calibration candidates (Chapter 12) ===
  { id:11, name:"Segura / Murcia", country:"Espagne", lat:37.98, lng:-1.13, phenotype:"Contre-cas", status:"à valider", biome:"Méditerranéen semi-aride", brM:1.35 },
  { id:12, name:"Datça–Bozburun", country:"Turquie", lat:36.75, lng:27.70, phenotype:"Résilience", status:"à valider", biome:"Méditerranéen", brM:0.79 },
  { id:13, name:"California Chaparral", country:"USA", lat:34.50, lng:-119.5, phenotype:"Rupture", status:"à valider", biome:"Chaparral", brM:1.92 },
  { id:14, name:"Murray–Darling", country:"Australie", lat:-34.50, lng:142.0, phenotype:"Rupture", status:"à valider", biome:"Bassin fluvial", brM:2.05 },
  { id:15, name:"Atacama", country:"Chili", lat:-24.50, lng:-69.25, phenotype:"Résilience", status:"à valider", biome:"Désert", brM:0.41 },
  { id:16, name:"Jourdain / Mer Morte", country:"Jordanie", lat:31.50, lng:35.50, phenotype:"Rupture", status:"à valider", biome:"Aride", brM:2.22 },
  { id:17, name:"Sahel / Maradi", country:"Niger", lat:13.50, lng:7.10, phenotype:"Rupture", status:"à valider", biome:"Sahélien", brM:1.78 },
  { id:18, name:"Okavango", country:"Botswana", lat:-19.30, lng:22.90, phenotype:"Résilience", status:"à valider", biome:"Delta intérieur", brM:0.58 },
  { id:19, name:"Sanjiangyuan", country:"Chine", lat:34.00, lng:96.00, phenotype:"Rupture", status:"à valider", biome:"Hauts plateaux", brM:1.65 },
  { id:20, name:"Loess Plateau", country:"Chine", lat:36.50, lng:109.0, phenotype:"Régénération", status:"à valider", biome:"Loess", brM:0.92 },

  // === Additional illustrative (Chapter 12 / A.14) ===
  { id:21, name:"Sidi Abdellah (Alger)", country:"Algérie", lat:36.68, lng:2.88, phenotype:"Rupture", status:"à valider", biome:"Périurbain", brM:null },
  { id:22, name:"Étang de Berre", country:"France", lat:43.45, lng:5.10, phenotype:"Rupture", status:"à valider", biome:"Lagune méditerranéenne", brM:1.15 },
  { id:23, name:"Urdaibai", country:"Espagne", lat:43.38, lng:-2.68, phenotype:"Résilience", status:"à valider", biome:"Réserve de biosphère", brM:0.59 },
  { id:24, name:"Aral Sea", country:"Kazakhstan/Ouzbékistan", lat:45.0, lng:60.0, phenotype:"Rupture", status:"à valider", biome:"Lac endoréique", brM:null },
  { id:25, name:"Great Barrier Reef", country:"Australie", lat:-18.3, lng:147.5, phenotype:"Rupture", status:"à valider", biome:"Récif corallien", brM:null }
];
