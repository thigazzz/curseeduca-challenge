interface Product {
    id: number;
    title: string;
    description: string;
    src: string;
    price: number;
    link: string;
}

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className="bg-slate-200 p-2 rounded cursor-pointer">
            <img src={product.src} alt={product.description} />
            <div className="flex flex-col">
              <span className="text-gray-500 mb-1 text-sm md:text-base ">{product.title}</span>
              <span className="font-bold text-sm md:text-base">{product.price}</span>
            </div>
        </div>
    )
}