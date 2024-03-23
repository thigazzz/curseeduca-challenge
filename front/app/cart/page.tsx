'use client'

import { useRouter } from "next/navigation"
import CartProductCard from "./CartProductCard";
import { useCartStore } from "../store";

export default function Cart() {
    const router = useRouter()
    const toogleCartPage = useCartStore(state => state.toogleCart)

    const handleBackToHome = () => {
        toogleCartPage()
        router.replace('/')
    }

    return (
        <div className="w-full h-full flex flex-col sm:flex-row">
            <div className="h-2/4 sm:h-full w-full sm:w-3/4 p-2 mb-4 overflow-y-scroll">
                <button onClick={handleBackToHome} className="mb-2 w-8 h-8 bg-slate-800 text-slate-200 rounded-full">{'<'}</button>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
                <CartProductCard/>
            </div>
            <div className="w-full sm:w-1/4 sm:h-40 bg-slate-200 p-2 flex flex-col">
                <div className="w-full flex justify-between">
                    <span className="text-md font-bold mb-6">RESUMO DO PEDIDO</span>
                    <span className="text-sm">Total: <strong>R$ 100,00</strong></span>
                </div>
                <button className="w-full p-2 bg-slate-800 text-slate-200 rounded">Finalizar compra</button>
            </div>
        </div>
    )
}