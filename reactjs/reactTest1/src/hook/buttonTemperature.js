export function useColorTemperature(temp) {
	if (temp < 0) {
		document.body.style.background = '#b0e0e6'
	}else if (temp >= 0 && temp < 5) {
		document.body.style.background = "#FFF"
	}else if (temp >= 5 && temp < 10) {
		document.body.style.background = "#87cefa"
	}else if (temp >= 10 && temp < 20) {
		document.body.style.background = "#ffce00"
	}else {
		document.body.style.background = "#ff272a"
	}
}