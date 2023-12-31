import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Card.css';
import LoadCard from './loading/LoadCard';
import LinksButtons from './linksButton/index';

function Card() {
	const [apiGithub, setApiGithub] = useState([]);
	const [loadCard, setLoadCard] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			fetch('https://api.github.com/users/maykbrito')
			.then(response => response.json())
			.then(data => {
				console.log(setApiGithub(data))
				setLoadCard(true)
			})
			.catch(error => console.error(error))
		}, 2000)	
	},[])

	return (

		<>
			<LinksButtons />
			<section className="card">
			{!loadCard && <LoadCard />}
				<div className="avatar">
					<img className="img-avatar" src={apiGithub.avatar_url} alt="Avatar" />
				</div>

				<h2 className="name">{apiGithub.name}</h2>

				<article className="infos">
					<div className="group-infos">
						<h4>Company: <span>{apiGithub.company}</span></h4>
						<h4>Blog: <span>{apiGithub.blog}</span></h4>
						<h4>Location: <span>{apiGithub.location}</span></h4>
					</div>

					<div className="bio">
						<h4>Bio:</h4>
						<p>{apiGithub.bio}</p>
					</div>

					<div className="n">
						<p className="p-repos">repos: {apiGithub.public_repos}</p>
						<p className="g-repos">gists: {apiGithub.public_gists}</p>
					</div>				
				</article>

				<footer className="footer">
					<button className="home">
						<Link to="/repos">link-repos</Link>
					</button>
				</footer>
			</section>
		</>
	)
}

export default Card;
