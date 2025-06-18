import Navbar from "@/page-components/Navbar";
import React from "react";
import Image from "next/image";
import Footer from "@/page-components/Footer";
const page = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-[#7EA81D] to-[#B1C582]">
        <div className=" w-full container mx-auto px-4 text-center max-w-4xl py-10">
          <h1 className="text-center font-normal text-2xl xl:text-5xl">
            ABOUT ANSH LED
          </h1>
          <p className="text-lg mt-5 xl:text-3xl">
            Pioneering the future of lighting with innovative LED solutions
            since 2015
          </p>
        </div>
      </section>
      {/* information */}

      <section>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full p-10">
          <div>
            <div className="md:p-10 p-3">
              <p className="text-lg xl:text-2xl mb-5">
                Figma ipsum component variant main layer. Library figma pencil
                reesizing export effect layer prototype.
              </p>
              <h1 className="text-xl xl:text-4xl mb-5 text-[#7EA81D]">
                Something about the company
              </h1>
              <p className="text-lg xl:text-2xl mb-5">
                Scrolling subtract rotate pen auto undo export italic mask undo.
                Scrolling subtract rotate pen auto undo export italic mask undo.
              </p>
            </div>

            <div className="flex flex-col justify-center mt-5 mx-auto md:flex-row md:flex-wrap md:gap-10">
              <div className="bg-[#FFF1FD] flex flex-col items-center p-5 mb-5 rounded-lg border-[#A81D77] border-2 px-12">
                <h1 className="text-3xl font-bold">50K +</h1>
                <p className="text-xl font-light">Happy Customers</p>
              </div>

              <div className="bg-[#FAFFF0] flex flex-col items-center p-5 mb-5 rounded-lg border-[#7EA81D] border-2 px-12">
                <h1 className="text-3xl font-bold">10+ Years</h1>
                <p className="text-xl font-light">Of Experience</p>
              </div>
            </div>
          </div>
          <Image
            src="/about.png"
            alt="About Ansh LED"
            className="object-cover mx-auto"
            height={500}
            width={500}
          />
        </div>
      </section>

      <section className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col border-2 border-[#7C7C7C] rounded-xl p-8">
            <div className="flex flex-row items-center justify-start mb-3">
              <Image
                src="/globe.png"
                alt="Globe Icon"
                width={30}
                height={30}
                className="mr-2.5"
              />
              <h1 className="text-3xl font-bold">Our Vision</h1>
            </div>
            <p>
              To become the most trusted LED lighting brand in India, known for
              quality, innovation, and customer satisfaction, while contributing
              to a sustainable and energy-efficient future.
            </p>
          </div>
          <div className="flex flex-col border-2 border-[#7C7C7C] rounded-xl p-8">
            <div className="flex flex-row items-center justify-start mb-3">
              <Image
                src="/bulb.png"
                alt="Bulb Icon"
                width={30}
                height={30}
                className="mr-2.5"
              />
              <h1 className="text-3xl font-bold">Our Mission</h1>
            </div>
            <p>
              To revolutionize the lighting industry by providing innovative,
              energy-efficient, and affordable LED solutions that enhance the
              quality of life while protecting our environment for future
              generations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-center font-bold text-4xl mb-2.5">Our Values</h1>
        <p className="text-center p-4">
          The principles that guide everything we do at Ansh LED
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5 mt-10">
          <div className="flex flex-col items-center">
            <Image
              src="/sustainability.png"
              alt="Values Icon"
              width={150}
              height={150}
              className="mr-2.5"
            />
            <div className="flex flex-col items-center p-5">
              <h1 className="text-2xl font-bold">Sustainability</h1>
              <p className="text-center">
                Committed to environmental responsibility through energy
                efficient products and sustainable manufacturing practices.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/warranty.png"
              alt="Values Icon"
              width={150}
              height={150}
              className="mr-2.5"
            />
            <div className="flex flex-col items-center p-5">
              <h1 className="text-2xl font-bold">Quality</h1>
              <p className="text-center">
                Uncompromising commitment to quality in every product, backed by
                rigorous testing and premium materials.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/customer.png"
              alt="Values Icon"
              width={150}
              height={150}
              className="mr-2.5"
            />
            <div className="flex flex-col items-center p-5">
              <h1 className="text-2xl font-bold">Customer First</h1>
              <p className="text-center">
                Putting our customers at the heart of everything we do, with
                exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="md:mt-40">
        <h1 className="text-center font-bold text-3xl">Certifications And Awards</h1>
        <p className="text-center">Recognized for excellence and quality</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 p-10">
          <div className="border-2 border-[#CACACA] rounded-lg">
            <p className="text-center font-semibold p-2">ISO 9001:2015 Certified</p>
          </div>
          <div className="border-2 border-[#CACACA] rounded-lg">
            <p className="text-center font-semibold p-2">BIS Approved</p>
          </div>
          <div className="border-2 border-[#CACACA] rounded-lg">
            <p className="text-center font-semibold p-2">Energy Star Rated</p>
          </div>
          <div className="border-2 border-[#CACACA] rounded-lg">
            <p className="text-center font-semibold py-2">Best LED Brand 2023</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
