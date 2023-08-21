const Persons = ( {persons, search, deletePerson} ) => {
    const results = persons.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
            {results.map(person =>
                <Person
                    key={person.name}
                    person={person}
                    deletePerson={() => deletePerson(person.id)}
                />
            )}
        </div>
    )
}

const Person = ( {person, deletePerson} ) => {
    return (
        <p>
            {person.name} {person.number}
            <button onClick={deletePerson}>poista</button>
        </p>
    )
}

export default Persons