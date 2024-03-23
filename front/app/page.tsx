import CategoryTab from "./components/CategoryTab";
import Pagination from "./components/Pagination/Pagination";
import ProductCard from "./components/ProductCard";
import { Product } from "./types/Product";

function CategorySection() {
  return (
    <div className="w-full flex items-center mb-4">
      <CategoryTab isFocus={true}>Todos os produtos</CategoryTab>
      <CategoryTab isFocus={false}>Camisa</CategoryTab>
      <CategoryTab isFocus={false}>Canecas</CategoryTab>
    </div>
  )
}



const getData = async (limit: number) => {
  
  const res = await fetch(`https://fakestoreapi.com/products?limit=${String(limit)}`)
  if (!res.ok) {
    throw new Error('Failed to get Data')
  }
  return res.json()
}

interface HomeProps {
  searchParams?: {page?: string, limit?: string};
}

export default async function Home({searchParams}: HomeProps) {
  const page = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 2 //TODO: Change to 10
  const products: Product[] = await getData(limit)

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col items-center md:justify-between">
      <CategorySection/>
      <div className="w-full h-2/4 md:h-3/4 grid gap-4 grid-cols-2 md:grid-cols-4 overflow-y-scroll">
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      <Pagination limit={limit} page={page} total={10}/> {/* HARD CODED  */}
    </div>
  );
}
