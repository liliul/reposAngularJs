import { createResource, Show } from 'solid-js';
import { MetaProvider, Title } from '@solidjs/meta';

import LoadingGithubUser from '../loadings/githubUser';

/**
 * @function
 * @returns html renderizado com infos da api github
 * */

function UserApi() {
	const [data] = createResource(ApiGithub)
	
	return (
		<>
			<MetaProvider>
                
                  <Title>GithubApiUser</Title>
                  
            </MetaProvider>

			<Show when={data()} fallback={<LoadingGithubUser />}>
				<div class="props">

					<header>
						<img src={data().avatar_url} alt="github" width='54px' height='54px' />

						<h3>{data().name}</h3>
					</header>
					
					<br />

					<section>
						<p>{data().company}</p>
						<p>{data().location}</p>
					</section>

				</div>
			</Show>
		</>
	)
}

export default UserApi;

/**
 * @function
 * @returns a api do github informações do usuario
 * */
async function ApiGithub() {
	const res = await fetch('https://api.github.com/users/maykbrito')
	return res.json();
}