// File: src/app/products/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/page-components/Navbar";
import ProductCard from "@/page-components/ProductCard";
import Image from "next/image";
import { subcategories } from "@/data/subcategories";
import { products } from "@/data/products";

export default function ProductsIndex() {
  // For now, display only the "outdoor" subcategories
  const subs = subcategories["outdoor"] || [];
  // Which subcategory is active?
  const [selectedSub, setSelectedSub] = useState<string>(subs[0]?.id || "");

  // Items for the selected subcategory
  const items = products[selectedSub] || [];
  // Derive available body types
  const types = Array.from(new Set(items.map((p) => p.bodyType)));
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Filter items by selected body types
  const filtered = useMemo(() => {
    if (!selectedTypes.length) return items;
    return items.filter((p) => selectedTypes.includes(p.bodyType));
  }, [items, selectedTypes]);

  const toggleType = (type: string) =>
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  return (
    <>
      <Navbar />

      {/* Subcategory Navigation */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex overflow-x-auto space-x-6">
          {subs.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSub(sub.id)}
              className={`flex-shrink-0 flex flex-col items-center px-3 py-2 rounded-md transition
                ${selectedSub === sub.id ? 'bg-[#7EA81D] text-white' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
            >
              {sub.imageSrc && (
                <Image
                  src={sub.imageSrc}
                  alt={sub.name}
                  width={80}
                  height={80}
                  className="mb-2"
                />
              )}
              <span className="text-sm font-medium">{sub.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Filter & Products Layout */}
      <div className="flex flex-col md:flex-row px-6 md:px-20 py-12 gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Sort By</h2>
          <div>
            <h3 className="font-medium mb-2">Body Type</h3>
            <div className="space-y-2">
              {types.map((t) => (
                <label key={t} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(t)}
                    onChange={() => toggleType(t)}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="w-full md:w-3/4">
          {filtered.length === 0 ? (
            <p className="text-gray-500">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  bodyType={p.bodyType}
                  wattage={p.wattage}
                  colours={p.colours}
                  image={p.image}
                  link={p.href}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
