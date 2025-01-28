import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="flex justify-center">
          <ShoppingBag className="h-14 sm:h-20 w-14 sm:w-20 text-emerald-500"/>
        </div>
        <h1 className=" font-bold text-2xl sm:text-5xl tracking-tight text-gray-900">
        Welcome to Our Store
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
        Discover our curated collection of products with beautiful designs and competitive prices.
        </p>
        <Link href="/products">
        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 mt-5">
        View Products
        </Button>
        </Link>
      </div>
    </main>
  );
}
