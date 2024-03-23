import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./types/Product";

type CartState = {
    cart: Product[];
    addToCart: (product: Product) => void
    isOpen: boolean;
    toogleCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            addToCart: item => {
                set((state: any) => {
                    const product = state.cart.find((p:Product) => p.id === item.id)

                    if (product) {
                        const updatedCart = state.cart.map((p:Product) => {
                            if (p.id === product.id) {
                                return {...p, quantity: p.quantity ? p.quantity + 1 : 1}
                            }
                            return {...p}
                        })
                        return {cart: updatedCart}
                    } else {
                        return {cart: [...state.cart, {...item, quantity: 1}]}
                    }
                })
            },
            isOpen: false,
            toogleCart: () => set(state => ({isOpen: !state.isOpen})),
        }),
        {name: 'cart-storage'}
    )
)