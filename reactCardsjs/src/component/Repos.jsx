import {useState,useEffect} from 'react';
import './Repos.css';

function Repos() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/maykbrito/repos')
            .then(req => req.json())
            .then(res => console.log(setRepos(res)))
    },[1])

    return (
        <>
            <section className="container-repo">
                {repos.map((item) =>  
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h4>{item.html_url}</h4>
                    </div>
                )}
            </section>
        </>
    )
}

export default Repos;