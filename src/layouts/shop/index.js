import StructureHeader from "@/components/structure/header/index.js";
import StructureAside from "@/components/structure/aside/index.js"

export default function ShopLayout({children}){
  return(
      <section className="px-2 relative min-h-screen grid" style={{gridTemplateColumns:"20% 80%"}}>
          <StructureAside/>
          <main className="w-full h-full">
              <StructureHeader/>
              <div>
                  {children}
              </div>
          </main>
      </section>
  );
}
