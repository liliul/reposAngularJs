export function TestandoProps({name, id, poder}) {

	return (
		<>
			<div>
				<span>{id}</span>
				<h2>{name}</h2>
				<strong>{poder}</strong>
			</div>
		</>
	)
}