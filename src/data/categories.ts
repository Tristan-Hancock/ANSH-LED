// File: src/data/categories.ts

export interface Category {
    id: string;        // e.g. "outdoor"
    name: string;      // e.g. "Outdoor Lights"
    imageSrc: string;  // path under public/
    href: string;      // route to category page
  }
  
  export const categories: Category[] = [
    {
      id: "outdoor",
      name: "Outdoor Lights",
      imageSrc: "/category-images/outdoor.png",
      href: "/products/outdoor"
    },
    {
      id: "indoor",
      name: "Indoor Lights",
      imageSrc: "/category-images/indoor.png",
      href: "/products/indoor"
    },
    {
      id: "solar",
      name: "Solar Lights",
      imageSrc: "/category-images/solar.png",
      href: "/products/solar"
    },
    {
      id: "industrial",
      name: "Industrial Lights",
      imageSrc: "/category-images/industrial.png",
      href: "/products/industrial"
    }
  ];
  
  
  