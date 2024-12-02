import { useState } from "react";
import { ButtonTemperature } from "./button";

export function Temperature() {
	const [temp, setTemp] = useState(0)

	function handleTempMais() {
		setTemp(temp + 1)
	}
	function handleTempMenos() {
		setTemp(temp - 1)
	}

	return (
		<>
			<h1>Temperatura</h1>

			<span>{ temp } C</span>

			<div>
				<ButtonTemperature onclick={handleTempMais}>
					+
				</ButtonTemperature>

				<ButtonTemperature onclick={handleTempMenos}>
					-
				</ButtonTemperature>
			</div>
		</>
	)
}