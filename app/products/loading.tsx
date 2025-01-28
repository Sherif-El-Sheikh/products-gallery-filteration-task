import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Link from 'next/link';


export default function ProductsLoading() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
            <Link href="/">
                <Button variant="ghost" size="sm">
                <Home className="h-5 w-5 mr-2" />
                Home
                </Button>
            </Link>
            </div>

            {/* Title and search section */}
            <div className="text-center mb-12">
            <Skeleton className="h-10 w-48 mx-auto mb-3" />
            <Skeleton className="h-6 w-64 mx-auto mb-8" />
            <div className="max-w-xl mx-auto">
                <Skeleton className="h-10 w-full" />
            </div>
            </div>

            {/* Products loading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-4 space-y-4">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-6 w-1/4" />
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}