const Persons = ( {persons, search} ) => {
    const results = persons.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            {results.map(person =>
                <Person key={person.name} person={person} />
            )}
        </div>
    )
}

const Person = ( {person} ) => {
    return (
        <p>
            {person.name} {person.number}
        </p>
    )
}

export default Persons