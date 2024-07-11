import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
    id: string
    name: string | null
    email: string
    is_confirmed: boolean
}

export function Guests() {
    const { tripId } = useParams()
    const [participant, setParticipant] = useState<Participant[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/participants`).then(response => setParticipant(response.data.participant))
    }, [tripId])

    return (
        <>
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Convidados</h2>

                <div className="space-y-5">
                    {participant.map((participant, index) => {
                        return (
                            <div key={participant.id} className="flex items-center justify-between">
                                <div className="space-y-1 5">
                                    <span className="block font-medium text-zinc-100">
                                        {participant.name ?? `Convidado ${index}`}
                                    </span>
                                    <span className="block text-xs truncate text-zinc-400">
                                        {participant.email}
                                    </span>
                                </div>

                                {participant.is_confirmed ? (
                                    <CheckCircle2 className="text-green-400 size-5 shrink-0" />
                                ) : (
                                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                                )}
                            </div>
                        )
                    })}
                </div>

                <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                    <UserCog className="size-5" />
                    Cadastrar novo link
                </button>
            </div>
        </>
    )
}