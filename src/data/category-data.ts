export interface Category {
  name: string;
  imageSrc: string;
  href: string;
}

export const categories: Category[]  = [
  {name: "Street Light", imageSrc: "/product-images/outdoor-light.png", href:"products/street-light" },
  {name: "Flood Light", imageSrc: "/product-images/flood-light.png", href:"products/flood-light" },
  {name: "High Bay Light", imageSrc: "/product-images/highbay-light.png", href:"products/high-bay-light" },
  {name: "Solar Street Light", imageSrc: "/product-images/sensor-light.png",href:"products/solar-street-light" },
]