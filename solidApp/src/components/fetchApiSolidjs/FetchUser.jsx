import { createResource, Show, For } from 'solid-js';
import { MetaProvider, Title } from '@solidjs/meta';

/**
 * @function
 * @returns componente em html com o dado name do github repos
 * */

function UserApi() {
	const [data] = createResource(ApiGithub)

	return (
		<>
			<MetaProvider>
                
                  <Title>FetchUser</Title>
                  
            </MetaProvider>

			<Show when={data()} fallback={<p>...Loading</p>}>
				<div class="props">
					<For each={data()}>
						{(dados) => (
							<h3>{dados.name}</h3>
						)}
					</For>
				</div>
			</Show>			
		</>
	)
}

export default UserApi;

/**
 * @function
 * @returns dados da api do github repositorios
 * */

async function ApiGithub() {
	const res = await fetch('https://api.github.com/users/maykbrito/repos')
	return res.json();
}