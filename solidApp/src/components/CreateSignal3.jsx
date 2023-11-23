import { createSignal } from 'solid-js';
import { styled } from "solid-styled-components";

// Style Object
const Btn = styled("button")(props => ({
	fontSize: props.size + "px",
	borderRadius: props.brSize + "px",
	border: "2px solid green",
	color: "yellow"
}));

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

				<Btn size={25} brSize={12} onClick={handleCount}>{resProps}</Btn>
			</div>
		</>
	);
}
