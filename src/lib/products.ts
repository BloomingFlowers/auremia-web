/**
 * Product data — aligned with Medusa v2 Store API product structure.
 *
 * Medusa v2 mapping:
 *   id          → product.id
 *   handle      → product.handle
 *   title       → product.title
 *   price       → variant.prices[] (region-based)
 *   mat         → variant.options "material"
 *   cat         → product.collection_id
 *   desc        → product.description
 *   options     → product.options + variants
 *
 * In production, replace these static arrays with:
 *   fetch('/store/products')
 *   fetch('/store/products/{handle}')
 */

export interface ProductOption {
  sizes: string[];
  sizeLabel: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  price: number;
  mat: string;
  cat: "necklaces" | "rings" | "earrings" | "bracelets";
  desc: string;
  badge?: string;
  badgeType?: "new" | "bd";
  stars: number;
  reviews: number;
  options: ProductOption;
  engrave: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "star-pendant",
    title: "Star Pendant",
    handle: "star-pendant",
    price: 329,
    mat: "18k gold · pavé-set natural diamond",
    cat: "necklaces",
    desc: "The one she never takes off. A quiet star on a fine chain — substantial enough to mean something, small enough to mean it only to you.",
    badge: "Batch 04 · 3 left",
    badgeType: "bd",
    stars: 5,
    reviews: 312,
    options: { sizes: ["40 cm", "45 cm", "50 cm"], sizeLabel: "Chain length" },
    engrave: true,
  },
  {
    id: "diamond-line-ring",
    title: "Diamond Line Ring",
    handle: "diamond-line-ring",
    price: 286,
    mat: "18k gold · 0.3ct natural diamond",
    cat: "rings",
    desc: "Three stones, one line. Reads as a wedding band from across the table; reads as a power move up close.",
    badge: "Bestseller",
    badgeType: "new",
    stars: 5,
    reviews: 247,
    options: { sizes: ["5", "6", "7", "8"], sizeLabel: "Ring size (US)" },
    engrave: true,
  },
  {
    id: "pearl-drop-earrings",
    title: "Pearl Drop Earrings",
    handle: "pearl-drop-earrings",
    price: 246,
    mat: "18k gold · Akoya pearl",
    cat: "earrings",
    desc: "The earring you reach for when you're running late and need to look like you tried.",
    stars: 4,
    reviews: 89,
    options: { sizes: ["Single", "Pair"], sizeLabel: "Style" },
    engrave: false,
  },
  {
    id: "midnight-emerald-band",
    title: "Midnight Emerald Band",
    handle: "midnight-emerald-band",
    price: 412,
    mat: "18k gold · 0.5ct natural emerald",
    cat: "rings",
    desc: "Worn alone or stacked. The green says you came from somewhere; the gold says you arrived.",
    badge: "New",
    badgeType: "new",
    stars: 5,
    reviews: 54,
    options: { sizes: ["5", "6", "7", "8"], sizeLabel: "Ring size (US)" },
    engrave: true,
  },
  {
    id: "gold-vermeil-chain",
    title: "Layered Chain Necklace",
    handle: "layered-chain-necklace",
    price: 268,
    mat: "18k gold · hand-finished",
    cat: "necklaces",
    desc: "Two chains, one clasp, zero effort. The kind of thing you sleep in.",
    stars: 5,
    reviews: 176,
    options: { sizes: ["40 cm", "45 cm", "50 cm"], sizeLabel: "Chain length" },
    engrave: false,
  },
  {
    id: "emerald-stud-earrings",
    title: "Emerald Stud Earrings",
    handle: "emerald-stud-earrings",
    price: 358,
    mat: "18k gold · 0.4ct natural emerald",
    cat: "earrings",
    desc: "Small enough for the office, green enough for the gallery opening after.",
    badge: "Batch 04 · 5 left",
    badgeType: "bd",
    stars: 5,
    reviews: 67,
    options: { sizes: ["Single", "Pair"], sizeLabel: "Style" },
    engrave: false,
  },
  {
    id: "after-hours-signet",
    title: '"After Hours" Signet',
    handle: "after-hours-signet",
    price: 378,
    mat: "18k gold · midnight enamel",
    cat: "rings",
    desc: "For the version of you that shows up after the schedule ends. Engraving strongly encouraged.",
    badge: "Batch 04 · 7 left",
    badgeType: "bd",
    stars: 5,
    reviews: 86,
    options: { sizes: ["5", "6", "7", "8"], sizeLabel: "Ring size (US)" },
    engrave: true,
  },
  {
    id: "tennis-bracelet",
    title: "Tennis Bracelet, Rewritten",
    handle: "tennis-bracelet",
    price: 528,
    mat: "18k gold · 1.2ct total natural diamonds",
    cat: "bracelets",
    desc: "Yes, that tennis bracelet. Worn with sleeves pushed up and points taken.",
    stars: 5,
    reviews: 118,
    options: { sizes: ["16 cm", "17 cm", "18 cm"], sizeLabel: "Length" },
    engrave: false,
  },
];

export const CATEGORIES = [
  ["all", "All"],
  ["necklaces", "Necklaces"],
  ["rings", "Rings"],
  ["earrings", "Earrings"],
  ["bracelets", "Bracelets"],
] as const;

export function getProduct(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.handle === handle || p.id === handle);
}