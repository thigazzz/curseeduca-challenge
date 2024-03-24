'use client'

import { usePathname, useSearchParams } from "next/navigation";
import CategoryTab from "./CategoryTab";
import Link from "next/link";
import { useState } from "react";

interface Category {
    to: string;
    title: string;
    isFocus: boolean
}

export default function Category() {
    const pathName = usePathname()
    const searchParams = useSearchParams()

    const [categories, setCategories] = useState<Category[]>([
        {to: '', title: 'Todos os Produtos', isFocus: true},
        {to: "men's clothing", title: 'Homem', isFocus: false},
        {to: "electronics", title: 'Eletronicos', isFocus: false},
    ])

    const makeURL = (category: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('category', category)
        const url = `${pathName}?${params.toString()}`
        return url
    }
    const clearUrl = () => {
        const params = new URLSearchParams(searchParams)
        params.delete('category')
        const url = `${pathName}?${params.toString()}`
        return url
    }

    return (
      <div className="w-full flex items-center mb-4">
        {categories.map(category => (
            <CategoryTab to={category.to !== "" ? makeURL(category.to) : clearUrl()} isFocus={category.isFocus}>{category.title}</CategoryTab>
        ))}
      </div>
    )
  }