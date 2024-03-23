export default function CartProductCard() {
    return (
        <div className="w-full flex mb-2 p-2 bg-slate-200 rounded">
            <div className="w-1/2">
                A
            </div>
            <div className="w-1/2">
                <div className="w-full flex justify-between mb-2">
                    <span className="text-md md:text-base">Title</span>
                    <div className="flex">
                        <button className="text-md w-6 h-6 rounded bg-slate-800 text-slate-200 text-center mr-1">+</button>
                        <button className="text-md w-6 h-6 rounded bg-slate-800 text-slate-200 text-center">-</button>
                    </div>
                </div>
                <p className="text-xs mb-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur enim beatae, ratione vero earum commodi.</p>
                <span className="font-bold text-sm md:text-base">R$ 100,00</span>
            </div>
        </div>
    )
}