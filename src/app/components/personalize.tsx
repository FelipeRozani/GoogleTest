import { Edit2 } from 'lucide-react'

export default function Personalize() {
    return (
        <div>
        <div className="flex relative bg-zinc-900 w-48 h-9 rounded-full ml-auto mr-4 mt-12 cursor-pointer hover:bg-zinc-800">
          <i className="text-blue-300 text-xs mt-1 ml-3">
            <Edit2 />
          </i>
          <p className="absolute text-sm text-center ml-11 mt-2 text-blue-300">Personalize o Chrome</p>
        </div>
      </div>
    )
}