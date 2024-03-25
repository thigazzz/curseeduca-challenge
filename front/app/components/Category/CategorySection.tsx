'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CategoryTab from "./CategoryTab";
import { Category } from "@/app/types/Category";

interface CategoryProps {
    categoriesProps: {id: number, name: string}[]
}


export default function CategorySection({categoriesProps}: CategoryProps) {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const formatCategoriesProps = (): Category[] => {
        return categoriesProps.map(category => ({title: category.name.charAt(0).toUpperCase() + category.name.slice(1), to: category.name, isFocus: false}))
    }

    const [categories, setCategories] = useState<Category[]>([
        {to: '', title: 'Todos os Produtos', isFocus: true},
        ...formatCategoriesProps()
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