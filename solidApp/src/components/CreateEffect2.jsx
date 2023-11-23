import { createEffect } from 'solid-js';
import { createStore } from "solid-js/store";

import { styled } from "solid-styled-components";

const Btn = styled("button")`
  border-radius: 8px;
  border: 1px solid purple;
`;

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
				<Btn onClick={updateName}>Update Name</Btn>
			</div>
		</>
	)
}
