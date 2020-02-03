import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

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
      
      personService
      .create(nameObject)
      .then(response => {
        props.setPersons(props.persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })

      
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
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])


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