import { createEffect } from 'solid-js';
import { createStore } from "solid-js/store";

export default function Effect2() {
	const [nomeInfo, setNomeInfo] = createStore({
		nome: {
			primeiro: "Naruto",
			segundo: "Hyhuga"
		}
	})
	console.log('nome', nomeInfo)

	function updateName() {
		setNomeInfo("nome", "segundo", "Uzumaki")
	}

	createEffect(() => {
		console.log(nomeInfo.nome.segundo)
	})

	return (
		<>
			<div class="props">
				<button onClick={updateName}>Update Name</button>
			</div>
		</>
	)
}