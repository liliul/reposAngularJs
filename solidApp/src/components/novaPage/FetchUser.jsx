import { createEffect, createSignal, createResource, Show, For } from 'solid-js';
import { MetaProvider, Title } from '@solidjs/meta';


function UserApi() {
	// const [user, setUser] = createSignal();
	// console.log(user)
	// createEffect(() => {
	// 	fetch('https://api.github.com/users/maykbrito')
	// 	.then((req) => req.json())
	// 	.then((res) => {
	// 		console.log(res)
	// 		setUser(res)
	// 	})
	// 	.catch((error) => console.error(error))
	// })

	const [data] = createResource(ApiGithub)
	// console.log('data', data())

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

async function ApiGithub() {
	const res = await fetch('https://api.github.com/users/maykbrito/repos')
	return res.json();
}