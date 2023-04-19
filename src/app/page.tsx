import Image from "next/image"
import { Search, Mic, Edit2, LayoutGrid } from 'lucide-react'
import Google from "./components/google"
import Icones from "./components/icones"
import Personalize from "./components/personalize"

export default function Home() {
  return (
    <section className="h-screen box-border">
      <div className="flex gap-4 mt-5">
        <p className="ml-auto text-sm cursor-pointer hover:underline">Gmail</p>
        <p className="text-sm cursor-pointer hover:underline">Imagens</p>
        <i className="cursor-pointer">
          <LayoutGrid />
        </i>
        <Image src="/patoAka.jpg" width={60} height={60} alt="foto perfil" className="w-8 h-8 rounded-full cursor-pointer mr-4" />
      </div>
      <div className="mt-40">
        <h1 className="text-zinc-50 text-center text-8xl mt-3 mb-10">Google</h1>
      </div>
        <Google />
        <Icones />
        <Personalize />
    </section>
  )
}
