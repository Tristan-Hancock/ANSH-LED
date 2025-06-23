// File: src/app/products/[category]/page.tsx
"use client";
import Navbar from "@/page-components/Navbar";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { subcategories } from "@/data/subcategories";
import { products } from "@/data/products";
import ProductCard from "@/page-components/ProductCard";
import { useState, useMemo } from "react";

export default function CategoryPage() {
  // Grab the category (e.g. 'outdoor') from the URL
  const { category } = useParams() as { category: string };

  // Lookup all subcategories for this category
  const subs = subcategories[category] || [];

  // Which subcategory is selected? Default to the first
  const [selectedSub, setSelectedSub] = useState<string>(subs[0]?.id || "");

  // Retrieve products for the current subcategory
  const items = products[selectedSub] || [];

  // (Optional) Derive body-type filters
  const types = Array.from(new Set(items.map(p => p.bodyType)));
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const filtered = useMemo(() => {
    if (!selectedTypes.length) return items;
    return items.filter(p => selectedTypes.includes(p.bodyType));
  }, [items, selectedTypes]);
  const toggleType = (t: string) =>
    setSelectedTypes(prev =>
      prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
    );

  return (
    <>
      <Navbar />

      {/* Subcategory nav (Street, Flood, Highbay, Solar) */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 flex space-x-4 overflow-x-auto">
          {subs.map(sub => (
            <button
              key={sub.id}
              onClick={() => setSelectedSub(sub.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-md font-medium transition
                ${selectedSub === sub.id ? 'bg-[#7EA81D] text-white' : 'bg-white text-gray-800 hover:bg-gray-200'}`}
            >
              {sub.name}
            </button>
          ))}
        </div>
      </section>

      <div className="flex flex-col md:flex-row px-6 md:px-20 py-12 gap-8">
        {/* Sidebar filters (optional) */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Filter by Body Type</h2>
          {types.map(t => (
            <label key={t} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={selectedTypes.includes(t)}
                onChange={() => toggleType(t)}
                className="mr-2"
              />
              <span className="text-gray-700">{t}</span>
            </label>
          ))}
        </aside>

        {/* Products grid */}
        <main className="w-full md:w-3/4">
          {filtered.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(p => (
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
