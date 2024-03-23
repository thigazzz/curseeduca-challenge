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
      <div className="w-full flex justify-between">
        <p>todas</p>
        <p>Camisa</p>
        <p>Canecas</p>
      </div>
      <div className="w-full h-2/4 md:h-3/4 grid gap-4 grid-cols-2 md:grid-cols-4">
        {products.map(product => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      <div>
        paginação
      </div>
    </div>
  );
}
