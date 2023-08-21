"use client"

import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="w-full h-[400px] flex justify-center pt-10">
            <button onClick={() => setCounter(counter + 1)}
            className="w-[44px] h-[44px] bg-gray-400 mr-5 border-e-2 border-gray-900"
            >mais</button>

            <span>{counter}</span>

            <button onClick={() => setCounter(counter - 1)}
            className="w-[44px] h-[44px] bg-gray-400 mr-5 border-e-2 border-gray-900"
            >Menos</button>
        </div>
    )
}