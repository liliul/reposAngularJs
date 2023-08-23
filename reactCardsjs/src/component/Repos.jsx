import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Repos.css';

function Repos() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/maykbrito/repos')
            .then(req => req.json())
            .then(res => console.log(setRepos(res)))
            .catch(error => console.error(error))
    },[1])

    return (
        <>
            <button className="home">
                <Link to="/">Inicio</Link>
            </button>
            <section className="container-repo">
                <button className='b-link_github'>
                    <a href="https://github.com/maykbrito" target='_blank'>Link Github</a>
                </button>

                <div className='container-cards'>
                    {repos.map((item) =>  
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <h4>{item.html_url}</h4>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Repos;