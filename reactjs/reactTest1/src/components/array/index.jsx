// const itemsDoArray = [
//     {
//         "name": "Naruto Uzumaki",
//         "city": "konoha",
//         "poder": "Rasingan"
//     },
//     {
//         "name": "Som Goku",
//         "city": "Vegeta",
//         "poder": "Kame kame haa"
//     },
//     {
//         "name": "Wolverine",
//         "city": "Eua",
//         "poder": "Adiamantio"
//     }
// ]

export function ArrayMap({props}) {
    return (
        <>
            <h1>Personagens</h1>

            {props.map((personagens, index) => (
                <ul key={index}>
                    <li>{personagens.name}</li>
                    <li>{personagens.city}</li>
                    <li>{personagens.poder}</li>
                </ul>
            ))}
        
        </>
    )
}