import ProductsList from "@/components/ProductList";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/Product";

// metadata products page
export async function generateMetadata() {
    return {
        title: "Our Products - Products Gallery",
    };
}

export default async function productsPage() {
    // Fetching products data from API
    const res = await fetch("https://fakestoreapi.com/products");
    const products: Product[] = await res.json();


    return (
        <>
            <div className="min-h-screen bg-gray-50 py-7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                {/* back to home page */}
                    <Link href="/">
                    <Button variant="ghost" size="sm" className="mb-7 text-emerald-500 hover:text-emerald-500">
                        <Home className="h-5 w-5 mr-2"/>
                        Home
                    </Button>
                    </Link>
                    {/* title and search bar */}
                    <div className="text-center mb-11">
                        <h1 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-3">Our Products</h1>
                        <p className="text-gray-600 mb-8">Discover amazing products at great prices</p>
                        <div className="max-w-xl mx-auto">
                            <SearchBar/>
                        </div>
                    </div>
                    <ProductsList products={products}/>
                </div>
            </div>
        </>
    )
}
