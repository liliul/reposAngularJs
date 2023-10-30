import { createEffect, createSignal, createResource } from 'solid-js';
import { MetaProvider, Title } from '@solidjs/meta';


function UserApi() {
	// const [user, setUser] = createSignal({});
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
	console.log('data', data)

	return (
		<>
			<MetaProvider>
                
                  <Title>FetchUser</Title>
                  
            </MetaProvider>

			<div class="props">
				<h1>{user.name}</h1>
				<br />
				<b>{user.bio}</b>
				<br />
				<p>{user.company}</p>
			</div>			
		</>
	)
}

export default UserApi;

function ApiGithub() {
	fetch('https://api.github.com/users/maykbrito')
	.then((req) => req.json())
	.then((res) => {
		console.log(res)
		setUser(res)
	})
	.catch((error) => console.error(error))
}