"use client"

import {useState,useEffect} from 'react'
import Link from 'next/link'

export default function ApiGithub() {

    const [api, setApi] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/diego3g/repos')
        .then((res) => res.json())
        .then((data) => console.log(setApi(data)))
    },[1])
    return (
        <>
        {api.map((items) =>
            <section key={items.id}>
                <div>
                    <h1>{items.html_url}</h1>
                    <p>{items.description}</p>
                </div>
            </section>
        )}
        </>
    )
}
