import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notificationMessage, setNotificationMessage]= useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault()

    if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} on jo lisätty puhelinluetteloon, vaihdetaanko kontaktin numero uuteen?`)) {
        const person = persons.find(p => p.name === newName)
        const changedPerson = { ...person, number: newNumber }

        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
            setNotification(`Kontaktin '${newName}' numero vaihdettu`)
          })

          .catch(error => {
            setNotification(`Kontakti '${person.name}' on jo poistettu palvelimelta`)
            setPersons(persons.filter(person => person.name !== newName))
          })
      }
    }

    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
      setNotification(`'${newName}' lisätty`)
    }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Haluatko varmasti poistaa kontaktin nimeltä ${person.name}`)) {
      personService
        .remove(id)
      setPersons(persons.filter(p => p.id !== id))
      setNotification(`Kontakti '${person.name}' poistettiin`)
    }
  }

  const setNotification = (message) => {
    setNotificationMessage(message)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000);
  }

  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Notification message={notificationMessage} />
      <Filter
        search={newSearch}
        onChange={handleSearch}
      />
      <h2>Lisää uusi</h2>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numerot</h2>
      <Persons persons={persons} search={newSearch} deletePerson={deletePerson} />
    </div>
  )

}

export default App