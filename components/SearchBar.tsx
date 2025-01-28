"use client"
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";


export default function SearchBar() {
    // query parameters from the URL
    const searchparams = useSearchParams();
    const router = useRouter();


    // search Input Change
    const handleSearch = (value: string) => {
        const params = new URLSearchParams();
        params.set('q', value)
        router.push('/products?' + params.toString());
    }
    
    return (
    <div className="relative">
        <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
        <Input
        type="search"
        placeholder="Search products..."
        className="pl-10 rounded-full focus-visible:ring-emerald-500"
        defaultValue={searchparams.get('q') || ''}
        onChange={(e)=> {handleSearch(e.target.value)}}
        />
    </div>
    )
}
