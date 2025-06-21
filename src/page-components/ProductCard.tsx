import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
  bodyType: string;
  wattage: string;
  colours: string;
  image?: string;
  link: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  bodyType,
  wattage,
  colours,
  image = "/sample.png",
  link,
}) => {
  return (
    <div className="flex flex-col items-center bg-[#F1F1F1] p-5 max-w-sm rounded w-full h-fit">
      <Image src={image} alt={`Street Light (${bodyType})`} width={150} height={150} />
      <h1 className="text-center font-semibold text-lg mt-2">
        Street Light ({bodyType})
      </h1>
      <p className="text-center text-sm mt-1">Wattage: {wattage}</p>
      <p className="text-center text-sm">Colours: {colours}</p>
      <hr className="w-full my-2 h-1.5 border-t border-gray-400" />
      <Link
        href={link}
        className="bg-[#7EA81D] text-white w-full flex items-center justify-center py-2 mt-2 rounded"
      >
        <Download className="mr-2" />
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
