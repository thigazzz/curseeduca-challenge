import { Product } from "../../types/Product"
import AddToCart from "../Cart/AddToCart"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({product}: ProductCardProps) {
    return (
        <div className="bg-slate-200 p-2 rounded cursor-pointer">
            <img src={product.image} alt={product.description} className="w-40 h-40 object-cover rounded"/>
            <div className="flex flex-col">
              <span className="text-gray-500 mb-1 text-sm md:text-base ">{product.title}</span>
              <div className="flex justify-between">
                <span className="font-bold text-sm md:text-base">R$ {product.price}</span>
                <AddToCart product={product}/>
              </div>
            </div>
        </div>
    )
}