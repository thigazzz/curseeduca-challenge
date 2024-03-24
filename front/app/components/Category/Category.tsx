'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryTab from "./CategoryTab";
import { useEffect, useState } from "react";

interface Category {
    to: string;
    title: string;
    isFocus: boolean
}

export default function Category() {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const [categories, setCategories] = useState<Category[]>([
        {to: '', title: 'Todos os Produtos', isFocus: true},
        {to: "copos", title: 'copos', isFocus: false},
        {to: "camisas", title: 'camisas', isFocus: false},
    ])

    useEffect(() => {
        const param = searchParams.get('category')

        if (param) {
            handleTabFocus(param)
        }
    }, [])

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

    const handleClick = (title: string, to: string) => {
        const url = to !== "" ? makeURL(to) : clearUrl()
        handleTabFocus(title)
        router.replace(url)
    }

    const handleTabFocus = (title: string) => {
        const copy_categories = categories.map(category => {
            if (category.title === title) return ({...category, isFocus: true})
            return {...category, isFocus: false}
        })
        setCategories(copy_categories)
    }

    return (
      <div className="w-full flex items-center mb-4">
        {categories.map(category => (
            <CategoryTab handleClick={() => handleClick(category.title, category.to)} isFocus={category.isFocus} key={category.title}>{category.title}</CategoryTab>
        ))}
      </div>
    )
  }