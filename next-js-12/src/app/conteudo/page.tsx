import Link from 'next/link'
import Head from 'next/head'

export default function Conteudo() {
    return (
        <>
            <Head>
                <title>conteudo</title>
            </Head>
            
            <Link href='/' className='font-bold'>Home =></Link>
            <section className="w-full h-full flex justify-center">
                <article className="w-[959px]">
                    <h1 className="text-xl font-bold mb-10 text-center">Iniciando no next js</h1>

                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, aut, iure</p>
                    <p className="mb-5">ex molestiae dolorem cumque voluptates ipsum eveniet necessitatibus nostrum rem.</p>
                    <p>Sed voluptate corporis repellat commodi facere maiores, odit eos!</p>
                </article>
            </section>
        </>
    )
}