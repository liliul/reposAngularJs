import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Content = () => {
    return (
        <>
            <Head>
                <title>Content Page</title>
            </Head>

            <h1>Content</h1>
            <Link href="/">Page Inicial</Link>

            <div className="w-[300px] h-[200px] bg-white">
                <Image
                    src="/next.svg"
                    width={200}
                    height={200}
                    alt="Image nextJS"
                />
            </div>
        </>
    )
}

export default Content;
