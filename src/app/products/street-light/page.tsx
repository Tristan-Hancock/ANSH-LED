'use client';
import { categories } from "@/data/category-data";
import { products } from "@/data/products";
import Navbar from "@/page-components/Navbar";
import ProductCard from "@/page-components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const Page = () => {

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const filteredProducts = useMemo(() => {
    // if no filter picked, show everything
    if (selectedTypes.length === 0) return products;

    return products.filter((p) => selectedTypes.includes(p.bodyType));
  }, [selectedTypes]);
  return (
    <>
      <Navbar />
      <section className="bg-[#F3F3F3] ">
        <div className="flex md:flex-row mx-auto justify-center items-center p-10 gap-10 overflow-scroll">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <div className="flex flex-col items-center">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  width={150}
                  height={150}
                />
                <p>{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

<section className="flex flex-col md:flex-row px-10 md:px-20 mb-20 mt-20">
        {/* ----------- Filter column ----------- */}
        <aside className="flex flex-col bg-white p-10 shadow-md h-fit mb-20">
          <h1 className="font-bold text-3xl">Filter</h1>

          <div className="mt-5">
            <h2 className="font-bold text-xl">Type</h2>
            <div className="mt-3 space-y-3">
              {['Glass', 'Lens'].map((type) => (
                <label key={type} className="flex items-center space-x-2 text-[#505050] text-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ----------- Product grid ----------- */}
        <div className="w-full">
          <div className="flex flex-col md:ml-20">
            <h1 className="text-2xl font-bold mb-20">Street Light</h1>

            {filteredProducts.length === 0 ? (
              <p className="text-gray-500">No products match that filter.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {filteredProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    bodyType={p.bodyType}
                    wattage={p.wattage}
                    colours={p.colours}
                    image={p.image}
                    link={p.link}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
