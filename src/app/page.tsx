import Navbar from "@/page-components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-[#7EA81D] to-[#B1C582]">
        <div className=" w-full container mx-auto px-4 text-center max-w-4xl py-10">
          <h1 className="text-center font-normal text-2xl xl:text-5xl">
            Illuminate Your World with Ansh LED
          </h1>
          <p className="text-lg mt-5 xl:text-3xl">
            Premium quality LED lighting solutions for homes, offices, and
            commercial spaces. Energy efficient, long-lasting, and
            environmentally friendly.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-xl mt-7 xl:px-8 xl:py-3 xl:text-xl">
            Get Quote
          </button>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 xl:grid-cols-3 p-10 xl:pt-20 gap-10">
          <div className="flex flex-col items-center">
            <Image
              src="/energy.png"
              alt="Energy Efficient"
              className="object-contain"
              height={150}
              width={150}
            />
            <h1 className="text-center font-normal text-lg mt-2">
              Energy Efficient
            </h1>
            <p className="text-center text-gray-600 mt-1">
              Save up to 80% on electricity bills with our LED technology
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/quality.png"
              alt="Quality"
              className="object-contain"
              height={150}
              width={150}
            />
            <h1 className="text-center font-normal text-lg mt-2">
              5-Year Warranty
            </h1>
            <p className="text-center text-gray-600 mt-1">
              Premium quality with extended warranty coverage
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/customer.png"
              alt="Customer Support"
              className="object-contain"
              height={150}
              width={150}
            />
            <h1 className="text-center font-normal text-lg mt-2">
              Free Delivery
            </h1>
            <p className="text-center text-gray-600 mt-1">
              Fast and free delivery across India
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
