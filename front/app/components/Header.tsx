import SearchBar from "./SearchBar";
import ShopCart from "./ShopCart";

export default function Header() {
    return (
        <header className="w-full bg-slate-200 flex justify-around md:justify-between items-center sm:p-4">
            <div className="text-xs md:text-lg">Capucceeno</div>
            <div className="flex items-center">
                <div className="mr-4 md:mr-8">
                    <SearchBar />
                </div>
                <div>
                    <ShopCart />
                </div>
            </div>
        </header>
    )
}