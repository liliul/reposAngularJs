import Link from 'next/link'
import Head from 'next/head'

export default function About() {
    return (
        <>
            <Head>
                <title>About page</title>
            </Head>
            <h1>About</h1>
            <Link href="/">Page Inicial</Link>
        </>
    )
}
