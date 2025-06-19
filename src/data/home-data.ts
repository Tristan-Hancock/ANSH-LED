export interface Product {
    title: string;
    imageSrc: string;
    href?: string;
  }
  
  // TODO: Replace `imageSrc` values with your actual paths under public/...
  export const products: Product[] = [
    { title: "Recessed/POP - Panel Light", imageSrc: "/pop-light.png", href: "#" },
    { title: "Ceiling/Surface - Panel Light", imageSrc: "/panel-light.png", href: "#" },
    { title: "COB light", imageSrc: "/sample.png", href: "#" },
    { title: "Decor Your Ceiling", imageSrc: "/ceiling-light.png", href: "#" },
    { title: "Decor Your Outer", imageSrc: "/outer-light.png", href: "#" },
    { title: "Decor Your Wall", imageSrc: "/wall-light.png", href: "#" },
    { title: "Auto on/off sensor light", imageSrc: "/sensor-light.png", href: "#" },
    { title: "Flood Light", imageSrc: "/flood-light.png", href: "#" },
    { title: "Street Light", imageSrc: "/outdoor-light.png", href: "#" },
    { title: "Solar Street Light", imageSrc: "/solar-light.png", href: "#" },
  ];