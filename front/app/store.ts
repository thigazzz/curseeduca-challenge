import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./types/Product";

type CartState = {
    cart: Product[];
    isOpen: boolean;
    toogleCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            cart: [],
            isOpen: false,
            toogleCart: () => set(state => ({isOpen: !state.isOpen})),
        }),
        {name: 'cart-storage'}
    )
)