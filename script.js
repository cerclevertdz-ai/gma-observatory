/* GMA Observatory — script.js v119 · i18n complet */
let currentLang = localStorage.getItem('gmaLang') || 'fr';
let mapInstance = null;
let activePhenotype = 'all';

const i18n = {
  fr: {
    brand:'GMA — Observatoire du Capital Vivant',
    nav_home:'Accueil', nav_pres:'Présentation', nav_formulas:'Formules',
    nav_indices:'Indices', nav_map:'Carte SIG', nav_calc:'Calculateur BRₘ',
    nav_delphi:'Delphi', nav_contact:'Contact',
    hero_title_top:'Observatoire International GMA',
    hero_title_bottom:'Living Capital',
    hero_kicker:'GLOBAL MESOLOGY ALERT',
    hero_sub:'CAPITAL VIVANT · SURVEILLANCE · ANALYSE · PROTECTION',
    cta_calc:'Calculer BRₘ →', cta_delphi:'Contribuer bénévolement',
    cta_map:'Suivi des sites',
    stat1:'Sites formalisés', stat2:'Sites à valider',
    stat3:'BRₘ max (El Bayadh–Djelfa)', stat4:'Seuil heuristique',
    home_kicker:'GMA · lecture rapide',
    home_concept:'Du concept au signal territorial',
    home_concept_text:"Le site ne présente pas seulement le BRₘ : il montre comment passer de la pression et de la résilience à une décision d'investigation, puis à une validation experte.",
    home_step1:'1. Observer', home_step2:'2. Calculer',
    home_step3:'3. Comparer', home_step4:'4. Valider',
    home_data_status:'STATUT DES DONNÉES', home_poc:'Preuve de concept',
    home_formal_sites:'Sites formalisés',
    home_priority_candidates:'Sites à valider',
    home_illustrative:'Ensemble du catalogue',
    home_external_calibration:'Calibration externe',
    home_to_conduct:'À conduire',
    home_interpretation:'INTERPRÉTATION',
    home_signal_not_verdict:'Le BRₘ est un signal, pas un verdict',
    home_signal_text:"BRₘ⁰ est exploratoire. Un franchissement du seuil sert à prioriser l'analyse et ne remplace ni expertise locale, ni protocole statistique, ni validation indépendante.",
    pres_title:"Présentation de l'Observatoire",
    pres_p1:"L'Observatoire International GMA (Global Mesological Alert) est une plateforme dédiée à la détection et à la gestion des ruptures écologiques et institutionnelles. Il s'appuie sur le concept de Capital Vivant et sur l'écologie opérationnelle.",
    pres_p2:"Le Capital Vivant désigne l'ensemble des infrastructures critiques de subsistance — biodiversité, sols, eau et savoirs traditionnels associés — sans lesquelles la viabilité des territoires et la dignité de leurs habitants ne peuvent être assurées. L'Observatoire transforme cette intuition en un cadre de diagnostic mesurable.",
    pres_p3:"Le système d'alerte msologique globale (GMA) propose un signal heuristique, l'indice de rupture mésologique (BRₘ), conçu pour prioriser l'investigation et structurer le jugement expert. La version actuelle (BRₘ⁰) est exploratoire. La version calibrée (BRₘ★) est l'objet du protocole Delphi n=20.",
    pres_p4:"L'Observatoire s'adresse aux chercheurs, gestionnaires de territoires et experts volontaires souhaitant contribuer à la validation empirique du cadre sur des sites prioritaires méditerranéens, nord-africains et internationaux.",
    book_title:'Ouvrage de référence',
    book_subtitle:'From Mediterranean Lessons to an Exploratory Framework for Territorial Resilience',
    author_title:"L'auteur",
    author_bio:"Chercheur en écologie opérationnelle et mésologie. Travaux centrés sur les systèmes socio-écologiques méditerranéens et nord-africains, la résilience territoriale et la formalisation d'outils d'alerte (GMA, BRₘ, médiance de résilience).",
    contact_orcid:'ORCID',
    epistemic_title:'Statut épistémique',
    epistemic_text:"Ce travail présente un cadre théorique, un système d'indices et une preuve de concept empirique (n=10 sites algériens). Il ne constitue pas une validation externe. La calibration formelle (n=20, double notation en aveugle, poids fixés avant ROC) relève du protocole Delphi en cours.",
    formulas_title:'Formules et définitions',
    normalisation_kicker:'SECTION MÉTHODOLOGIQUE — INDICES',
    indices_title:'Calculs complémentaires des indices',
    tau_calc_title:'Trajection τ(t) — calcul direct',
    tau_calc_intro:'Lorsque B, S, P et ρ sont disponibles, la trajection peut être calculée directement. Les valeurs préremplies reproduisent le cas de preuve de concept Djurdjura.',
    btn_tau:'Calculer τ(t)',
    bri_calc_title:'BRI dynamique — vitesse de changement',
    bri_calc_intro:"Deux observations distinctes de la trajection et une durée explicite sont nécessaires. Aucun BRI n'est inventé en l'absence de données temporelles.",
    btn_bri:'Calculer le BRI dynamique',
    et_calc_title:"Coefficient E(t) — substitution de l'eau",
    et_calc_intro:"Pour l'eau, E(t) rapporte les volumes importé, dessalé et réutilisé au volume consommé. Le résultat est borné à [0,1].",
    et_imported:'Volume importé', et_desal:'Volume dessalé',
    et_reused:'Volume réutilisé', et_consumed:'Volume consommé',
    btn_et:'Calculer E(t)',
    implementation_warning_title:'Important',
    implementation_warning:"Ces calculs appliquent les équations déclarées. Ils ne transforment pas des estimations en validation empirique. Les valeurs maîtresses de la preuve de concept restent celles de la Table A.0 jusqu'à leur re-calcul selon le protocole.",
    norm_bri:"BRI_dyn=(τ₂−τ₁)/(t₂−t₁). Deux observations distinctes et une durée explicite sont nécessaires ; aucune valeur n'est inventée quand elles manquent.",
    norm_adj:'BRₘ_adj=BRₘ×(1−E(t)). E(t)>0,70 signale, selon la convention actuelle, une stabilité fortement soutenue par substitution technologique.',
    norm_details_title:'Détails des fonctions de normalisation',
    norm_family1_title:'Famille 1 — Variables bornées',
    norm_family1:'x̂ = clip((x_ref−x_obs)/(x_ref−x_floor),0,1). Les références sont définies par domaine biogéographique.',
    norm_family2_title:'Famille 2 — Variables de ratio',
    norm_family2:"x̂ = min(1, ln(1+q/q_sust)/ln(1+k)), avec k=5. La saturation à ×5 correspond à l'ancrage « extrême » du protocole.",
    norm_aggregation_title:'Agrégation de ΔP',
    norm_aggregation:"ΔP=Σw_k x̂_k, avec Σw_k=1. Un indicateur manquant n'est pas imputé à zéro : les poids sont redistribués sur les indicateurs observés et la substitution est signalée.",
    norm_examples_title:'Exemples fonctionnels publiés',
    norm_examples:"Souf–M'Zab : 70→116 Hm³/an pour une recharge d'environ 25 Hm³/an donne q/q_sust≈4,6 et x̂≈0,96. Guerbes–Senhadja : NDVI 0,63→0,41 avec x_ref=0,72 et x_floor=0,12 donne x̂≈0,52.",
    f1_title:'1. Indice de Rupture Mésologique (BRₘ)',
    f1_desc:"Signal heuristique de déséquilibre entre pression anthropique et résilience écologique. Le seuil ≈ 1,20 est provisoire et ne constitue pas un seuil réglementaire.",
    f1_dp_text:'Pression anthropique relative normalisée [0,1]',
    f1_r_text:'Résilience écologique normalisée [0,1], avec R > 0 dans le calcul',
    f1_mu_text:'Poids de vulnérabilité, à calibrer par Delphi',
    f1_vi_text:'Intensité observée de la vulnérabilité [0,1]',
    f2_title:'2. BRₘ ajusté',
    f2_desc:'Le BRₘ ajusté tient compte de la substitution techno-institutionnelle : BRₘ_adj = BRₘ × (1 − E(t)).',
    f2_brm:'BRₘ — signal de rupture mésologique avant correction',
    f2_et:'E(t) — coefficient de substitution techno-institutionnelle [0,1]',
    f2_et_def:"Part de la stabilité territoriale reposant sur des apports technologiques ou institutionnels externes. Pour l'eau : (volume importé + dessalé + rutilisé) / volume consommé.",
    f2_rule:'E(t) > 0,70 indique une stabilité fortement soutenue par substitution technologique.',
    f3_title:'3. Trajection τ(t)',
    f3_desc:'La trajection modélise le degré de co-production vivante entre une communauté et son milieu.',
    f3_b:'B(t) — composante bio-écologique : intégrité écologique observée [0,1]',
    f3_s:'S(t) — composante socio-culturelle : vitalité des savoirs et pratiques de gestion [0,1]',
    f3_p:'P(t) — composante perceptive/existentielle : qualité vécue du milieu, attachement au lieu [0,1]',
    f3_rho:'ρ — paramètre de couplage : intensité de la co-production active entre communauté et milieu [0,1]',
    f3_op:"Φ — opérateur d'agrégation non substituable ; moyenne géométrique par défaut",
    f4_title:'4. Indice de Régénération Bioculturelle (BRI)',
    normalisation_title:'Paramétrage et normalisation des composantes',
    normalisation_intro:"Les indices GMA ne reçoivent pas directement des grandeurs physiques hétérogènes. Les variables brutes sont d'abord normalisées selon une règle déclarée, puis agrégées. Les 10 valeurs maîtresses publiées restent des scores de rubrique de preuve de concept.",
    normalisation_source:'Référence : Annexe A.2.2 et A.2.2 bis du protocole GMA.',
    norm_dp:"Pression anthropique : moyenne pondérée des sous-pressions normalisées. Variables de ratio : transformation logarithmique de l'excès q/q_sust, saturation avec k=5.",
    norm_e:"E(t) est, pour l'eau, la part de stabilité reposant sur des volumes importés, dessalés ou réutilisés rapportés au volume consommé.",
    norm_r:'Résilience écologique : score normalisé [0,1] construit sur un référentiel biogéographique explicite ; R doit rester >0 dans BRₘ.',
    norm_mu:"Poids des vulnérabilités : μᵢ≥0 et Σμᵢ=1 par site. Dans BRₘ⁰ ils sont issus d'un jugement expert ; BRₘ★ doit les fixer avant ROC.",
    norm_v:'Intensités de vulnérabilité [0,1] ; les ancres et leur cardinalisation doivent être documentées.',
    norm_tau:'τ(t)=ρ·(B·S·P)^(1/3), avec B, S, P et ρ normalisés ou bornés dans [0,1].',
    calc_published_title:'Charger une valeur publiée',
    calc_published_placeholder:'— Sélectionner un site formalisé —',
    calc_published_note:'Valeur de preuve de concept publiée.',
    f4_desc:"Le BRI dynamique suit la vitesse de changement du Capital Vivant entre deux temps d'observation.",
    f4_t1:'τ(t₁) — trajection au temps initial',
    f4_t2:'τ(t₂) — trajection au temps final',
    f4_time:"t₂ − t₁ — durée de la fenêtre d'observation",
    f4_read:"BRI > 0 indique une trajectoire de régénération ; BRI < 0 indique une dégradation. La magnitude doit être interprétée selon la fenêtre d'observation et le référentiel de normalisation.",
    map_title:'Carte des sites — Calibration n=20',
    map_desc:'10 sites formalisés et 15 sites à valider. Les marqueurs sont colorés par phénotype.',
    calc_title:'Calculateur BRₘ',
    btn_calc:'Calculer le BRₘ',
    contact_title:'Contact',
    delphi_title:'Appel à experts volontaires — Calibration n = 20',
    doi_banner_title:'Publications et données de référence (Zenodo)',
    doi_concept_label:'Concept',
    doi_concept_desc:'Living Capital — Concept initial',
    doi_book_label:'Livre v2',
    doi_book_desc:'Living Capital v119 (13 Sep 2026)',
    doi_baseline_label:'Baselines',
    doi_baseline_desc:'GMA Biome Baselines v1 (13 Sep 2026)',
    biome_section_kicker:'Document technique · Zenodo DOI 10.5281/zenodo.22738208',
    biome_title:'Biome Baselines — Ancres de calibration trans-biomes',
    biome_intro:'Le document GMA Biome Baselines fournit les ancres de référence (x_ref, x_floor, q_sust) pour 9 biomes majeurs, permettant de rendre le BRₘ calculable au-delà du périmètre méditerranéen/nord-africain initial. Chaque ancre est une hypothèse opérationnelle soumise au protocole A.9.',
    biome_rules_title:'Règles de translation inter-biomes',
    biome_rule1:'Biome dominant : le site est classé par le biome couvrant >60% du périmètre. Ses baselines sont utilisées pour toutes les transformations.',
    biome_rule2:'Biome mixte : si aucun biome ne dépasse 60%, calculer le BRₘ pour chaque biome avec ses baselines, puis moyenne pondérée par surface.',
    biome_rule3:'Zonation altitudinale : en montagne, baselines "Montagne" en amont et baselines du biome aval en contrebas.',
    biome_rule4:'Enclave urbaine : une ville dans un biome forestier ou steppique est évaluée avec deux jeux de baselines (urbain + environnant).',
    biome_reference:'Référence : GMA Biome Baselines v1.0, 2026. Texte CC-BY 4.0 | Ancres de données CC0.',
    biome_mfm_name:'Forêt méditerranéenne et matorral',
    biome_mfm_desc:'Tell, Californie, Chili — Feu, pâturage, fragmentation',
    biome_sas_name:'Steppe aride et semi-désertique',
    biome_sas_desc:'Hauts plateaux, Sahel, Asie centrale — Surcharge pastorale, déclin piézométrique',
    biome_zhl_name:'Zone humide et lagune côtière',
    biome_zhl_desc:'Ramsar, estuaires — Prélèvements, nutriments, conversion',
    biome_mbg_name:'Montagne et bassin versant glaciaire',
    biome_mbg_desc:'Himalaya, Andes, Haut Atlas — Abstraction glaciaire, mines, dégradation alpine',
    biome_mcp_name:'Mégalopole côtière et péri-urbain',
    biome_mcp_desc:'Étanchéité, îlot de chaleur, eau non rentable, vulnérabilité thermique',
    biome_osf_name:'Oasis saharienne et foggara',
    biome_osf_desc:'SASS, foggaras — Surexploitation aquifère, déclin du palmier, forage profond',
    biome_fth_name:'Forêt tropicale humide',
    biome_fth_desc:'Amazonie, Congo, Asie du Sud-Est — Déforestation, chasse, proximité du tipping point',
    biome_sbt_name:"Savane et broussaille tropicale",
    biome_sbt_desc:"Afrique de l'Est, Cerrado, N. Australie — Changement du couvert ligneux, régime du feu",
    biome_dft_name:'Delta fluvial tropical',
    biome_dft_desc:'Mékong, Gange, Niger, Nil — Piégeage sédimentaire, subsidence, intrusion saline',
    map_filter_label:'Phénotype',
    map_filter_all:'Tous',
    map_stat_total:'Total',
    map_stat_confirmed:'Confirmés',
    map_stat_pending:'À valider',
    map_stat_rupture:'Rupture',
    map_catalogue_kicker:'Catalogue des sites · Table A.0',
    map_catalogue_title:'Sites formalisés (n = 10)',
    map_table_header_site:'Site',
    map_table_header_country:'Pays',
    map_table_header_biome:'Biome',
    map_table_header_phenotype:'Phénotype',
    map_table_header_brm:'BRₘ⁰',
    map_table_header_source:'Source',
    map_table_note:"Les valeurs maîtresses de la preuve de concept restent celles de la Table A.0 jusqu'à leur re-calcul selon le protocole n=20. Les scores publiés sont des scores de rubrique exploratoires.",
    calc_vuln_title:'Vulnérabilités (μ × v)',
    calc_add_vuln:'+ Ajouter',
    calc_results_label:'Résultats',
    calc_reading:"Lecture : BRₘ compare la pression relative à la résilience, puis applique l'amplification liée aux vulnérabilités. BRₘ_adj intègre E(t). Les valeurs doivent rester interprétables et documentées.",
    calc_placeholder_vuln_name:'Nom vulnérabilité',
    calc_placeholder_mu:'μ',
    calc_placeholder_v:'v',
    indices_label_bt:'B(t)',
    indices_label_st:'S(t)',
    indices_label_pt:'P(t)',
    indices_label_rho:'ρ',
    indices_label_tau1:'τ(t₁)',
    indices_label_tau2:'τ(t₂)',
    indices_label_dt:'t₂ − t₁',
    indices_label_imported:'Volume importé',
    indices_label_desal:'Volume dessalé',
    indices_label_reused:'Volume réutilisé',
    indices_label_consumed:'Volume consommé',
    tau_result_formula:'ρ · (B·S·P)^(1/3) avec les valeurs saisies',
    bri_result_formula:'(τ₂ − τ₁) / (t₂ − t₁)',
    bri_sign_regen:'régénération',
    bri_sign_degrad:'dégradation',
    bri_sign_stable:'stabilité',
    et_result_formula:'(importé + dessalé + réutilisé) / consommé',
    et_warning:'⚠ E(t) > 0,70 : stabilité fortement soutenue par substitution technologique',
    delphi_title2:'Appel à experts volontaires — Calibration n = 20',
    delphi_who_title:'Qui recherchons-nous ?',
    delphi_who_intro:"Des experts volontaires (écologie, hydrogéologie, gouvernance, modélisation, géographie, anthropologie écologique) prêts à participer à un",
    delphi_protocol_name:'protocole Delphi en 3 rounds',
    delphi_who_for:'(novembre–décembre 2026) pour :',
    delphi_goal1:'Calibrer les poids μᵢ des vulnérabilités',
    delphi_goal2:'Valider les sites candidats (n=15)',
    delphi_goal3:'Affiner les ancres de normalisation par biome (9 biomes de référence)',
    delphi_note:"La participation s'inscrit dans le protocole Delphi de calibration. Les modalités et le nombre de tours seront communiqués aux experts sélectionnés. La lecture préalable du protocole et de l'ouvrage est recommandée.",
    delphi_alert_title:'Protocole de calibration BRₘ★',
    delphi_alert_text:"Double notation en aveugle, poids fixés avant courbe ROC, n=20 experts cibles. La version BRₘ⁰ actuelle est exploratoire. La version calibrée BRₘ★ est l'objet du protocole en cours de déploiement.",
    delphi_catalogue_title:'Catalogue des sites à valider (n = 15)',
    delphi_catalogue_note:"Le statut « À VALIDER » signifie que le site est proposé pour validation indépendante ; il ne signifie pas qu'un jugement définitif a déjà été porté.",
    delphi_cta_title:'Contribuer au protocole Delphi',
    delphi_cta_text:'Utilisez le formulaire ci-dessous pour proposer votre expertise ou suggérer un site à valider. Un email structuré sera préparé automatiquement.',
    delphi_form_name:'Nom complet',
    delphi_form_email:'Email',
    delphi_form_institution:'Institution / Affiliation',
    delphi_form_domain:"Domaine d'expertise (ex: hydrogéologie, écologie, anthropologie)",
    delphi_form_message:'Proposition de site à valider ou commentaire (optionnel)',
    delphi_form_submit:'Envoyer la candidature',
    contact_email_label:'Email',
    contact_orcid_label:'ORCID',
    contact_github_label:'GitHub',
    contact_footer:'Observatoire International GMA — Capital Vivant',
    contact_licence:'Licence CC BY-NC-SA 4.0',
    footer_copyright:'© 2026 Observatoire International GMA — Capital Vivant · Mourad Ahmim',
    result_label_brm:'BRₘ',
    result_label_brm_adj:'BRₘ adj',
    result_label_dp_r:'ΔP/R',
    result_label_vuln_sum:'1+Σμv',
    calc_label_dp:'ΔP — Pression relative (0–1)',
    calc_label_r:'R — Résilience écologique (0–1)',
    calc_label_et:'E(t) — Substitution techno-institutionnelle (optionnel)',
    btn_remove:'×',
    popup_status:'Statut',
    popup_phenotype:'Phénotype'
  },
  en: {
    brand:'GMA — Living Capital Observatory',
    nav_home:'Home', nav_pres:'About', nav_formulas:'Formulas',
    nav_indices:'Indices', nav_map:'GIS Map', nav_calc:'BRₘ Calculator',
    nav_delphi:'Delphi', nav_contact:'Contact',
    hero_title_top:'International GMA Observatory',
    hero_title_bottom:'Living Capital',
    hero_kicker:'GLOBAL MESOLOGY ALERT',
    hero_sub:'LIVING CAPITAL · SURVEILLANCE · ANALYSIS · PROTECTION',
    cta_calc:'Calculate BRₘ →', cta_delphi:'Volunteer',
    cta_map:'Site tracking',
    stat1:'Formalised sites', stat2:'Sites to validate',
    stat3:'BRₘ max (El Bayadh–Djelfa)', stat4:'Heuristic threshold',
    home_kicker:'GMA · quick read',
    home_concept:'From concept to territorial signal',
    home_concept_text:'This site does not merely present BRₘ: it shows how to move from pressure and resilience to an investigation decision, then to expert validation.',
    home_step1:'1. Observe', home_step2:'2. Calculate',
    home_step3:'3. Compare', home_step4:'4. Validate',
    home_data_status:'DATA STATUS', home_poc:'Proof of concept',
    home_formal_sites:'Formalised sites',
    home_priority_candidates:'Sites to validate',
    home_illustrative:'Full catalogue',
    home_external_calibration:'External calibration',
    home_to_conduct:'To be conducted',
    home_interpretation:'INTERPRETATION',
    home_signal_not_verdict:'BRₘ is a signal, not a verdict',
    home_signal_text:'BRₘ⁰ is exploratory. Threshold crossing is used to prioritise analysis; it does not replace local expertise, statistical protocol, or independent validation.',
    pres_title:'About the Observatory',
    pres_p1:'The International GMA Observatory (Global Mesological Alert) is a platform dedicated to the detection and management of ecological and institutional ruptures. It builds on the Living Capital concept and operational ecology.',
    pres_p2:'Living Capital refers to the entire set of critical subsistence infrastructures — biodiversity, soils, water and associated traditional knowledge — without which territorial viability and the dignity of inhabitants cannot be ensured. The Observatory turns this intuition into a measurable diagnostic framework.',
    pres_p3:'The Global Mesological Alert System (GMA) proposes a heuristic signal, the Mesological Rupture Index (BRₘ), designed to prioritise investigation and structure expert judgement. The current version (BRₘ⁰) is exploratory. The calibrated version (BRₘ★) is the object of the Delphi n=20 protocol.',
    pres_p4:'The Observatory is aimed at researchers, territorial managers and volunteer experts wishing to contribute to the empirical validation of the framework on priority Mediterranean, North African and international sites.',
    book_title:'Reference work',
    book_subtitle:'From Mediterranean Lessons to an Exploratory Framework for Territorial Resilience',
    author_title:'The author',
    author_bio:'Researcher in operational ecology and mesology. Work focuses on Mediterranean and North African socio-ecological systems, territorial resilience and the formalisation of alert tools (GMA, BRₘ, resilience mediance).',
    contact_orcid:'ORCID',
    epistemic_title:'Epistemic status',
    epistemic_text:'This work presents a theoretical framework, an index apparatus and an empirical proof of concept (n=10 Algerian sites). It does not constitute external validation. Formal calibration (n=20, double blind scoring, weights fixed before ROC) is the subject of the ongoing Delphi protocol.',
    formulas_title:'Formulas and definitions',
    normalisation_kicker:'METHODOLOGY SECTION — INDICES',
    indices_title:'Complementary index calculations',
    tau_calc_title:'Trajection τ(t) — direct calculation',
    tau_calc_intro:'When B, S, P and ρ are available, trajection can be calculated directly. Pre-filled values reproduce the Djurdjura proof-of-concept case.',
    btn_tau:'Calculate τ(t)',
    bri_calc_title:'Dynamic BRI — rate of change',
    bri_calc_intro:'Two distinct trajection observations and an explicit duration are required. No BRI is invented when temporal data are missing.',
    btn_bri:'Calculate dynamic BRI',
    et_calc_title:'E(t) coefficient — water substitution',
    et_calc_intro:'For water, E(t) reports imported, desalinated and reused volumes to consumed volume. Result is bounded [0,1].',
    et_imported:'Imported volume', et_desal:'Desalinated volume',
    et_reused:'Reused volume', et_consumed:'Consumed volume',
    btn_et:'Calculate E(t)',
    implementation_warning_title:'Important',
    implementation_warning:'These calculations apply the declared equations. They do not turn estimates into empirical validation. The proof-of-concept master values remain those of Table A.0 until recalculated under the protocol.',
    norm_bri:'BRI_dyn=(τ₂−τ₁)/(t₂−t₁). Two distinct observations and an explicit duration are required; no value is invented when they are missing.',
    norm_adj:'BRₘ_adj=BRₘ×(1−E(t)). E(t)>0.70 signals, under current convention, stability strongly supported by technological substitution.',
    norm_details_title:'Normalisation function details',
    norm_family1_title:'Family 1 — Bounded variables',
    norm_family1:'x̂ = clip((x_ref−x_obs)/(x_ref−x_floor),0,1). References are defined by biogeographic domain.',
    norm_family2_title:'Family 2 — Ratio-scale variables',
    norm_family2:'x̂ = min(1, ln(1+q/q_sust)/ln(1+k)), with k=5. Saturation at ×5 corresponds to the protocol verbal anchor "extreme".',
    norm_aggregation_title:'ΔP aggregation',
    norm_aggregation:'ΔP=Σw_k x̂_k, with Σw_k=1. A missing indicator is not imputed to zero: weights are redistributed over observed indicators and substitution is reported.',
    norm_examples_title:'Published functional examples',
    norm_examples:'Souf–M'Zab: 70→116 Hm³/yr for recharge of ~25 Hm³/yr gives q/q_sust≈4.6 and x̂≈0.96. Guerbes–Senhadja: NDVI 0.63→0.41 with x_ref=0.72 and x_floor=0.12 gives x̂≈0.52.',
    f1_title:'1. Mesological Rupture Index (BRₘ)',
    f1_desc:'Heuristic signal of imbalance between anthropogenic pressure and ecological resilience. The ≈1.20 threshold is provisional and not a regulatory threshold.',
    f1_dp_text:'Relative anthropogenic pressure normalised [0,1]',
    f1_r_text:'Ecological resilience normalised [0,1], with R > 0 in the calculation',
    f1_mu_text:'Vulnerability weights, to be calibrated by Delphi',
    f1_vi_text:'Observed vulnerability intensity [0,1]',
    f2_title:'2. Adjusted BRₘ',
    f2_desc:'Adjusted BRₘ accounts for techno-institutional substitution: BRₘ_adj = BRₘ × (1 − E(t)).',
    f2_brm:'BRₘ — mesological rupture signal before correction',
    f2_et:'E(t) — techno-institutional substitution coefficient [0,1]',
    f2_et_def:'Share of territorial stability relying on external technological or institutional inputs. For water: (imported + desalinated + reused) / consumed volume.',
    f2_rule:'E(t) > 0.70 indicates stability strongly supported by technological substitution.',
    f3_title:'3. Trajection τ(t)',
    f3_desc:'Trajection models the degree of living co-production between a community and its environment.',
    f3_b:'B(t) — bio-ecological component: observed ecological integrity [0,1]',
    f3_s:'S(t) — socio-cultural component: vitality of management knowledge and practices [0,1]',
    f3_p:'P(t) — perceptive/existential component: lived quality of the environment, place attachment [0,1]',
    f3_rho:'ρ — coupling parameter: intensity of active community–environment co-production [0,1]',
    f3_op:'Φ — non-substitutable aggregation operator; geometric mean by default',
    f4_title:'4. Biocultural Regeneration Index (BRI)',
    normalisation_title:'Component parameterisation and normalisation',
    normalisation_intro:'GMA indices do not directly receive heterogeneous physical quantities. Raw variables are first normalised according to a declared rule, then aggregated. The 10 published master values of the proof of concept remain rubric scores.',
    normalisation_source:'Reference: Appendix A.2.2 and A.2.2 bis of the GMA protocol.',
    norm_dp:'Anthropogenic pressure: weighted average of normalised sub-pressures. Ratio variables: logarithmic transform of excess q/q_sust, saturation with k=5.',
    norm_e:'E(t) is, for water, the share of stability relying on imported, desalinated or reused volumes relative to consumed volume.',
    norm_r:'Ecological resilience: normalised score [0,1] built on an explicit biogeographic reference; R must remain >0 in BRₘ.',
    norm_mu:'Vulnerability weights: μᵢ≥0 and Σμᵢ=1 per site. In BRₘ⁰ they come from expert judgement; BRₘ★ must fix them before ROC.',
    norm_v:'Vulnerability intensities [0,1]; anchors and their cardinalisation must be documented.',
    norm_tau:'τ(t)=ρ·(B·S·P)^(1/3), with B, S, P and ρ normalised or bounded in [0,1].',
    calc_published_title:'Load a published value',
    calc_published_placeholder:'— Select a formalised site —',
    calc_published_note:'Published proof-of-concept value.',
    f4_desc:'Dynamic BRI tracks the speed of change in Living Capital between two observation times.',
    f4_t1:'τ(t₁) — trajection at initial time',
    f4_t2:'τ(t₂) — trajection at final time',
    f4_time:'t₂ − t₁ — observation window duration',
    f4_read:'BRI > 0 indicates a regeneration trajectory; BRI < 0 indicates degradation. Magnitude must be interpreted according to observation window and normalisation reference.',
    map_title:'Site map — Calibration n=20',
    map_desc:'10 formalised sites and 15 sites to validate. Markers are coloured by phenotype.',
    calc_title:'BRₘ Calculator',
    btn_calc:'Calculate BRₘ',
    contact_title:'Contact',
    delphi_title:'Call for volunteer experts — Calibration n = 20',
    doi_banner_title:'Publications and reference data (Zenodo)',
    doi_concept_label:'Concept',
    doi_concept_desc:'Living Capital — Initial concept',
    doi_book_label:'Book v2',
    doi_book_desc:'Living Capital v119 (13 Sep 2026)',
    doi_baseline_label:'Baselines',
    doi_baseline_desc:'GMA Biome Baselines v1 (13 Sep 2026)',
    biome_section_kicker:'Technical document · Zenodo DOI 10.5281/zenodo.22738208',
    biome_title:'Biome Baselines — Cross-biome calibration anchors',
    biome_intro:'The GMA Biome Baselines document provides reference anchors (x_ref, x_floor, q_sust) for 9 major biomes, making BRₘ computable beyond the initial Mediterranean/North African scope. Each anchor is an operational hypothesis subject to Protocol A.9.',
    biome_rules_title:'Inter-biome translation rules',
    biome_rule1:'Dominant biome: the site is classified by the biome covering >60% of the perimeter. Its baselines are used for all transformations.',
    biome_rule2:'Mixed biome: if no biome exceeds 60%, calculate BRₘ for each biome with its baselines, then weighted average by area.',
    biome_rule3:'Altitudinal zonation: in mountains, use "Mountain" baselines upstream and downstream biome baselines below.',
    biome_rule4:'Urban enclave: a city within a forest or steppe biome is evaluated with two baseline sets (urban + surrounding).',
    biome_reference:'Reference: GMA Biome Baselines v1.0, 2026. Text CC-BY 4.0 | Data anchors CC0.',
    biome_mfm_name:'Mediterranean forest and matorral',
    biome_mfm_desc:'Tell, California, Central Chile — Fire, grazing, fragmentation',
    biome_sas_name:'Arid steppe and semi-desert',
    biome_sas_desc:'High plateaus, Sahel, Central Asia — Pastoral overload, piezometric decline',
    biome_zhl_name:'Wetland and coastal lagoon',
    biome_zhl_desc:'Ramsar, estuaries — Withdrawals, nutrients, conversion',
    biome_mbg_name:'Mountain and glacial watershed',
    biome_mbg_desc:'Himalaya, Andes, High Atlas — Glacial abstraction, mining, alpine degradation',
    biome_mcp_name:'Coastal megacity and peri-urban',
    biome_mcp_desc:'Sealing, heat island, unviable water, thermal vulnerability',
    biome_osf_name:'Saharan oasis and foggara',
    biome_osf_desc:'SASS, foggaras — Aquifer overexploitation, palm decline, deep drilling',
    biome_fth_name:'Tropical rainforest',
    biome_fth_desc:'Amazon, Congo, SE Asia — Deforestation, hunting, proximity to tipping point',
    biome_sbt_name:'Tropical savanna and shrubland',
    biome_sbt_desc:'E. Africa, Cerrado, N. Australia — Woody cover change, fire regime',
    biome_dft_name:'Tropical river delta',
    biome_dft_desc:'Mekong, Ganges, Niger, Nile — Sediment trapping, subsidence, salt intrusion',
    map_filter_label:'Phenotype',
    map_filter_all:'All',
    map_stat_total:'Total',
    map_stat_confirmed:'Confirmed',
    map_stat_pending:'To validate',
    map_stat_rupture:'Rupture',
    map_catalogue_kicker:'Site catalogue · Table A.0',
    map_catalogue_title:'Formalised sites (n = 10)',
    map_table_header_site:'Site',
    map_table_header_country:'Country',
    map_table_header_biome:'Biome',
    map_table_header_phenotype:'Phenotype',
    map_table_header_brm:'BRₘ⁰',
    map_table_header_source:'Source',
    map_table_note:'Proof-of-concept master values remain those of Table A.0 until recalculated under the n=20 protocol. Published scores are exploratory rubric scores.',
    calc_vuln_title:'Vulnerabilities (μ × v)',
    calc_add_vuln:'+ Add',
    calc_results_label:'Results',
    calc_reading:'Reading: BRₘ compares relative pressure to resilience, then applies vulnerability amplification. BRₘ_adj integrates E(t). Values must remain interpretable and documented.',
    calc_placeholder_vuln_name:'Vulnerability name',
    calc_placeholder_mu:'μ',
    calc_placeholder_v:'v',
    indices_label_bt:'B(t)',
    indices_label_st:'S(t)',
    indices_label_pt:'P(t)',
    indices_label_rho:'ρ',
    indices_label_tau1:'τ(t₁)',
    indices_label_tau2:'τ(t₂)',
    indices_label_dt:'t₂ − t₁',
    indices_label_imported:'Imported volume',
    indices_label_desal:'Desalinated volume',
    indices_label_reused:'Reused volume',
    indices_label_consumed:'Consumed volume',
    tau_result_formula:'ρ · (B·S·P)^(1/3) with entered values',
    bri_result_formula:'(τ₂ − τ₁) / (t₂ − t₁)',
    bri_sign_regen:'regeneration',
    bri_sign_degrad:'degradation',
    bri_sign_stable:'stability',
    et_result_formula:'(imported + desalinated + reused) / consumed',
    et_warning:'⚠ E(t) > 0.70: stability strongly supported by technological substitution',
    delphi_title2:'Call for volunteer experts — Calibration n = 20',
    delphi_who_title:'Who are we looking for?',
    delphi_who_intro:'Volunteer experts (ecology, hydrogeology, governance, modelling, geography, ecological anthropology) ready to participate in a',
    delphi_protocol_name:'3-round Delphi protocol',
    delphi_who_for:'(November–December 2026) to:',
    delphi_goal1:'Calibrate vulnerability weights μᵢ',
    delphi_goal2:'Validate candidate sites (n=15)',
    delphi_goal3:'Refine normalisation anchors by biome (9 reference biomes)',
    delphi_note:'Participation is part of the Delphi calibration protocol. Modalities and number of rounds will be communicated to selected experts. Prior reading of the protocol and book is recommended.',
    delphi_alert_title:'BRₘ★ calibration protocol',
    delphi_alert_text:'Double blind scoring, weights fixed before ROC curve, n=20 target experts. The current BRₘ⁰ version is exploratory. The calibrated BRₘ★ version is the object of the ongoing deployment protocol.',
    delphi_catalogue_title:'Candidate site catalogue (n = 15)',
    delphi_catalogue_note:"The status 'TO VALIDATE' means the site is proposed for independent validation; it does not mean a definitive judgement has already been made.",
    delphi_cta_title:'Contribute to the Delphi protocol',
    delphi_cta_text:'Use the form below to propose your expertise or suggest a site to validate. A structured email will be prepared automatically.',
    delphi_form_name:'Full name',
    delphi_form_email:'Email',
    delphi_form_institution:'Institution / Affiliation',
    delphi_form_domain:'Expertise domain (e.g. hydrogeology, ecology, anthropology)',
    delphi_form_message:'Site proposal or comment (optional)',
    delphi_form_submit:'Send application',
    contact_email_label:'Email',
    contact_orcid_label:'ORCID',
    contact_github_label:'GitHub',
    contact_footer:'International GMA Observatory — Living Capital',
    contact_licence:'Licence CC BY-NC-SA 4.0',
    footer_copyright:'© 2026 International GMA Observatory — Living Capital · Mourad Ahmim',
    result_label_brm:'BRₘ',
    result_label_brm_adj:'BR adj',
    result_label_dp_r:'ΔP/R',
    result_label_vuln_sum:'1+Σμv',
    calc_label_dp:'ΔP — Relative pressure (0–1)',
    calc_label_r:'R — Ecological resilience (0–1)',
    calc_label_et:'E(t) — Techno-institutional substitution (optional)',
    btn_remove:'×',
    popup_status:'Status',
    popup_phenotype:'Phenotype'
  }
};

