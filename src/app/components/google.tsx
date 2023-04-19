import { Search, Mic, Edit2, LayoutGrid } from 'lucide-react'

export default function Google() {
    return (  
      <div className="bg-zinc-50 max-w-xl h-11 rounded-full justify-between flex mt-5 ml-auto mr-auto">
        <i className="text-sm text-zinc-500 mt-3 ml-3 cursor-pointer">
          <Search />
        </i>
        <p className="text-zinc-800 text-sm mt-3">Pesquise no Google ou digite um URL</p>
        <i className="text-sm text-emerald-400 mt-3 mr-2 cursor-pointer">
          <Mic />
        </i>
      </div>
    )
}