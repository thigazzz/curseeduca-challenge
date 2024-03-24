'use client'

import { useRouter } from "next/navigation"
import CartProductCard from "./CartProductCard";
import { useCartStore } from "../store";
import { Product } from "../types/Product";

export default function Cart() {
    const {cart, toogleCart, clearCart} = useCartStore()
    const router = useRouter()

    
    const sumTotal = () => {
        const sum = cart.reduce((total: number, product: Product) => {
            return total + (product.price * product.quantity) // TODO: Fix 2 digits price
        }, 0)
        return sum.toFixed(1)
    }

    const handleBackToHome = () => {
        toogleCart()
        router.replace('/')
    }

    const handleBuyProduct = () => {
        alert(`Sua compra no valor de R$ ${sumTotal()} foi feita com sucesso`)
        clearCart()
        handleBackToHome()
    }

    return (
        <div className="w-full h-full flex flex-col sm:flex-row">
            <div className="h-2/4 sm:h-full w-full sm:w-3/4 p-2 mb-4 overflow-y-scroll">
                <button onClick={handleBackToHome} className="mb-2 w-8 h-8 bg-slate-800 text-slate-200 rounded-full">{'<'}</button>
                {cart.map(product => <CartProductCard product={product} key={product.id}/>)}
            </div>
            <div className="w-full sm:w-1/4 sm:h-40 bg-slate-200 p-2 flex flex-col">
                <div className="w-full flex justify-between">
                    <span className="text-md font-bold mb-6">RESUMO DO PEDIDO</span>
                    <span className="text-sm">Total: <strong>R$ {sumTotal()}</strong></span>
                </div>
                <button onClick={handleBuyProduct} className="w-full p-2 bg-slate-800 text-slate-200 rounded">Finalizar compra</button>
            </div>
        </div>
    )
}