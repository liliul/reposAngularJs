export function UrlViaProps(props) {
	const { url } = props;
	return (
		<>
			<div className="url-container">
				<a href={url}>Link da url</a>
			</div>
		</>
	)
}