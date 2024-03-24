'use client'

import { useCartStore } from "@/app/store"
import { Product } from "@/app/types/Product"

interface AddToCartProps {
    product: Product
}

export default function AddToCart({product}: AddToCartProps) {
    const {addToCart} = useCartStore()

    return (
        <button onClick={() => addToCart(product)} className="text-md w-6 h-6 rounded bg-slate-800 text-slate-200 text-center mr-1">+</button>
    )
}