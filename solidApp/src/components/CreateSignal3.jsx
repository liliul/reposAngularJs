import { createSignal } from 'solid-js';

/**
 * @function
 * @returns componente multiplica a cada click
 * */

export default function CounterX({count}) {
	const [counterX, setCounterX] = createSignal(1);
	const resProps = count;

	function handleCount() {
		setCounterX(counterX() * 2);
	}

	return (
		<>
			<div>
				<p>{counterX()}</p>

				<button onClick={handleCount}>{resProps}</button>
			</div>
		</>
	);
}