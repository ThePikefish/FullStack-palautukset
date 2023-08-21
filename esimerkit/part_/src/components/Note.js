const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'muuta ei tärkeäksi' : 'muuta tärkeäksi'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note