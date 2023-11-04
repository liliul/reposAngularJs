import { createSignal } from 'solid-js';

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