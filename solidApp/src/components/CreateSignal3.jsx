import { createSignal } from 'solid-js';

function CounterX({count}) {
	const [counterX, setCounterX] = createSignal(0);
	const resProps = count.counterX || 'Iniciar';

	function handleCount() {
		setCounterX(counterX() * 2);
	}

	return (
		<>
			<div>
				<p>{ resProps }</p>

				<button onClick={handleCount}>Multiplicar</button>
			</div>
		</>
	);
}

export default CounterX;