/* ===== NAVIGATION ===== */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
  document.querySelectorAll('nav button').forEach(b => {
    b.classList.toggle('active', b.dataset.page === pageId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (pageId === 'carte' && !mapInstance) initMap();
  if (pageId === 'calculateur') populateSiteSelect();
}

/* ===== LANGUE ===== */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('gmaLang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });
  document.querySelectorAll('.lang-switch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

/* ===== MAP ===== */
function initMap() {
  if (typeof L === 'undefined') return;
  mapInstance = L.map('map').setView([28, 10], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance);
  renderMarkers();
}

const PHENOTYPE_COLORS = {
  'Rupture': '#dc2626',
  'Résilience': '#16a34a',
  'Contre-cas': '#2563eb',
  'Régénération': '#ca8a04'
};

function renderMarkers() {
  if (!mapInstance) return;
  mapInstance.eachLayer(l => { if (l.getLatLng) mapInstance.removeLayer(l); });
  const filtered = GMA_SITES.filter(s => {
    if (activePhenotype !== 'all' && s.phenotype !== activePhenotype) return false;
    return true;
  });
  filtered.forEach(s => {
    const color = PHENOTYPE_COLORS[s.phenotype] || '#64748b';
    const marker = L.circleMarker([s.lat, s.lng], {
      radius: s.status === 'confirmé' ? 10 : 7,
      fillColor: color, color: '#fff', weight: 2, opacity: 1, fillOpacity: 0.85
    }).addTo(mapInstance);
    const brmText = s.brM !== null && s.brM !== undefined ? 'BRₘ⁰ = ' + s.brM : 'BRₘ⁰ = —';
    const statusLabel = currentLang === 'fr' ? 'Statut' : 'Status';
    const phenoLabel = currentLang === 'fr' ? 'Phénotype' : 'Phenotype';
    marker.bindPopup(
      '<strong>' + s.name + '</strong><br>' +
      s.country + ' · ' + s.biome + '<br>' +
      phenoLabel + ' : <span style="color:' + color + '">' + s.phenotype + '</span><br>' +
      statusLabel + ' : ' + s.status + '<br>' +
      brmText
    );
  });
  const ruptureCount = GMA_SITES.filter(s => s.phenotype === 'Rupture').length;
  const el = document.getElementById('count-rupture');
  if (el) el.textContent = ruptureCount;
}

function filterMap(phenotype) {
  activePhenotype = phenotype;
  document.querySelectorAll('#carte .filter-bar button').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === phenotype || (phenotype === 'all' && b.textContent.trim() === (currentLang==='fr'?'Tous':'All')));
  });
  renderMarkers();
}

/* ===== CALCULATEUR BRₘ ===== */
function populateSiteSelect() {
  const sel = document.getElementById('site-select');
  if (!sel || sel.dataset.populated) return;
  const placeholder = i18n[currentLang].calc_published_placeholder || '— Select —';
  sel.innerHTML = '<option value="">' + placeholder + '</option>';
  GMA_SITES.filter(s => s.status === 'confirmé').forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = s.name + ' (BRₘ⁰ = ' + (s.brM ?? '—') + ')';
    sel.appendChild(opt);
  });
  sel.dataset.populated = '1';
}

