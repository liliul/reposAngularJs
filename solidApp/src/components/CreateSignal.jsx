import { createSignal } from "solid-js";
import { TbClick } from 'solid-icons/tb';

function TestandoCreateSignal() {
    const [greeting, setGreeting] = createSignal("");

        
    return (
        <>
            <section onClick={() => setGreeting("CreateSignal")}>
               <TbClick /> Click: {greeting}
            </section>
        </>
    )
}

export default TestandoCreateSignal;
