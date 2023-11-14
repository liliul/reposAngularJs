import { createEffect, createSignal } from "solid-js";

/**
 * @function 
 * @returns contagem ate 5 no console do navegador
 * 
 * @description usando setInterval e clearInterval para contar ate 5 no console
 */

export default function TestandoCreateEffect() {
    const [count, setCount] = createSignal(0);

    const time = setInterval(() => setCount(count() + 1), 2000);

    createEffect(() => {
        console.log(count());

        if (count() === 5) {
            clearInterval(time);
        }

    })

    return (
        <>
            <h3>CreateEffect SolidJS</h3>
        </>
    )
}