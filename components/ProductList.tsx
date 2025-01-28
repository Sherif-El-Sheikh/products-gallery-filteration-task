"use client"
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { ProductListProps } from "@/types/Product";



const ProductList: React.FC<ProductListProps> = ({ products }) => {
    // get query parameters from the URL
    const searchParams = useSearchParams();
    const query = searchParams.get('q')?.toLocaleLowerCase() || '';


 // Filter products based on search query
    const filteredProducts = products.filter((product)=> {
        return product.title.toLowerCase().includes(query)
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* message if no products */}
            {filteredProducts.length === 0 ?
                <p className="text-center col-span-full text-gray-500">Sorry, we couldn&apos;t find any products matching your search.</p>
            :
            (filteredProducts.map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                        {/* product image */}
                            <div className="aspect-square mb-4 group">
                                <Image
                                src={product.image}
                                alt={product.title}
                                width={300}
                                height={300}
                                className="object-contain w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            {/* product title (name) */}
                            <h2 className="font-semibold text-lg line-clamp-2 my-2 text-center">{product.title.split(' ').slice(0, 4).join(' ')}</h2>
                            {/* product short description */}
                            <p className="text-gray-600 text-sm line-clamp-3">{product.description.slice(0, 104)}...</p>
                        </CardContent>
                        {/* product price */}
                        <CardFooter className="p-4 pt-0">
                        <p className="text-lg font-bold text-emerald-600">
                            ${product.price}
                        </p>
                        </CardFooter>
                    </Card>
                </Link>
            )))}
        </div>
    );
};

export default ProductList;




