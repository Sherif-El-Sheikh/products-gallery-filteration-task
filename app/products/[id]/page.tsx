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
  if (typeof params !== "object" || !params || !("id" in params)) {
    return { title: "Product Not Found" };
  }

  const productId = Array.isArray(params.id) ? params.id[0] : params.id;
  if (!productId || typeof productId !== "string") {
    return { title: "Product Not Found" };
  }

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
  if (typeof params !== "object" || !params || !("id" in params)) {
    notFound();
  }

  const productId = Array.isArray(params.id) ? params.id[0] : params.id;
  if (!productId || typeof productId !== "string") {
    notFound();
  }

  const product = await getProduct(productId);
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
