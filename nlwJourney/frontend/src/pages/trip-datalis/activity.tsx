import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Activity {
    date: string
    activities: {
        id: string
        title: string
        occurs_at: string
    }[]
}

export function Activity() {
    const { tripId } = useParams()
    const [activities, setActivities] = useState<Activity[]>([])

    useEffect(() => {
        api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities))
    }, [tripId])

    return (
        <>
            <div className="space-y-8">
                {activities.map(category => {
                    return (
                        <div key={category.date} className="spacey-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-500">
                                    Dia {format(category.date, 'd')}</span>
                                <span className="text-xs text-zinc-500">
                                    {format(category.date, 'EEEE', { locale: ptBR })}
                                </span>
                            </div>
                            {category.activities.length > 0 ? (
                                <div>
                                    {category.activities.map(activity => {
                                        return (

                                            <div key={activity.id} className="space-y-2.5">
                                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                                                    <CircleCheck className="size-5 text-lime-300" />
                                                    <span className="text-zinc-100">{activity.title}</span>
                                                    <span className="text-zinc-400 text-sm ml-aut">
                                                        {format(activity.occurs_at, 'HH:mm')}h
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className="text-zinc-500 text-sm">Nenhum atividade cadastrada neste data.</p>
                            )}
                        </div>
                    )
                })}

                {/* 
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
                </div> */}

            </div>
        </>
    )
}