import { createSignal, onCleanup } from 'solid-js';

export default function myCount() {
	const [mycount,setMycount] = createSignal(0);

	const Interval = setInterval(() => {
		setMycount(mycount => mycount + 1)
	},1000)

	onCleanup(() => clearInterval(Interval));

	return <div>SetInterval => {mycount()}</div>;
}