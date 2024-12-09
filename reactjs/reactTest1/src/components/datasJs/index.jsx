import { useState } from 'react'
import { format } from 'date-fns';

const data = {
    user: {
        createdAt: "2024-12-11T14:00:00.000z"
    },
    freteGratis: {
        datetime: "2024-12-15T16:00:00.000z",
        timezone: "Europe/London"
    }
}

export function DatasComDateFns() {
    const [userTimezone, setUserTimezone] = useState("Europe/London")

    const createdAtDate = new Date(data.user.createdAt);
    const formattedCreatedAt = format(createdAtDate, 'dd/MM/yyyy HH:mm:ss');
    return (
        <>
            <h1>Datas com Date-fns</h1>

            <button onClick={() => setUserTimezone("America/Los_Angeles")}>
                Data de Los Angeles
            </button>
            
            <button onClick={() => setUserTimezone("America/Sao_Paulo")}>
                Data de São paulo
            </button>

            <br />

            <p>{formattedCreatedAt}</p>
        </>
    )
}