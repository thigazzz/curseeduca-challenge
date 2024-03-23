'use client'

import { useRouter } from "next/navigation"
import { useCartStore } from "../store"

export default function ShopCart() {
    const router = useRouter()
    const toogleCartPage = useCartStore(state => state.toogleCart)
    const isCartPageOpen = useCartStore(state => state.isOpen)
    const amountOfProducts = 2

    const handleOpenCartPage = () => {
        toogleCartPage()
        if (!isCartPageOpen) {
            router.replace('/cart')
        } else {
            router.replace('/')
        }
    }

    return (
        <div onClick={handleOpenCartPage} className="cursor-pointer" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M15.5 10.5h2l3.59-6.83c.16-.31.03-.69-.29-.87-.31-.16-.69-.03-.87.29L16.4 9.07 15 5.01 3.92 3.64c-.32-.08-.67.09-.82.4-.15.31-.06.68.25.85L7.5 8.5h8c.55 0 1 .45 1 1s-.45 1-1 1H9.27l-1.46 2.72c-.16.31-.03.69.29.87.31.16.69.03.87-.29L11 11.93l1.4 3.89c.1.28.37.47.67.47.14 0 .28-.04.4-.12.36-.19.51-.65.32-1.01l-1.41-3.93h2.58c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5z"/>
                <circle cx="9" cy="19" r="2"/>
                <circle cx="15" cy="19" r="2"/>
            </svg>
            {amountOfProducts && (
                <span className="p-1 bg-slate-800 rounded-full text-slate-200 text-xs">{amountOfProducts}</span>
            )}
        </div>
    )
}