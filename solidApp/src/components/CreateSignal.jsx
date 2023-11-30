import { createSignal } from "solid-js";
import { TbClick } from 'solid-icons/tb';

/**
 * @function
 * @return event onClick que renderiza string com createSignal
 * */
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
