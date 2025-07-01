// File: src/data/subcategories.ts

export interface Subcategory {
  id: string;        // e.g. "street-light"
  name: string;      // e.g. "Street Light"
  href: string;      // route to subcategory page
  imageSrc?: string; // optional icon path under public/
}

export const subcategories: Record<string, Subcategory[]> = {
  outdoor: [
    {
      id: "street-light",
      name: "Street Light",
      href: "/products/outdoor/street-light",
      imageSrc: "/product-images/outdoor-light.png"
    },
    {
      id: "flood-light",
      name: "Flood Light",
      href: "/products/outdoor/flood-light",
      imageSrc: "/product-images/flood-light.png"
    },
    {
      id: "highbay-light",
      name: "Highbay Light",
      href: "/products/outdoor/highbay-light",
      imageSrc: "/product-images/highbay-light.png"
    },
    {
      id: "solar-street",
      name: "Solar Street Light",
      href: "/products/outdoor/solar-street",
      imageSrc: "/product-images/solar-light.png"
    }
  ],
  indoor: [],
  solar: [],
  industrial: []
};
