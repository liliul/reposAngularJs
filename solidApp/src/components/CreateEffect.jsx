import { createEffect, createSignal } from "solid-js";

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