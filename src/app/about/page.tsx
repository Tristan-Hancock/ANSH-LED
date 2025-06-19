"use client";

import Navbar from "@/page-components/Navbar";
import Footer from "@/page-components/Footer";
import Image from "next/image";
import {
  aboutHero,
  aboutCopy,
  stats,
  vision,
  mission,
  values,
  certifications,
} from "@/data/about";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#7EA81D] to-[#B1C582] py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            {aboutHero.title}
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            {aboutHero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro + Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Copy & Stats */
          <div className="space-y-6">
            {aboutCopy.map((p, i) => (
              <p key={i} className="text-gray-700 text-lg md:text-xl">
                {p}
              </p>
            ))}

            <div className="flex flex-wrap gap-6 mt-8">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center rounded-lg p-6"
                  style={{
                    backgroundColor: s.bg,
                    border: `2px solid ${s.border}`,
                  }}
                >
                  <span className="text-4xl font-bold">{s.value}</span>
                  <span className="text-xl text-gray-700">{s.label}</span>
                </div>
              ))}
            </div>
          </div>}

          {/* Hero Image */}
          <div className="flex justify-center">
            <Image
              src="/abouttemp.png"
              alt="About Ansh LED"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {[vision, mission].map((block) => (
            <div
              key={block.title}
              className="flex flex-col border-2 border-[#7C7C7C] rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={block.icon}
                  alt={block.title}
                  width={32}
                  height={32}
                  className="mr-3"
                />
                <h2 className="text-2xl font-bold">{block.title}</h2>
              </div>
              <p className="text-gray-700">{block.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-2">Our Values</h2>
          <p className="text-center text-gray-600 mb-12">
            The principles that guide everything we do at Ansh LED
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center p-6 space-y-4"
              >
                <Image
                  src={v.icon}
                  alt={v.title}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="text-gray-700">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Certifications & Awards</h2>
          <p className="text-gray-600 mb-8">
            Recognized for excellence and quality
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <div
                key={c}
                className="border-2 border-gray-300 rounded-lg py-4"
              >
                <p className="font-medium text-gray-700">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
