import { useEffect, useState } from "react";
import CategoryTab from "./components/CategoryTab";
import PaginationTab from "./components/PaginationTab";
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

function PaginationSection() {
  return (
    <div className="self-start mt-4">
      <PaginationTab isFocus={true}>1</PaginationTab>
      <PaginationTab isFocus={false}>2</PaginationTab>
      <PaginationTab isFocus={false}>3</PaginationTab>
      <PaginationTab isFocus={false}>4</PaginationTab>
      <PaginationTab isFocus={false}>{'<'}</PaginationTab>
      <PaginationTab isFocus={false}>{'>'}</PaginationTab>
    </div>
  )
}

const getData = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to get Data')
  }
  return res.json()
}

export default async function Home() {
  const products: Product[] = await getData()

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col items-center md:justify-between">
      <CategorySection/>
      <div className="w-full h-2/4 md:h-3/4 grid gap-4 grid-cols-2 md:grid-cols-4 overflow-y-scroll">
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      <PaginationSection/>
    </div>
  );
}
