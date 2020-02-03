import React, { useState, useEffect } from 'react'
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
            {person.name} {person.number} <RemoveButton persons={props.persons} setPersons={props.setPersons}/>
          </p>
        ))
    } else {
      return (
        props.persons.map((person) =>
          <p key={person.name}>
            {person.name} {person.number} <RemoveButton persons={props.persons} setPersons={props.setPersons} person={person}/>
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

const RemoveButton = (props) => {

    return(<Button handleClick={() =>{ 
      if(window.confirm(`Delete '${props.person.name}' ?`)){
      personService
      .removePerson(props.person.id)
      .catch(error => {
        alert(`the person '${props.person.name}' was already deleted from server`)
        props.setPersons(props.persons.filter(n => n.id !== props.person.id))
      })}
    }} text="delete"></Button> )
}

const Button = (props) => {
  const { handleClick } = props
  return (
    <button onClick={handleClick}>
      {props.text}
    </button>
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
      <Persons persons={persons} filter={addFilter} setPersons={setPersons}/>
    </div>
  )

}

export default App