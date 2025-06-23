// File: src/data/products.ts
  
export interface Product {
  id: string;               // unique identifier
  category: string;         // matches Category.id
  subcategory: string;      // matches Subcategory.id
  bodyType: string;         // e.g. "Lens", "Glass", "Back Choke"
  wattage: string;          // e.g. "24W", "150W"
  colours: string;          // e.g. "CW/WW/NW"
  specs?: Record<string,string>; // extra specs: lumens, battery, panel
  image: string;            // path under public/
  href: string;             // product detail route
}

export const products: Record<string, Product[]> = {
  "street-light": [
    //Lens section
    { id: "street-lens-24w",  category: "outdoor", subcategory: "street-light",  bodyType: "Lens",        wattage: "24W",  colours: "CW/WW/NW", specs: { lumens: "2400lm", voltage: "230V" },  image: "/product-images/street-lens-24w.png", href: "/products/outdoor/street-light/lens-24w" },
    { id: "street-lens-36w",  category: "outdoor", subcategory: "street-light",  bodyType: "Lens",        wattage: "36W",  colours: "CW/WW/NW", specs: { lumens: "3600lm", voltage: "230V" },  image: "/product-images/street-lens-36w.png", href: "/products/outdoor/street-light/lens-36w" },
    { id: "street-lens-50w",  category: "outdoor", subcategory: "street-light",  bodyType: "Lens",        wattage: "50W",  colours: "CW/WW/NW", specs: { lumens: "5000lm", voltage: "230V" },  image: "/product-images/street-lens-50w.png", href: "/products/outdoor/street-light/lens-50w" },
    { id: "street-lens-70w",  category: "outdoor", subcategory: "street-light",  bodyType: "Lens",        wattage: "70W",  colours: "CW/WW/NW", specs: { lumens: "7000lm", voltage: "230V" },  image: "/product-images/street-lens-70w.png", href: "/products/outdoor/street-light/lens-70w" },
    { id: "street-lens-100w", category: "outdoor", subcategory: "street-light",  bodyType: "Lens",        wattage: "100W", colours: "CW/WW/NW", specs: { lumens: "10000lm", voltage: "230V" },image: "/product-images/street-lens-100w.png", href: "/products/outdoor/street-light/lens-100w" },
    //Glass section
    { id: "street-glass-24w", category: "outdoor", subcategory: "street-light",  bodyType: "Glass",       wattage: "24W",  colours: "CW/WW/NW", specs: { lumens: "2400lm", voltage: "230V" },image: "/product-images/street-glass-24w.png", href: "/products/outdoor/street-light/glass-24w" },
    { id: "street-glass-36w", category: "outdoor", subcategory: "street-light",  bodyType: "Glass",       wattage: "36W",  colours: "CW/WW/NW", specs: { lumens: "3600lm", voltage: "230V" },image: "/product-images/street-glass-36w.png", href: "/products/outdoor/street-light/glass-36w" },
  ],
  "flood-light": [
    //lens
    { id: "flood-lens-50w",    category: "outdoor", subcategory: "flood-light",   bodyType: "Lens",        wattage: "50W",  colours: "CW/WW/NW", image: "/product-images/flood-lens-50w.png", href: "/products/outdoor/flood-light/lens-50w" },
    { id: "flood-lens-100w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Lens",        wattage: "100W", colours: "CW/WW/NW", image: "/product-images/flood-lens-100w.png", href: "/products/outdoor/flood-light/lens-100w" },
    { id: "flood-lens-150w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Lens",        wattage: "150W", colours: "CW/WW/NW", image: "/product-images/flood-lens-100w.png", href: "/products/outdoor/flood-light/lens-100w" },
    { id: "flood-lens-200w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Lens",        wattage: "200W", colours: "CW/WW/NW", image: "/product-images/flood-lens-100w.png", href: "/products/outdoor/flood-light/lens-100w" },
//glass 
    { id: "flood-glass-30w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "30W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
    { id: "flood-glass-50w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "50W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
    { id: "flood-glass-100w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "100W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
    { id: "flood-glass-150w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "150W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
    { id: "flood-glass-200w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "200W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
    { id: "flood-glass-250w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "250W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
    { id: "flood-glass-300w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "300W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
    { id: "flood-glass-400w",   category: "outdoor", subcategory: "flood-light",   bodyType: "Glass",       wattage: "400W",  colours: "CW/WW/NW", image: "/product-images/flood-glass-30w.png", href: "/products/outdoor/flood-light/glass-30w" },
//backchoke

    { id: "flood-backchoke-300w", category: "outdoor", subcategory: "flood-light",bodyType: "Back Choke", wattage: "300W", colours: "CW/WW/NW", image: "/product-images/flood-backchoke-300w.png", href: "/products/outdoor/flood-light/backchoke-300w" },
    { id: "flood-backchoke-400w", category: "outdoor", subcategory: "flood-light",bodyType: "Back Choke", wattage: "400W", colours: "CW/WW/NW", image: "/product-images/flood-backchoke-300w.png", href: "/products/outdoor/flood-light/backchoke-300w" },

  ],
  "highbay-light": [
    { id: "highbay-backchoke-50w", category: "outdoor", subcategory: "highbay-light",bodyType: "Back Choke", wattage: "50W",  colours: "CW", image: "/product-images/highbay-backchoke-50w.png", href: "/products/outdoor/highbay-light/backchoke-50w" },
    { id: "highbay-backchoke-100w", category: "outdoor", subcategory: "highbay-light",bodyType: "Back Choke", wattage: "100W",  colours: "CW", image: "/product-images/highbay-backchoke-50w.png", href: "/products/outdoor/highbay-light/backchoke-50w" },
    { id: "highbay-backchoke-150w", category: "outdoor", subcategory: "highbay-light",bodyType: "Back Choke", wattage: "150W",  colours: "CW", image: "/product-images/highbay-backchoke-50w.png", href: "/products/outdoor/highbay-light/backchoke-50w" },
    { id: "highbay-backchoke-200w", category: "outdoor", subcategory: "highbay-light",bodyType: "Back Choke", wattage: "200W",  colours: "CW", image: "/product-images/highbay-backchoke-50w.png", href: "/products/outdoor/highbay-light/backchoke-50w" },
    { id: "highbay-backchoke-250w", category: "outdoor", subcategory: "highbay-light",bodyType: "Back Choke", wattage: "250W",  colours: "CW", image: "/product-images/highbay-backchoke-50w.png", href: "/products/outdoor/highbay-light/backchoke-50w" },


  ],
  "solar-street": [
    //semi integrated
    { id: "solar-semi-25-18ah-50w",   category: "outdoor", subcategory: "solar-street",bodyType: "Semi Integrated", wattage: "25-30W", colours: "CW/WW/NW", specs: { battery: "18ah,24ah,30ah", panel: "50W,75W,100W"}, image: "/product-images/solar-semi-25-50w.png", href: "/products/outdoor/solar-street/semi-25-50w" },
    { id: "solar-semi-30-24ah-100w",   category: "outdoor", subcategory: "solar-street",bodyType: "Semi Integrated", wattage: "30-50W", colours: "CW/WW/NW", specs: { battery: "24ah,30ah,36ah", panel: "50W,75W,100W"}, image: "/product-images/solar-semi-25-50w.png", href: "/products/outdoor/solar-street/semi-25-50w" },
    // Full integrated
    { id: "solar-semi-25-18ah-51w",   category: "outdoor", subcategory: "solar-street",bodyType: "Fully Integrated", wattage: "25-30W", colours: "CW/WW/NW", specs: { battery: "18ah,24ah,30ah", panel: "100W,75W,100W"}, image: "/product-images/solar-semi-25-50w.png", href: "/products/outdoor/solar-street/semi-25-50w" },
    { id: "solar-semi-30-24ah-101w",   category: "outdoor", subcategory: "solar-street",bodyType: "Fully Integrated", wattage: "30-50W", colours: "CW/WW/NW", specs: { battery: "24ah,30ah,36ah", panel: "50W,75W,100W"}, image: "/product-images/solar-semi-25-50w.png", href: "/products/outdoor/solar-street/semi-25-50w" },
    //Hybrid integrated
    { id: "solar-semi-20-18ah-50w",   category: "outdoor", subcategory: "solar-street",bodyType: "Hybrid Fully Integrated", wattage: "20W", colours: "CW/WW/NW", specs: { battery: "24ah,30ah,36ah", panel: "50W,75W,100W"}, image: "/product-images/solar-semi-25-50w.png", href: "/products/outdoor/solar-street/semi-25-50w" },
    { id: "solar-semi-60-18ah-100w",   category: "outdoor", subcategory: "solar-street",bodyType: "Hybrid Fully Integrated", wattage: "60W", colours: "CW/WW/NW", specs: { battery: "24ah,30ah,36ah", panel: "50W,75W,100W"}, image: "/product-images/solar-semi-25-50w.png", href: "/products/outdoor/solar-street/semi-25-50w" },
    { id: "solar-semi-80-18ah",   category: "outdoor", subcategory: "solar-street",bodyType: "Hybrid Fully Integrated", wattage: "80W", colours: "CW/WW/NW", specs: { battery: "As per requirement", panel: "As per requirement"}, image: "/product-images/solar-semi-25-50w.png", href: "/products/outdoor/solar-street/semi-25-50w" },

  ]
};
