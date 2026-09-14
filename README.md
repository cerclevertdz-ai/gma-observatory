# Observatoire International GMA — Capital Vivant

[![DOI Concept](https://img.shields.io/badge/DOI-Concept-10.5281/zenodo.22391967-blue)](https://doi.org/10.5281/zenodo.22391967)
[![DOI Livre](https://img.shields.io/badge/DOI-Livre%20v2-10.5281/zenodo.22738126-blue)](https://doi.org/10.5281/zenodo.22738126)
[![DOI Baselines](https://img.shields.io/badge/DOI-Baselines%20v1-10.5281/zenodo.22738208-blue)](https://doi.org/10.5281/zenodo.22738208)
[![ORCID](https://img.shields.io/badge/ORCID-0000--0002--5577--9336-green)](https://orcid.org/0000-0002-5577-9336)
[![Licence](https://img.shields.io/badge/Licence-CC%20BY--NC--SA%204.0-lightgrey)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

> **Plateforme web du système d'alerte mésologique globale (GMA)**  
> Auteur : Mourad Ahmim (ORCID: [0000-0002-5577-9336](https://orcid.org/0000-0002-5577-9336))  
> Contact : forestecolo@gmail.com

---

## Vue d'ensemble

L'Observatoire International GMA (Global Mesological Alert) est une plateforme dédiée à la détection et à la gestion des ruptures écologiques et institutionnelles. Il s'appuie sur le concept de **Capital Vivant** et sur l'écologie opérationnelle pour produire un signal heuristique de déséquilibre territorial : l'**indice de rupture mésologique (BRₘ)**.

- **Version actuelle** : BRₘ⁰ (exploratoire, preuve de concept n=10 sites algériens)
- **Version cible** : BRₘ★ (calibration par protocole Delphi n=20)
- **Sites formalisés** : 10 (Algérie)
- **Sites à valider** : 15 (internationaux)
- **Biomes de référence** : 9

---

## Publications de référence (Zenodo)

| Document | DOI | Description |
|----------|-----|-------------|
| Concept initial | [10.5281/zenodo.22391967](https://doi.org/10.5281/zenodo.22391967) | Living Capital — concept et cadre théorique |
| Livre v2 (v119) | [10.5281/zenodo.22738126](https://doi.org/10.5281/zenodo.22738126) | Ouvrage complet, 13 Sep 2026 |
| Biome Baselines v1 | [10.5281/zenodo.22738208](https://doi.org/10.5281/zenodo.22738208) | Ancres de calibration trans-biomes (9 biomes) |

---

## Architecture du site

```
gma-observatory/
├── index.html          # Page principale (SPA)
├── css/
│   └── style.css       # Styles v119
├── js/
│   ├── data.js         # Données des sites et biomes
│   └── script.js       # Logique, calculateurs, i18n, carte
├── assets/
│   ├── logo.png        # Logo GMA
│   ├── hero-bg.png     # Image d'arrière-plan
│   └── author.jpg      # Photo de l'auteur
└── README.md           # Ce fichier
```

---

## Fonctionnalités

- **Navigation multi-pages** (SPA) : Accueil, Présentation, Formules, Indices, Carte SIG, Calculateur BRₘ, Delphi, Contact
- **Bilingue** : Français / Anglais (i18n)
- **Carte interactive** : 25 sites géolocalisés avec filtrage par phénotype
- **Calculateur BRₘ** : calcul interactif avec chargement des valeurs publiées
- **Calculateurs complémentaires** : τ(t), BRI dynamique, E(t)
- **Biome Baselines** : présentation des 9 biomes de référence avec règles de translation
- **Appel à experts Delphi** : formulaire structuré pour le protocole n=20

---

## Indices principaux

### 1. BRₘ — Indice de Rupture Mésologique
```
BRₘ = (ΔP / R) × (1 + Σ μᵢ · vᵢ)
```
Signal heuristique de déséquilibre entre pression anthropique et résilience écologique. Seuil provisoire ≈ 1,20.

### 2. BRₘ ajusté
```
BRₘ_adj = BRₘ × (1 − E(t))
```
Tient compte de la substitution techno-institutionnelle.

### 3. τ(t) — Trajection
```
τ(t) = ρ · (B(t) · S(t) · P(t))^(1/3)
```
Modélise le degré de co-production vivante entre communauté et milieu.

### 4. BRI dynamique
```
BRI_dyn = (τ(t₂) − τ(t₁)) / (t₂ − t₁)
```
Vitesse de changement du Capital Vivant.

---

## Biomes de référence (9)

1. Forêt méditerranéenne et matorral
2. Steppe aride et semi-désertique
3. Zone humide et lagune côtière
4. Montagne et bassin versant glaciaire
5. Mégalopole côtière et péri-urbain
6. Oasis saharienne et foggara
7. Forêt tropicale humide
8. Savane et broussaille tropicale
9. Delta fluvial tropical

---

## Contribution

L'Observatoire recherche des experts volontaires pour le protocole Delphi de calibration (n=20). Voir la section **Delphi** sur le site ou consulter le fichier CONTRIBUTING.md.

---

## Licence

- **Ouvrage** : CC BY-NC-SA 4.0 (Non commercialisable)
- **Baseline Anchors** : CC-BY 4.0 / CC0 (données)

---

## Citation

Mourad Ahmim. *Living Capital: Operational Ecology and the Global Mesological Alert System*. 2026. DOI: [10.5281/zenodo.22738126](https://doi.org/10.5281/zenodo.22738126)
