export default function StructureAside(){
    return(
        <aside
            className="
                p-3 w-full h-full
                flex flex-col items-center
            "
        >
            <article className="select-none flex justify-center items-center gap-3">
                <img src="./flower_shop.png" width="110" height="110"/>
                <span className="font-madone text-5xl leading-10">
                    <p>flower</p>
                    <p>shop</p>
                </span>
            </article>

            <form className="relative mt-5 w-full h-12 flex items-center">
                <input className="w-full h-12 rounded-xl bg-[#bfdcff] outline-none p-3 font-madone text-black tracking-widest"/>
                <button className="absolute top-auto right-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 text-[#3892ff]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </button>
            </form>

            <div className="mt-6 p-4 w-full min-h-64 bg-[#bfdcff] text-[#3892ff] rounded-xl">
                <p className="font-madone font-bold text-xl tracking-widest opacity-70"># favoritos</p>
                <ul className="w-full min-h-12">
                </ul>
            </div>

            <div className="mt-6 p-4 w-full min-h-80 bg-[#bfdcff] text-[#3892ff] rounded-xl">
                <p className="font-madone font-bold text-xl tracking-widest opacity-70"># filtro</p>
                <div className="w-full min-h-12">
                </div>
            </div>
        </aside>
    );
}
