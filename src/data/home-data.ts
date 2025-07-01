export interface Product {
    title: string;
    imageSrc: string;
    href?: string;
  }
  
  // TODO: Replace `imageSrc` values with your actual paths under public/...
  export const products: Product[] = [
    { title: "Recessed/POP - Panel Light", imageSrc: "/product-images/pop-light.png", href: "#" },
    { title: "Ceiling/Surface - Panel Light", imageSrc: "/product-images/panel-light.png", href: "#" },
    { title: "COB light", imageSrc: "/sample.png", href: "#" },
    { title: "Decor Your Ceiling", imageSrc: "/product-images/ceiling-light.png", href: "#" },
    { title: "Decor Your Outer", imageSrc: "/product-images/outer-light.png", href: "#" },
    { title: "Decor Your Wall", imageSrc: "/product-images/wall-light.png", href: "#" },
    { title: "Auto on/off sensor light", imageSrc: "/product-images/sensor-light.png", href: "#" },
    { title: "Flood Light", imageSrc: "/product-images/flood-light.png", href: "#" },
    { title: "Street Light", imageSrc: "/product-images/outdoor-light.png", href: "#" },
    { title: "Solar Street Light", imageSrc: "/product-images/solar-light.png", href: "#" },
  ];