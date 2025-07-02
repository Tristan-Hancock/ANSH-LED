import Footer from "@/page-components/Footer";
import Navbar from "@/page-components/Navbar";
import Image from "next/image";
import React from "react";
import { fetchProduct } from "@/server/outdoor";
//second dummy push
interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
    product: string;
  }>;
}

export default async function Page({ params }: Props) {
  // const { subcategory, product } = params;
  // const productList = products[subcategory];
  // const productData = productList?.find((p) => p.id.includes(product));

  const { category, subcategory, product } = await params;
  const productData = await fetchProduct(category, subcategory, product);

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row p-6 md:p-12 gap-10">
        {/* Product Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            className="border border-gray-300 rounded-lg object-contain max-h-[500px]"
            src={productData.image}
            alt={`${productData.subcategory_id} ${productData.body_type}`}
            width={500}
            height={500}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {productData.wattage} {productData.subcategory_id}{" "}
            {productData.body_type}
          </h1>

          {/* Description */}
          <div className="mb-8">
            <h2 className="font-semibold text-2xl mb-2 text-gray-800">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              ANSH LED Lamps are replacements for incandescent or compact
              fluorescent lamps. They are designed to illuminate your home and
              office spaces with their pleasing radiance and perfect hue.
            </p>
          </div>

          {/* Specifications */}
          <div>
            {/* <h2 className="font-semibold text-2xl mb-4 text-gray-800">
              Specifications
            </h2> */}

            <div className="space-y-4">
              {/* {Object.entries(productData.specs || {}).map(([key, value]) => (
                <div key={key} className="flex items-start">
                  <span className="w-40 font-semibold text-lg text-gray-700">
                    {key}:
                  </span>
                  <span className="text-lg text-gray-900">{value}</span>
                </div>
              ))}

              <hr className="my-4 border-gray-300 " /> */}

              <div className="flex">
                <span className="w-40 font-semibold text-lg text-gray-700">
                  Wattage:
                </span>
                <span className="text-lg text-gray-900">
                  {productData.wattage}
                </span>
              </div>

              <div className="flex">
                <span className="w-40 font-semibold text-lg text-gray-700">
                  Body Type:
                </span>
                <span className="text-lg text-gray-900">
                  {productData.body_type}
                </span>
              </div>

              <div className="flex">
                <span className="w-40 font-semibold text-lg text-gray-700">
                  Category:
                </span>
                <span className="text-lg text-gray-900">
                  {productData.category_id}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 md:pl-20">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left md:text-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2" colSpan={2}>
                <h1>Specifications</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Input Voltage
              </td>
              <td className="border border-gray-300 px-4 py-2">
                90-300V AC - 50 Hz
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Power Factor</td>
              <td className="border border-gray-300 px-4 py-2">0.95</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Colour</td>
              <td className="border border-gray-300 px-4 py-2">
                CW, WW, R, G, B
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Shape</td>
              <td className="border border-gray-300 px-4 py-2">
                Spike, Up-down, Bollards
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">CRI</td>
              <td className="border border-gray-300 px-4 py-2">More than 85</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Beam Angle</td>
              <td className="border border-gray-300 px-4 py-2">45-120°</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Lumens</td>
              <td className="border border-gray-300 px-4 py-2">120LM/W</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Operating Temperature
              </td>
              <td className="border border-gray-300 px-4 py-2">
                (-20° to 60°C)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">LED Driver</td>
              <td className="border border-gray-300 px-4 py-2">
                Constant Voltage or Current
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                Ingress Protection
              </td>
              <td className="border border-gray-300 px-4 py-2">IP 65</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-5 md:pl-20">
        <div className="mt-8">
          <h2 className="font-semibold text-xl mb-2">Used In :</h2>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-800 font-medium text-lg">
            <span>Homes</span>
            <span className="px-1">|</span>
            <span>Offices</span>
            <span className="px-1">|</span>
            <span>Restaurants</span>
            <span className="px-1">|</span>
            <span>Marts</span>
            <span className="px-1">|</span>
            <span>Galleries</span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-xl mb-2">Features :</h2>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-800 font-medium text-lg">
            <span>Up to 80% Energy Saving</span>
            <span className="px-1">|</span>
            <span>Lasts long (more than 35,000 burning hrs)</span>
            <span className="px-1">|</span>
            <span>Eco-Friendly</span>
            <span className="px-1">|</span>
            <span>Non radiation</span>
            <span className="px-1">|</span>
            <span>Good colour rendering</span>
            <span className="px-1">|</span>
            <span>Reduces CO₂</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};


