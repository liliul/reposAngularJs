import { createSignal } from "solid-js";

function TestandoCreateSignal() {
    const [greeting, setGreeting] = createSignal("");

        
    return (
        <>
            <section onClick={() => setGreeting("CreateSignal")}>
                Click: {greeting}
            </section>
        </>
    )
}

export default TestandoCreateSignal;