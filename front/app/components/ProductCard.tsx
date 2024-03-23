import { Product } from "../types/Product"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className="bg-slate-200 p-2 rounded cursor-pointer">
            <img src={product.image} alt={product.description} className="w-40 h-40 object-cover rounded"/>
            <div className="flex flex-col">
              <span className="text-gray-500 mb-1 text-sm md:text-base ">{product.title}</span>
              <span className="font-bold text-sm md:text-base">R$ {product.price}</span>
            </div>
        </div>
    )
}