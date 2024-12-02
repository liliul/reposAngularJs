export function ButtonTemperature({onclick, children}) {
	return (
		<>
			<button onClick={onclick} >
				{ children }
			</button>
		</>
	)
}