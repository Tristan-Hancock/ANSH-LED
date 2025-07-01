import { fetchOutdoorData } from '@/server/outdoor';
import Navbar from "@/page-components/Navbar";
import ProductClient from "../../page-components/ProductClient"; 

export default async function ProductsIndex() {
  const { subcategories, products } = await fetchOutdoorData();

  return (
    <>
      <Navbar />
      <ProductClient subcategories={subcategories} products={products} />
    </>
  );
}