function loadSite(siteId) {
  const s = GMA_SITES.find(x => x.id == siteId);
  if (!s) return;
  if (s.deltaP !== undefined) document.getElementById('calc-dp').value = s.deltaP;
  if (s.rEco !== undefined) document.getElementById('calc-r').value = s.rEco;
}

function addVuln() {
  const container = document.getElementById('vuln-container');
  const row = document.createElement('div');
  row.className = 'vuln-row';
  const nameLabel = i18n[currentLang].calc_placeholder_vuln_name || 'Vulnerability name';
  const muLabel = i18n[currentLang].calc_placeholder_mu || 'μ';
  const vLabel = i18n[currentLang].calc_placeholder_v || 'v';
  const removeLabel = i18n[currentLang].btn_remove || '×';
  row.innerHTML = '<input type="text" placeholder="' + nameLabel + '"><input type="number" step="0.01" min="0" max="1" placeholder="' + muLabel + '"><input type="number" step="0.01" min="0" max="1" placeholder="' + vLabel + '"><button onclick="this.parentElement.remove()" style="background:none;border:none;color:var(--slate-400);cursor:pointer;font-size:16px;">' + removeLabel + '</button>';
  container.appendChild(row);
}

function calculateBrm() {
  const dp = parseFloat(document.getElementById('calc-dp').value);
  const r = parseFloat(document.getElementById('calc-r').value);
  const et = parseFloat(document.getElementById('calc-et').value) || 0;
  if (isNaN(dp) || isNaN(r) || r <= 0) {
    alert(currentLang === 'fr' ? 'Veuillez entrer ΔP et R valides (R > 0).' : 'Please enter valid ΔP and R (R > 0).');
    return;
  }
  let vulnSum = 0;
  document.querySelectorAll('#vuln-container .vuln-row').forEach(row => {
    const inputs = row.querySelectorAll('input');
    const mu = parseFloat(inputs[1]?.value) || 0;
    const v = parseFloat(inputs[2]?.value) || 0;
    vulnSum += mu * v;
  });
  const brm = (dp / r) * (1 + vulnSum);
  const brmAdj = brm * (1 - Math.min(1, Math.max(0, et)));
  const box = document.getElementById('result-box');
  const grid = document.getElementById('result-grid');
  const msg = document.getElementById('result-message');
  box.style.display = 'block';
  const rBRM = i18n[currentLang].result_label_brm || 'BRₘ';
  const rBRMA = i18n[currentLang].result_label_brm_adj || 'BRₘ adj';
  const rDPR = i18n[currentLang].result_label_dp_r || 'ΔP/R';
  const rVULN = i18n[currentLang].result_label_vuln_sum || '1+Σμv';
  grid.innerHTML =
    '<div class="result-item"><div class="lab">' + rBRM + '</div><div class="val">' + brm.toFixed(3) + '</div></div>' +
    '<div class="result-item"><div class="lab">' + rBRMA + '</div><div class="val">' + brmAdj.toFixed(3) + '</div></div>' +
    '<div class="result-item"><div class="lab">' + rDPR + '</div><div class="val">' + (dp/r).toFixed(3) + '</div></div>' +
    '<div class="result-item"><div class="lab">' + rVULN + '</div><div class="val">' + (1+vulnSum).toFixed(3) + '</div></div>';
  let message = '';
  if (brm > 1.20) message = '⚠ ' + (currentLang === 'fr' ? 'Signal de rupture mésologique détecté (seuil > 1,20).' : 'Mesological rupture signal detected (threshold > 1.20).');
  else if (brm > 0.80) message = '⚡ ' + (currentLang === 'fr' ? 'Seuil de vigilance approché.' : 'Caution threshold approaching.');
  else message = '✓ ' + (currentLang === 'fr' ? 'Signal dans la zone de résilience.' : 'Signal in resilience zone.');
  if (et > 0.70) {
    const etWarn = i18n[currentLang].et_warning || '⚠ E(t) > 0.70: stability strongly supported by technological substitution.';
    message += '<br><span style="color:#8b5a2b;">' + etWarn + '</span>';
  }
  msg.innerHTML = message;
}

