import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNameNumber = (event) => {
    event.preventDefault()
    if (persons.map((person) => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number : newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addNumber = (event) => {
    event.preventDefault()

    const numberObject = {
      number : newNumber
    }
    setPersons(persons.concat(numberObject))
    setNewName('')
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNameNumber}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) =>
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      )}
    </div>
  )

}

export default App