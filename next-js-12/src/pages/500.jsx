import Link from 'next/link'

export default function Error500() {
    return (
        <>
            <div className='w-full h-full'>
                <button className='p-5 mt-20 bg-white text-black'>
                    <Link href='/'>Voltar para o inicio</Link>
                </button>

                <article className='w-full h-[200px] mt-20 bg-white'>
                    <h1 className='text-xl text-center text-violet-950'>Error <span className='text-black'>500</span></h1>
                </article>
            </div>
        </>
    )
}