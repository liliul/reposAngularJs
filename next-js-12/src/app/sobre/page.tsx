import Link from 'next/link'
import Image from 'next/image'

export default function Sobre() {
    return (
        <>
            <h1 className='font-bold text-xl text-center'>Sobre o framework next js</h1>
            <br />

            <Link href="/">Page Home =></Link>
            <br />

            <div className='w-full h-[400px] flex justify-center bg-gray-400'>
                <Image 
                    src="/next.svg"
                    width={350}
                    height={250}
                    alt="Next js"
                />
            </div>
        </>
    )
}