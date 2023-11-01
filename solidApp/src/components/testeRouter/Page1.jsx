import { createSignal, For } from 'solid-js';
import { MetaProvider, Title, Link, Meta } from '@solidjs/meta';

const dbJson = [
    {name: "Naruto",lastName: "Uzumaki"},
    {name: "Itachi",lastName: "Uchiha"},
    {name: "Kakashi",lastName: "Hatake"},
    {name: "Sasuke",lastName: "Uchiha"},
];

function Page1() {
    const [listaNomes, setListaNomes] = createSignal("");
    console.log(setListaNomes(dbJson))
    return (
        <>
            <MetaProvider>
                
                  <Title>Testando router com solid-meta</Title>
                  <Link rel="canonical" href="http://solidjs.com/" />
                  <Meta name="example" content="whatever" />
                
            </MetaProvider>

            <h1>Testando Router no Solid JS</h1>

            <ul style="list-style: none;" className="props">
                <For each={listaNomes()}>
                    {(list) => (
                        <li>
                            {list.name}
                            <span style={{ "font-style": "italic" }}> ({list.lastName})</span>
                        </li>
                    )}
                </For>
            </ul>
        </>
    )
}

export default Page1;