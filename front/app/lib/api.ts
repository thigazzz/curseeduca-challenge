import { unstable_noStore as noStore } from 'next/cache';

export const getData = async (page: number, limit: number, category?: string) => {
    noStore();
    let endPoint = 'http://localhost:3001/products'
    if (category) {
      endPoint += `/category/${category}`
    }
    const res = await fetch(endPoint+`?skip=${String(page - 1)}&limit=${String(limit)}`)
    if (!res.ok) {
        throw new Error('Failed to get Data')
    }

    console.log(endPoint+`?skip=${String(page - 1)}&limit=${String(limit)}`)

    return res.json()
}
