// File: src/app/contact/page.tsx
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

      {/* Form and FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inquiry Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#7EA81D] mb-4">
              Send Us An Inquiry
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we’ll get back to you soon.
            </p>
            <form className="space-y-4">
              {[
                { label: 'Name', type: 'text' },
                { label: 'Email', type: 'email' },
                { label: 'Phone Number', type: 'tel' },
                { label: 'Subject', type: 'text' }
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full p-3 bg-gray-100 rounded-md border border-gray-200 placeholder-gray-400"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full p-3 bg-gray-100 rounded-md border border-gray-200 placeholder-gray-400 h-32 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#7EA81D] text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {Array(4).fill({
                question: 'What is the warranty period for LED products?',
                answer:
                  'All our LED products come with a 5-year comprehensive warranty covering manufacturing defects and performance issues.'
              }).map((faq, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Address */}
   {/* Office Address */}
<section className="py-12 bg-white">
  <div className="container mx-auto px-4 max-w-4xl">
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-4">
        {/* Location pin icon */}
        <svg xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6 text-[#7EA81D] mr-2"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        </svg>
        <h3 className="text-2xl font-semibold text-gray-800">Our Office</h3>
      </div>
      <address className="not-italic text-gray-700 space-y-1 mb-4">
        {officeAddress.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </address>
      {/* Optional: embed map iframe here */}
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
