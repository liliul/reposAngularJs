import { createEffect, createSignal } from 'solid-js';

function UserApi() {
	const [user, setUser] = createSignal([]);
	console.log(user)
	createEffect(() => {
		fetch('https://api.github.com/users/maykbrito')
		.then((req) => req.json())
		.then((res) => {
			console.log(res)
			setUser(res)
		})
		.catch((error) => console.error(error))
	})

	return (
		<>
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