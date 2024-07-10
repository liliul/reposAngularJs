import { CircleCheck } from "lucide-react";

export function Activity() {
    return (
        <>
            <div className="space-y-8">
                <div className="spacey-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-500">Dia 18</span>
                        <span className="text-xs text-zinc-500">Domingo</span>
                    </div>
                    <p className="text-zinc-500 text-sm">Nenhum atividade cadastrada neste data.</p>
                </div>

                <div className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-500">Dia 19</span>
                        <span className="text-xs text-zinc-500">Segunda</span>
                    </div>

                    <div className="space-y-2.5">
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">Academia em grupo</span>
                            <span className="text-zinc-400 text-sm ml-aut">00:00h</span>
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">Academia em grupo</span>
                            <span className="text-zinc-400 text-sm ml-aut">00:00h</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}