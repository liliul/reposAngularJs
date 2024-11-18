import * as Styles from "./styles";

export const Logando = ({ userName, userEmail }) => {
	return (
		<Styles.LogadoStylesConteiner >
			<Styles.LogadoImgUser></Styles.LogadoImgUser>

			<Styles.LogadoName>
				{ userName }
			</Styles.LogadoName>

			<Styles.LogadoEmail>
				{ userEmail }
			</Styles.LogadoEmail>
		</Styles.LogadoStylesConteiner>
	)
}