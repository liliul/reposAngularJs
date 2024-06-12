const SearchResults = ({ data }) => {
    if (!data || !data.length) return null

    const resultList = data.map(({ item, idx }) => {
        const { id, name } = item
        const delay = `${idx + 1}00ms`

        return (
            <li key={id} style={{ '--delay': delay }}>
                <span>{name}</span>
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