import Category from "./components/Category/CategorySection";
import Pagination from "./components/Pagination/Pagination";
import ProductCard from "./components/Product/ProductCard";
import { getCategories, getProducts } from "./lib/api";
import { Product } from "./types/Product";

interface HomeProps {
  searchParams?: {page?: string, limit?: string, category?: string};
}

export default async function Home({searchParams}: HomeProps) {
   const page = Number(searchParams?.page) || 1
   const limit = Number(searchParams?.limit) || 4 // Se setar 10, a aplicação quebra TODO: se der tempo ver o por que
   const category = searchParams?.category || undefined

  const {products, count}: {products: Product[], count: number} = await getProducts(page, limit, category)
  const categories = await getCategories()

  console.log(categories)

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col items-center md:justify-between">
      <Category categoriesProps={categories}/>
      <div className="w-full h-2/4 md:h-3/4 grid gap-4 grid-cols-2 md:grid-cols-4 overflow-y-scroll">
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      <Pagination limit={limit} page={page} total={count}/>
    </div>
  );
}
