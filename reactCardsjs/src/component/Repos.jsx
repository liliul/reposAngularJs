import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Repos.css';
import Loading from './loading/Index';
import { apiRepos } from '../api';

function Repos() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        apiRepos.get("").then((response) => {
            setRepos(response.data)
            setLoading(true)
        })
    }, [])

    return (
        <>
            <button className="home">
                <Link to="/">Inicio</Link>
            </button>

            <section className="container-repo">
                <button className='b-link_github'>
                    <a href="https://github.com/maykbrito" target='_blank'>Link Github</a>
                </button>
                
                {!loading && <Loading />}
                
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
