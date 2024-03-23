import CategoryTab from "./components/CategoryTab";
import PaginationTab from "./components/PaginationTab";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const products = [
    {id: 1,title: 'Camisa', description: 'Camisa boa', src: './assets/camisa.jpeg', price: 100, link: ''},
    {id: 2,title: 'Camisa', description: 'Camisa boa', src: './assets/camisa.jpeg', price: 100, link: ''},
    {id: 3,title: 'Camisa', description: 'Camisa boa', src: './assets/camisa.jpeg', price: 100, link: ''},
    {id: 4,title: 'Camisa', description: 'Camisa boa', src: './assets/camisa.jpeg', price: 100, link: ''},
    {id: 5,title: 'Camisa', description: 'Camisa boa', src: './assets/camisa.jpeg', price: 100, link: ''},
  ]

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col items-center md:justify-between">
      <div className="w-full flex items-center mb-4">
        <CategoryTab isFocus={true}>Todos os produtos</CategoryTab>
        <CategoryTab isFocus={false}>Camisa</CategoryTab>
        <CategoryTab isFocus={false}>Canecas</CategoryTab>
      </div>
      <div className="w-full h-2/4 md:h-3/4 grid gap-4 grid-cols-2 md:grid-cols-4">
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      <div className="self-start mt-4">
        <PaginationTab isFocus={true}>1</PaginationTab>
        <PaginationTab isFocus={false}>2</PaginationTab>
        <PaginationTab isFocus={false}>3</PaginationTab>
        <PaginationTab isFocus={false}>4</PaginationTab>
        <PaginationTab isFocus={false}>{'<'}</PaginationTab>
        <PaginationTab isFocus={false}>{'>'}</PaginationTab>
      </div>
    </div>
  );
}
