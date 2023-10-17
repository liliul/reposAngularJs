import { MetaProvider, Title, Link, Meta } from '@solidjs/meta';

function Page1() {
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