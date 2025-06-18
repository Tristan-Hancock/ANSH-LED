export interface Product {
    title: string;
    imageSrc: string;
    href?: string;
  }
  
  // TODO: Replace `imageSrc` values with your actual paths under public/...
  export const products: Product[] = [
    { title: "Recessed/POP - Panel Light", imageSrc: "/images/panel-light.png", href: "#" },
    { title: "Ceiling/Surface - Panel Light", imageSrc: "/images/ceiling-panel.png", href: "#" },
    { title: "COB light", imageSrc: "/images/cob-light.png", href: "#" },
    { title: "Decor Your Ceiling", imageSrc: "/images/decor-ceiling.png", href: "#" },
    { title: "Decor Your Outer", imageSrc: "/images/decor-outer.png", href: "#" },
    { title: "Decor Your Wall", imageSrc: "/images/decor-wall.png", href: "#" },
    { title: "Auto on/off sensor light", imageSrc: "/images/sensor-light.png", href: "#" },
    { title: "Flood Light", imageSrc: "/images/flood-light.png", href: "#" },
    { title: "Street Light", imageSrc: "/images/street-light.png", href: "#" },
    { title: "Solar Street Light", imageSrc: "/images/solar-street.png", href: "#" },
  ];