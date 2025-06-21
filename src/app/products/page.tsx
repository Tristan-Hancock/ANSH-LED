import Footer from "@/page-components/Footer";
import Navbar from "@/page-components/Navbar";
import ProductCard from "@/page-components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { categories } from "@/data/category-data";

const page = () => {
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
        <div className="flex flex-col bg-white p-10 shadow-md h-fit mb-20">
          <h1 className="font-bold text-3xl">Filter</h1>

          <h2 className="font-bold text-xl mt-6">Wattage</h2>
          <div className="grid grid-cols-3 gap-6 mt-5">
            <button className="border border-black p-2 font-semibold">
              3W
            </button>
            <button className="border border-black p-2 font-semibold">5W</button>
            <button className="border border-black p-2 font-semibold">7W</button>
            <button className="border border-black p-2 font-semibold">9W</button>
            <button className="border border-black p-2 font-semibold">12W</button>
            <button className="border border-black p-2 font-semibold">15W</button>
            <button className="border border-black p-2 font-semibold">18W</button>
          </div>
          <div className="mt-5">
            <h1 className="font-bold text-xl">Type</h1>
            <div className="mt-3 space-y-3">
              <p className="text-[#505050] text-lg">Solar</p>
              <p className="text-[#505050] text-lg">Lens</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:ml-20 w-full">
          <ProductCard
                bodyType="Lens"
                wattage="12W"
                colours="White, Black"
                image="/product-images/outdoor-light.png"
                link="/products/street-light/lens-12w"
              />

              <ProductCard
                bodyType="Lens"
                wattage="12W"
                colours="White, Black"
                image="/product-images/outdoor-light.png"
                link="/products/street-light/lens-12w"
              />
              <ProductCard
                bodyType="Glass"
                wattage="12W"
                colours="White, Black"
                image="/product-images/outdoor-light.png"
                link="/products/street-light/lens-12w"
              />
              <ProductCard
                bodyType="Glass"
                wattage="12W"
                colours="White, Black"
                image="/product-images/outdoor-light.png"
                link="/products/street-light/lens-12w"
              />
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default page;
