'use client'

import AddToCart from "../components/Product/AddToCart"
import { useCartStore } from "../store";
import { Product } from "../types/Product"

interface CartProductCardProps {
    product: Product
}

export default function CartProductCard({product}: CartProductCardProps) {
    const {removeOfCart} = useCartStore()
    return (
        <div className="w-full flex mb-2 p-2 bg-slate-200 rounded">
            <div className="w-1/2">
                <img src={product.image} alt={product.description} className="w-40 h-40"/>
            </div>
            <div className="w-1/2">
                <div className="w-full flex justify-between mb-2">
                    <span className="text-md md:text-base">{product.title}</span>
                    <div className="flex">
                        <AddToCart product={product}/>
                        <button onClick={() => removeOfCart(product)} className="text-md w-6 h-6 rounded bg-slate-800 text-slate-200 text-center">-</button>
                    </div>
                </div>
                <p className="text-xs mb-1">{product.description}</p>
                <div className="flex  justify-between ">
                    <span className="font-bold text-sm md:text-base">R$ {product.price}</span>
                    <span>Quantidade: {product.quantity}</span>
                </div>
            </div>
        </div>
    )
}