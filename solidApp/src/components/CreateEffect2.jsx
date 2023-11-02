import { createEffect, createStore } from 'solid-js';

export default function Effect2() {
	const [nome, setNome] = createStore({
		nome: {
			primeiro: "Naruto",
			segundo: "Hyhuga"
		}
	})

	return (
		<>
			<div className="props">
				<button>Update Name</button>
			</div>
		</>
	)
}