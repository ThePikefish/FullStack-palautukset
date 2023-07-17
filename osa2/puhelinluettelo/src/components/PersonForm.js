const PersonForm = ( {onSubmit, name, onNameChange, number, onNumberChange} ) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                nimi: <input value={name} onChange={onNameChange} />
            </div>
            <div>
                numero: <input value={number} onChange={onNumberChange} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
    )
}

export default PersonForm