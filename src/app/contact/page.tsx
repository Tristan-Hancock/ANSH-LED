import Navbar from "@/page-components/Navbar";
import Image from "next/image";
import React from "react";
import Footer from "@/page-components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-[#7EA81D] to-[#B1C582]">
        <div className=" w-full container mx-auto px-4 text-center max-w-4xl py-10">
          <h1 className="text-center font-normal text-2xl xl:text-5xl">
            Contact Us
          </h1>
          <p className="text-lg mt-5 xl:text-3xl">
            Get in touch with our lighting experts. We&apos;re here to help you
            find the perfect LED solution.
          </p>
        </div>
      </section>

<section className="py-10">
  {/* Message Us, Email Us, Call Us Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-5xl mx-auto">
    <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
      <div className="flex flex-col items-center">
        <Image
          src="/message.png"
          alt="Message Icon"
          className="object-contain"
          height={100}
          width={100}
        />
        <h1 className="text-2xl font-bold mt-4 uppercase text-gray-800">Message Us</h1>
        <p className="text-lg text-gray-700">www.walink.com</p>
        <p className="text-lg text-gray-700">+91 87654 32109</p>
        <p className="text-sm text-gray-500 mt-2">We&apos;ll respond within 24 hours</p>
      </div>
    </div>
    <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
      <div className="flex flex-col items-center">
        <Image
          src="/email.png"
          alt="Email Icon"
          className="object-contain"
          height={100}
          width={100}
        />
        <h1 className="text-2xl font-bold mt-4 uppercase text-gray-800">Email Us</h1>
        <p className="text-lg text-gray-700">info@anshled.com</p>
        <p className="text-lg text-gray-700">sales@anshled.com</p>
        <p className="text-sm text-gray-500 mt-2">We&apos;ll respond within 24 hours</p>
      </div>
    </div>
    <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
      <div className="flex flex-col items-center">
        <Image
          src="/call.png"
          alt="Call Icon"
          className="object-contain"
          height={100}
          width={100}
        />
        <h1 className="text-2xl font-bold mt-4 uppercase text-gray-800">Call Us</h1>
        <p className="text-lg text-gray-700">+91 98765 43210</p>
        <p className="text-lg text-gray-700">+91 87654 32109</p>
        <p className="text-sm text-gray-500 mt-2">Mon-Sat 9:00 AM - 7:00 PM</p>
      </div>
    </div>
  </div>

  {/* Inquiry and Testimonials Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">
    {/* Inquiry Form Section */}
    <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
      <h1 className="text-2xl font-bold uppercase text-gray-800">Send Us An Inquiry</h1>
      <p className="text-gray-600 mt-2 mb-6">Fill out the form below and we&apos;ll get back to you soon.</p>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            placeholder=""
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            placeholder=""
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            placeholder=""
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            placeholder=""
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 h-32"
            placeholder=""
          />
        </div>
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-green-600">
          Send Message
        </button>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
      <h1 className="text-2xl font-bold uppercase text-gray-800 mb-6">Testimonials</h1>
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">XYZ</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Non proin nunc ultricies nulla tristique. Condimentum molestie ultricies
            tellus amet velit in viverra. Urna augue parturient viverra eget lacus.
          </p>
        </div>
        <hr className="border-gray-300" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">XYZ</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Non proin nunc ultricies nulla tristique. Condimentum molestie ultricies
            tellus amet velit in viverra. Urna augue parturient viverra eget lacus.
          </p>
        </div>
        <hr className="border-gray-300" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">XYZ</h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Non proin nunc ultricies nulla tristique. Condimentum molestie ultricies
            tellus amet velit in viverra. Urna augue parturient viverra eget lacus.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="p-8 max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold text-center uppercase text-gray-800">Frequently Asked Questions</h1>
    <p className="text-center text-gray-600 mt-2 mb-8">Quick answers to common questions</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">What is the warranty period for LED products?</h3>
        <p className="text-gray-600 mt-2">
          All our LED products come with a 5-year comprehensive warranty covering manufacturing defects and performance issues.
        </p>
      </div>
      <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">What is the warranty period for LED products?</h3>
        <p className="text-gray-600 mt-2">
          All our LED products come with a 5-year comprehensive warranty covering manufacturing defects and performance issues.
        </p>
      </div>
      <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">What is the warranty period for LED products?</h3>
        <p className="text-gray-600 mt-2">
          All our LED products come with a 5-year comprehensive warranty covering manufacturing defects and performance issues.
        </p>
      </div>
      <div className="border-2 border-[#D9D9D9] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">What is the warranty period for LED products?</h3>
        <p className="text-gray-600 mt-2">
          All our LED products come with a 5-year comprehensive warranty covering manufacturing defects and performance issues.
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  );
};

export default page;
