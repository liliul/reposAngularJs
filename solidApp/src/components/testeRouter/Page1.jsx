import {createSignal} from 'solid-js';
import { MetaProvider, Title, Link, Meta } from '@solidjs/meta';

const dbJson = [
    {name: "Naruto",lastName: "Uzumaki"},
    {name: "Itachi",lastName: "Uchiha"},
    {name: "Kakashi",lastName: "Hatake"},
    {name: "Sasuke",lastName: "Uchiha"},
];

function Page1() {
    const [listaNomes, setListaNomes] = createSignal(dbJson);
    console.log(listaNomes())
    return (
        <>
            <MetaProvider>
                
                  <Title>Testando router com solid-meta</Title>
                  <Link rel="canonical" href="http://solidjs.com/" />
                  <Meta name="example" content="whatever" />
                
            </MetaProvider>

            <h1>Testando Router no Solid JS</h1>
        </>
    )
}

export default Page1;