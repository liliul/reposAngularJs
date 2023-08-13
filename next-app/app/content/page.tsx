import Link from 'next/link'
import Head from 'next/head'

const Content = () => {
    return (
        <>
            <Head>
                <title>Content Page</title>
            </Head>

            <h1>Content</h1>
            <Link href="/">Page Inicial</Link>
        </>
    )
}

export default Content;
