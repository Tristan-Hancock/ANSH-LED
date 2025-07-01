'use server';

import { supabase } from '@/lib/supabaseclient';

export async function fetchOutdoorData() {
  // Step 1: Fetch all subcategories where category_id = 'outdoor'
  const { data: subcategories, error: subErr } = await supabase
    .from('Subcategories')
    .select('id, name, image_src, category_id')
    .eq('category_id', 'outdoor');

  if (subErr) {
    console.error('Subcategory fetch error:', subErr);
    throw subErr;
  }

  if (!subcategories?.length) {
    console.warn('⚠️ No subcategories found for "outdoor"');
    return { subcategories: [], products: [] };
  }

  const subIds = subcategories.map((s) => s.id);

  // Step 2: Fetch all products in those subcategories
  const { data: products, error: prodErr } = await supabase
    .from('Products')
    .select('id, subcategory_id, category_id, body_type, wattage, colours, specs, image, href')
    .in('subcategory_id', subIds);

  if (prodErr) {
    console.error('Product fetch error:', prodErr);
    throw prodErr;
  }

  return {
    subcategories,
    products,
  };
}

export async function fetchProduct(
  category: string,
  subcategory: string,
  productSlug: string
) {
  const productId = productSlug;

  const { data, error } = await supabase
    .from('Products')
    .select(
      'id, category_id, subcategory_id, body_type, wattage, colours, specs, image, href'
    )
    .match({
      id: productId,
      category_id: category,
      subcategory_id: subcategory,
    })
    .single();

  if (error) {
    console.error('Product fetch error:', error);
    return null;
  }

  return data;
}
