import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Exit = () => {
    return (
        <>
            <Head>
                <title>Exit Page</title>
            </Head>

            <h1>Exit</h1>
            <Link href="/">Page Inicial</Link>

            <div className="w-[500px] h-[500px] bg-white">
                <Image
                    src="/next.svg"
                    width={400}
                    height={400}
                    alt="Image nextJS"
                />
            </div>
        </>
    )
}

export default Exit;
