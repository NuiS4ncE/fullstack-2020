import React, { useState } from 'react'

const Filter = (props) => {

  const setFilter = (event) => {
    event.preventDefault()
    props.setNewFilter('')

  }

  const handleFilterChange = (event) => {
    props.setNewFilter(event.target.value)
  }


  return (
    <form onSubmit={setFilter}>
      <div>
        filter shown with <input value={props.filter}
          onChange={handleFilterChange} />
      </div>
    </form>
  )
}

const PersonForm = (props) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNameNumber = (event) => {
    event.preventDefault()
    if (props.persons.map((person) => person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      props.setPersons(props.persons.concat(nameObject))
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
  return (
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
  )
}

const Persons = (props) => {

  const returnFilter = () => {
    const setFiltertoShow = props.persons.filter(person =>
      person.name.toLowerCase().indexOf(props.filter.toLowerCase()) !== -1)
    if (props.filter !== '') {
      return (
        setFiltertoShow.map((person) =>
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))
    } else {
      return (
        props.persons.map((person) =>
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))
    }
  }
  return (
    <div>
      {returnFilter()}
    </div>
  )

}

const App = () => {
  const [addFilter, setNewFilter] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={addFilter} setNewFilter={setNewFilter} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={addFilter} />
    </div>
  )

}

export default App