import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function ProductDetailsLoading() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
            <Link href="/products">
            <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
            </Button>
            </Link>
            
            <Card className="overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Loading for product image */}
                <div className="aspect-square bg-white rounded-lg">
                <Skeleton className="w-full h-full" />
                </div>
                {/* Loading for product information */}
                <div className="space-y-6">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-8 w-32" />
                <div className="border-t pt-6">
                    <Skeleton className="h-6 w-40 mb-3" />
                    <Skeleton className="h-24 w-full" />
                </div>
                <Skeleton className="h-12 w-full" />
                </div>
            </div>
            </Card>
        </div>
        </div>
    );
}
