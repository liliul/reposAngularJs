import { useState } from 'react';

function Card() {
	const [apiGithub, setApiGithub] = useState(0);

	return (

		<>
			<section className="card">

				<div className="avatar">avatar</div>

				<h2 className="name">name</h2>

				<article className="infos">
					<div className="group-infos">
						<h4>Company: <span></span></h4>
						<h4>Blog: <span></span></h4>
						<h4>Location: <span></span></h4>
					</div>

					<div className="bio">bio</div>				
				</article>

				<footer className="footer">
					<a href="" className="link-repo">link-repo</a>
				</footer>
			</section>
		</>
	)
}

export default Card;