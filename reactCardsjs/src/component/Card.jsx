import { useState, useEffect } from 'react';
import './Card.css';

function Card() {
	const [apiGithub, setApiGithub] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/users/maykbrito')
			.then(response => response.json())
			.then(data => setApiGithub(data))
	})

	return (

		<>
			<section className="card">

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
					<a href={apiGithub.html_url} className="link-repo">link-github</a>
				</footer>
			</section>
		</>
	)
}

export default Card;
