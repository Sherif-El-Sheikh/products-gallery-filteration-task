import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

// metadata notfound page
export async function generateMetadata() {
    return {
        title: "Page Not Found - Products Gallery",
    };
    }

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="space-y-6 text-center">
                <ShoppingBag className="h-14 sm:h-20 w-14 sm:w-20 text-emerald-500 mx-auto"/>
                <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">Page Not Found</h1>
                <p className="text-gray-600 sm:text-lg">
                    Sorry, we couldn&apos;t find what you were looking for.
                </p>
                <Link href="/">
                    <Button className="bg-emerald-500 hover:bg-emerald-600 mt-5">
                        Return Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}
