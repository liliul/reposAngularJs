"use client"

import {useState,useEffect} from 'react'
import Link from 'next/link'

type ApiGithubType = {
    id: number,
    html_url: string,
    description: string
}
export default function ApiGithub() {

    const [api, setApi] = useState<ApiGithubType[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/diego3g/repos')
        .then((res) => res.json())
        .then((data) => console.log(setApi(data)))
    },[1])
    return (
        <>
        <h1 className='text-center text-bold text-xl mt-2'>
            <Link href='/'>Home</Link>
        </h1>
        {api.map((items) =>
            <section key={items.id} className='w-full h-auto flex justify-center'>
                <div className='w-[400px] border border-gray-100 m-3 p-3'>
                    <h1>{items.html_url}</h1>
                    <p>{items.description}</p>
                </div>
            </section>
        )}
        </>
    )
}
