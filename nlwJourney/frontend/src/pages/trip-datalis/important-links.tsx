import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
    return (
        <>
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Links Importantes</h2>

                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1 5">
                            <span className="block font-medium text-zinc-100">Reservar do AirBnB</span>
                            <span className="block text-xs truncate text-zinc-400 hover:text-zinc-200">http://github.com/users/naruto/id="askdjaskdjaskdjasjdaksjddddddddddaksjdklasjdkasjdlkasdjka"</span>
                        </div>

                        <Link2 className="text-zinc-400 size-5 shrink-0" />
                    </div>
                </div>

                <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                    <Plus className="size-5" />
                    Cadastrar novo link
                </button>
            </div>
        </>
    )
}