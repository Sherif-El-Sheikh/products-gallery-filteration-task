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
  const product = await getProduct(params.id);
  return {
    title: product ? `${product.title} - Product Details` : "Product Not Found",
  };
}

export default async function productPage({params} : ProductPageProps) {
    // const resolvedParams = await Promise.resolve(params);
    // Fetch product using id
    const product = await getProduct(params.id);
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
