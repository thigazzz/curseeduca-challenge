import { unstable_noStore as noStore } from 'next/cache';

export const getProducts = async (page: number, limit: number, category?: string) => {
    noStore();
    let endPoint = 'http://localhost:3001/products'
    if (category) {
      endPoint += `/category/${category}`
    }
    const res = await fetch(endPoint+`?skip=${String(page - 1)}&limit=${String(limit)}`)
    if (!res.ok) {
        throw new Error('Failed to get Data')
    }

    return res.json()
}

export const getCategories = async () => {
  noStore();
  const endPoint = 'http://localhost:3001/categories'
  const res = await fetch(endPoint)

  if (!res.ok) {
      throw new Error('Failed to get Data')
  }

  return res.json()
}