// src/app/contact/page.tsx
"use client";
import Navbar from "@/page-components/Navbar";
import Footer from "@/page-components/Footer";
import Image from "next/image";
import { contactOptions, officeAddress } from "@/data/contact-data";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#7EA81D] to-[#B1C582] py-16">
        <div className="container mx-auto text-center px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/90">
            Get in touch with our lighting experts. We’re here to help you
            find the perfect LED solution.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {contactOptions.map((opt) => (
            <div
              key={opt.title}
              className="border-2 border-gray-200 rounded-lg p-6 text-center"
            >
              <Image
                src={opt.icon}
                alt={`${opt.title} icon`}
                width={80}
                height={80}
                className="mx-auto"
              />
              <h2 className="text-2xl font-bold mt-4 uppercase text-gray-800">
                {opt.title}
              </h2>
              {opt.lines.map((line) => (
                <p key={line} className="text-lg text-gray-700 mt-1">
                  {line}
                </p>
              ))}
              {opt.note && (
                <p className="text-sm text-gray-500 mt-2">{opt.note}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Office Address */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-md bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Our Office</h3>
          {officeAddress.map((line) => (
            <p key={line} className="text-gray-700">
              {line}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
