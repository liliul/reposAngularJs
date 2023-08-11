import {useState,useEffect} from 'react';
import './Repos.css';

function Repos() {
    const [repos, setRepos] = useState();

    useEffect(async () => {
        const req = await fetch('https://api.github.com/users/maykbrito/repos');
        setRepos(req)
    })

    return (
        <>
            <section className="container-repo">
                {repos}
            </section>
        </>
    )
}

export default Repos;