import Category from "./components/Category/Category";
import Pagination from "./components/Pagination/Pagination";
import ProductCard from "./components/Product/ProductCard";
import { Product } from "./types/Product";

const getData = async (limit: number, category?: string) => {
  let endPoint = 'https://fakestoreapi.com/products'
  if (category) {
    endPoint += `/category/${category}`
  }
  console.log(endPoint)
  const res = await fetch(endPoint+`?limit=${String(limit)}`)
  if (!res.ok) {
    throw new Error('Failed to get Data')
  }
  return res.json()
}

interface HomeProps {
  searchParams?: {page?: string, limit?: string, category?: string};
}

export default async function Home({searchParams}: HomeProps) {
  const page = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 10 //TODO: Change to 10
  const category = searchParams?.category || undefined

  const products: Product[] = await getData(limit, category)

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col items-center md:justify-between">
      <Category/>
      <div className="w-full h-2/4 md:h-3/4 grid gap-4 grid-cols-2 md:grid-cols-4 overflow-y-scroll">
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      <Pagination limit={limit} page={page} total={10}/> {/* HARD CODED  */}
    </div>
  );
}
