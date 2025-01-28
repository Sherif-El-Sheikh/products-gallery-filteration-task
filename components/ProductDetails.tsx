"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/types/Product";

export default function ProductDetails({product}: {product: Product}) {
    const { toast } = useToast();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
        {/* Back to products page */}
            <Link href="/products">
            <Button variant="ghost" className="mb-8 hover:text-emerald-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Products
            </Button>
            </Link>
            <Card className="overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {/* product Image */}
                    <div className="aspect-square bg-white p-4 rounded-lg flex items-center justify-center md:mt-8 lg:mt-0">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="object-contain w-full h-full hover:scale-105 duration-200"
                    />
                    </div>
                    {/* Product Info */}
                    <div className="space-y-6">
                    {/* Category */}
                        <Badge variant="secondary">{product.category}</Badge>
                        {/* product title (name) */}
                        <h1 className="text-xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-gray-900 ">
                            {product.title}
                        </h1>
                        {/* product price  */}
                        <p className="text-xl sm:text-2xl font-bold text-emerald-600">
                            ${product.price}
                        </p>
                        {/* product full description */}
                        <div className="border-t pt-6">
                            <h2 className="text-lg sm:text-xl font-semibold mb-3">
                            About this product
                            </h2>
                            <p className="text-gray-600">
                                {product.description}
                            </p>
                        </div>
                        
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600"
                            onClick={() => {
                                toast({
                                title: "Product has been successfully added.",
                            })
                        }}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
        </div>
    );
    }
