import { useState } from "react"

export function useHookCounters() {
    const [contar, setContar] = useState(0)

    function mais() {
        setContar((prev) => prev +  1)
    }
    function menos() {
        setContar((prev) => prev -  1)
    }
    function limpar() {
        setContar(0)
    }
    return {
        contar,
        mais,
        menos,
        limpar
    }
}