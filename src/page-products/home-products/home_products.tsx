"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/home-data";
import { ChevronRight } from "lucide-react";

export default function HomeProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Shop by Specific Category
          </h2>

          <Link
            href="#"
            className="inline-flex items-center space-x-1 text-[#121827] text-lg font-semibold hover:text-opacity-80"
          >
            <span>View all Products</span>
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <Link
              key={idx}
              href={product.href || "#"}
              className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-4">
                {product.imageSrc ? (
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain mx-auto"
                  />
                ) : (
                  <div className="h-40 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">Image Here</span>
                  </div>
                )}
                <h3 className="mt-4 text-center text-lg font-medium text-gray-700">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
