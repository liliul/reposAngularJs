const SearchResults = ({ data }) => {
    if (!data || !data.length) return null

    const resultList = data.map(({ item, idx }) => {
        const { _id, title } = item
        const delay = `${idx + 1}00ms`

        return (
            <li key={_id} style={{ '--delay': delay }}>
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