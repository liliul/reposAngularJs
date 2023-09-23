import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

export default function About() {
    const [about,setAbout] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/maykbrito')
        .then((response) => response.json())
        .then((api) => {
          setAbout(api)
        })
    })
    return (
        <>
            <section>
                <h1>Infos do github</h1>

                <p>login: <b>{about.login}</b></p>
                <p>id: <b>{about.id}</b></p>
                <p>company: <b>{about.company}</b></p>
                <p>blog: <b>{about.blog}</b></p>
                <p>twitter: <b>{about.twitter_username}</b></p>
            </section>
        </>
    )
}
