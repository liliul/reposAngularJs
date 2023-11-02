import { createEffect, createStore } from 'solid-js';

export default function Effect2() {
	const [nome, setNome] = createStore({
		nome: {
			primeiro: "Naruto",
			segundo: "Hyhuga"
		}
	})
	console.log('nome', nome)
	
	function updateName() {
		setNome("nome", "segundo", "Uzumaki")
	}

	return (
		<>
			<div className="props">
				<button onClick={updateName}>Update Name</button>
			</div>
		</>
	)
}