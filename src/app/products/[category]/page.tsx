// File: src/app/products/[category]/page.tsx
"use client";

import Navbar from "@/page-components/Navbar";
import { useParams } from "next/navigation";
import Image from "next/image";
import { subcategories } from "@/data/subcategories";
import { products } from "@/data/products";
import ProductCard from "@/page-components/ProductCard";
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

export default function CategoryPage() {
  // 1) get the category slug (e.g. 'outdoor')
  const { category } = useParams() as { category: string };

  // 2) load its subcategories (street-light, flood-light, etc)
  const subs = subcategories[category] || [];

  // 3) pick one sub (default to first)
  const [selectedSub, setSelectedSub] = useState(subs[0]?.id || "");

  // 4) grab all products for that subcategory
  const items = products[selectedSub] || [];

  // 5) derive the bodyType filters from those items
  const types = Array.from(new Set(items.map((p) => p.bodyType)));
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const filtered = useMemo(() => {
    if (!selectedTypes.length) return items;
    return items.filter((p) => selectedTypes.includes(p.bodyType));
  }, [items, selectedTypes]);
  const toggleType = (t: string) =>
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  // 6) find the human name of the current sub
  const currentName = subs.find((s) => s.id === selectedSub)?.name || "";

  return (
    <>
      <Navbar />

      {/* ---- Top subcategory nav ---- */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex justify-center space-x-8 overflow-x-auto">
          {subs.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setSelectedSub(sub.id)}
              className={`flex flex-col items-center space-y-2 transition ${
                selectedSub === sub.id
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {sub.imageSrc && (
                <Image
                  src={sub.imageSrc}
                  alt={sub.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
              )}
              <span className="text-sm font-medium text-gray-800">
                {sub.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ---- Header (title + count) ---- */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            {currentName}
          </h1>
          <div className="flex items-center text-gray-600 cursor-pointer">
            <span className="mr-1">
              {currentName} ({items.length} Products)
            </span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </section>

      {/* ---- Filters + Grid ---- */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 pb-12">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Sort By</h2>
          <div className="mb-6">
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

        {/* Product grid */}
        <main className="w-full md:w-3/4">
          {filtered.length === 0 ? (
            <p className="text-gray-500">No products match your filters.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  subName={currentName}
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
