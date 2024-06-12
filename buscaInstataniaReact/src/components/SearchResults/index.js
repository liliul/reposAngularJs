const SearchResults = ({ data }) => {
    if (!data || !data.length) return null

    const resultList = data.map(({ _id, title }) => {
        return (
            <li key={_id}>
                <span>{title}</span>
            </li>
        )
    })

    return (
        <>
            <article className="search-results">
                <ul>{resultList}</ul>
            </article>
        </>
    )
}

export default SearchResults