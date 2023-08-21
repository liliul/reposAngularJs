"use client"

import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="w-full h-[400px] flex justify-center items-center pt-10">
            <button onClick={() => setCounter(counter + 1)}
            className="w-[100px] h-[44px] bg-gray-600 text-bold border-e-2 border-gray-900"
            >mais</button>

            <span className="mr-5 ml-5">{counter}</span>

            <button onClick={() => setCounter(counter - 1)}
            className="w-[100px] h-[44px] bg-gray-600 text-bold border-e-2 border-gray-900"
            >Menos</button>
        </div>
    )
}