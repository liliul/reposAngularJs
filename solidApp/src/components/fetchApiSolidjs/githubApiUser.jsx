import { createResource, Show } from 'solid-js';
import { MetaProvider, Title } from '@solidjs/meta';


function UserApi() {
	const [data] = createResource(ApiGithub)
	
	return (
		<>
			<MetaProvider>
                
                  <Title>GithubApiUser</Title>
                  
            </MetaProvider>

			<Show when={data()} fallback={<p>...GithubApiUser</p>}>
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

async function ApiGithub() {
	const res = await fetch('https://api.github.com/users/maykbrito')
	return res.json();
}