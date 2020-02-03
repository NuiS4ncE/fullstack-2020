import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [addFilter, setNewFilter] = useState('')

  const setFilter = (event) => {
    event.preventDefault()
    returnFilter(addFilter)
    setNewFilter('')

  }

  const addNameNumber = (event) => {
    event.preventDefault()
    if (persons.map((person) => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const returnFilter = () => {
    const setFiltertoShow = persons.filter(person =>
        person.name.toLowerCase().indexOf(addFilter.toLowerCase()) !== -1)
    if (addFilter !== '') {
      return (
        setFiltertoShow.map((person) =>
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))
    } else {
      return (
        persons.map((person) =>
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={setFilter}>
        <div>
          filter shown with <input value={addFilter}
            onChange={handleFilterChange} />
        </div>
      </form>
      <h2>add a new</h2>
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
      {returnFilter()}
    </div>
  )

}

export default App