/* ===== MINI-CALCULATEURS ===== */
function calcTau() {
  const B = parseFloat(document.getElementById('tau-b').value) || 0;
  const S = parseFloat(document.getElementById('tau-s').value) || 0;
  const P = parseFloat(document.getElementById('tau-p').value) || 0;
  const rho = parseFloat(document.getElementById('tau-rho').value) || 0;
  const tau = rho * Math.pow(Math.max(B * S * P, 0), 1/3);
  const div = document.getElementById('tau-result');
  div.style.display = 'block';
  const formula = i18n[currentLang].tau_result_formula || 'ρ · (B·S·P)^(1/3)';
  div.innerHTML = '<strong>τ(t) = ' + tau.toFixed(4) + '</strong><br><span style="font-size:12px;color:var(--slate-500)">' + formula + '</span>';
}

function calcBRI() {
  const t1 = parseFloat(document.getElementById('bri-t1').value) || 0;
  const t2 = parseFloat(document.getElementById('bri-t2').value) || 0;
  const dt = parseFloat(document.getElementById('bri-dt').value) || 1;
  const bri = (t2 - t1) / dt;
  const div = document.getElementById('bri-result');
  div.style.display = 'block';
  const signKey = bri > 0 ? 'bri_sign_regen' : bri < 0 ? 'bri_sign_degrad' : 'bri_sign_stable';
  const sign = i18n[currentLang][signKey] || 'neutral';
  const formula = i18n[currentLang].bri_result_formula || '(τ₂ − τ₁) / (t₂ − t₁)';
  div.innerHTML = '<strong>BRI_dyn = ' + bri.toFixed(4) + '</strong> (' + sign + ')<br><span style="font-size:12px;color:var(--slate-500)">' + formula + '</span>';
}

