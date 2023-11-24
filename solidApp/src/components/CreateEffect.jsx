import { createEffect, createSignal } from "solid-js";
import { css } from "solid-styled-components";


// solid-styled-components Style Objetc
const h3style = css({
    color: "blue",
    fontSize: 30 + "px"

});

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
            <h3 class={h3style}>CreateEffect SolidJS</h3>
        </>
    )
}
