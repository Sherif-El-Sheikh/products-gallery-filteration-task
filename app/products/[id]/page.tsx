import ProductDetails from "@/components/ProductDetails";
import { Toaster } from "@/components/ui/toaster"
import { notFound } from "next/navigation";
import { ProductPageProps } from "@/types/PageProps";


  // fetch product data from API
  async function getProduct(id: string) {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) {
        return null;
      }
      const data = await res.json();
      // Check data
      if (!data) {
        return null;
      }
      return data;
    } catch (error) {
      console.log(error)
      return null;
    }
  }

// metadata based on product
export async function generateMetadata({ params }: ProductPageProps) {
  const resolvePramas = Promise.resolve(params);
  const productId = String((await resolvePramas).id);
  const product = await getProduct(productId);
  return {
    title: product ? `${product.title} - Product Details` : "Product Not Found",
  };
}

// generates static parameters for the product pages and converting the product IDs to string
export async function generateStaticParams() {
  try {
    const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    return products.map((product: { id: number }) => ({
      id: String(product.id)
    }));
  } catch (error) {
    console.log(error)
    return [];
  }
}

export default async function productPage({params} : ProductPageProps) {
  const resolvePramas = Promise.resolve(params);
  const productId = String((await resolvePramas).id);

   // Fetch product using id
    const product = await getProduct(productId);
    // check product exist
    if (!product) {
        notFound();
    }
  return (
    <>
    <ProductDetails product={product}/>
    <Toaster />
    </>
  )
}