function calcEt() {
  const imp = parseFloat(document.getElementById('et-imp').value) || 0;
  const des = parseFloat(document.getElementById('et-des').value) || 0;
  const reu = parseFloat(document.getElementById('et-reu').value) || 0;
  const con = parseFloat(document.getElementById('et-con').value) || 1;
  const et = Math.min(1, Math.max(0, (imp + des + reu) / con));
  const div = document.getElementById('et-result');
  div.style.display = 'block';
  let warn = '';
  if (et > 0.70) {
    warn = '<br><span style="color:#8b5a2b;font-size:12px;">' + (i18n[currentLang].et_warning || '⚠ E(t) > 0.70') + '</span>';
  }
  const formula = i18n[currentLang].et_result_formula || '(imported + desalinated + reused) / consumed';
  div.innerHTML = '<strong>E(t) = ' + et.toFixed(4) + '</strong>' + warn + '<br><span style="font-size:12px;color:var(--slate-500)">' + formula + '</span>';
}

/* ===== DELPHI EMAIL ===== */
function sendDelphiEmail() {
  const name = document.getElementById('delphi-name').value;
  const email = document.getElementById('delphi-email').value;
  const inst = document.getElementById('delphi-institution').value;
  const domain = document.getElementById('delphi-domain').value;
  const msg = document.getElementById('delphi-message').value;
  const subject = 'Contribution Delphi — Observatoire GMA / ' + name;
  const body = 'Nom : ' + name + '%0AEmail : ' + email + '%0AInstitution : ' + inst + '%0ADomaine : ' + domain + '%0A%0AMessage :%0A' + encodeURIComponent(msg || '(aucun commentaire)');
  window.location.href = 'mailto:forestecolo@gmail.com?subject=' + subject + '&body=' + body;
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  const ruptureCount = GMA_SITES.filter(s => s.phenotype === 'Rupture').length;
  const el = document.getElementById('count-rupture');
  if (el) el.textContent = ruptureCount;
});
