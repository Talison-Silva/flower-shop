export default function StrutureHeader(){
    return(
        <header className="px-10 w-full h-16 flex justify-between items-center">
            <nav>
                <ul className="flex gap-5">
                    <li  
                        className="
                            p-3 rounded-xl
                            bg-[#e3ccff]                   
                        "
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="w-6 h-6 text-[#831cff]"
                        >
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round" 
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 
                                1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504
                                1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125
                                1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621
                                0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" 
                            />
                        </svg>

                    </li>
                    <li
                        className="
                            p-3 rounded-xl
                            bg-[#e3ccff]
                        "
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor" 
                            className="w-6 h-6 text-[#831cff]"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052
                                0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6
                                18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966
                                0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987
                                8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            />            
                        </svg>
                    </li>
                    <li
                        className="
                            p-3 rounded-xl
                            bg-[#e3ccff]
                        "
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2} 
                            stroke="currentColor"
                            className="w-6 h-6 text-[#831cff]"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5
                                21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25
                                2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18
                                0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18
                                0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" 
                            />
                        </svg>
                    </li>
                </ul>
            </nav>
            <article className="min-w-min flex items-center gap-3">
                
                <span className="relative min-w-12 h-12 bg-[#ffccd9] rounded-xl flex">
                    <label for="pt" className="w-12 h-12 relative flex justify-center items-center">
                        <input type="radio" name="language" id="pt" className="absolute opacity-0"/>
                        <p className="font-madone font-extrabold uppercase text-[#ff3665] tracking-widest">pt</p>
                    </label>
                    <label for="in" className="w-12 h-12 relative flex justify-center items-center">
                        <input type="radio" name="language" id="in" className="absolute opacity-0"/>
                        <p className="font-madone font-extrabold uppercase text-[#ff3665] tracking-widest">in</p>
                    </label>
                </span>

                <span>
                    <div className="w-12 h-12 bg-[#ff3665] rounded-full"/>
                </span>

                <span className="w-12 h-12 rounded-xl flex justify-center items-center bg-[#ffccd9]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#ff3665]"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
</svg>

                </span>

                <span className="w-12 h-12 rounded-xl flex justify-center items-center bg-[#ffccd9]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#ff3665]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                </span>
            </article>
        </header>
    );
}
