const Filter = ( {search, onChange} ) => {
    return (
        <div>
            suodata hakutermillä <input value={search} onChange={onChange} />
        </div>
    )
}

export default Filter