import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center bg-[#F1F1F1] p-5 max-w-sm rounded w-full">
      <Image src="/sample.png" alt="LED Bulb (ANLB)" width={150} height={150} />
      <h1 className="text-center font-normal text-lg mt-2 mb-4">
        LED Bulb (ANLB)
      </h1>
      <hr className="w-full my-2 h-1.5 border-t border-gray-400" />
      <Link href="/products/street-light" className="bg-[#7EA81D] text-white w-full flex items-center justify-center py-2 mt-2 rounded" >
          <Download className="mr-2" />
          View Details
      </Link>
    </div>
  );
};

export default ProductCard;
