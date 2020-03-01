import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import './index.css'

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
  const personer = props.persons.find(n => n.name === newName)
  const changedPerson = { ...personer }

  const nameObject = {
    name: newName,
    number: newNumber
  }

  const addNameNumber = (event) => {
    event.preventDefault()
    if (props.persons.map((person) => person.name).includes(newName)) {
      const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      if (result) {
        personService
          .update(changedPerson.id, nameObject)
          .then(returnedPerson => {
            props.setPersons(props.persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            props.setErrorMessage(
              `Number was changed for '${newName}' `
            )
            setTimeout(() => {
              props.setErrorMessage(null)
            }, 5000)
          })
          .catch(error => {
            alert(
              `the person '${newName}' was already deleted from the server`
            )
           
            props.setPersons(props.persons.filter(n => n.id !== props.persons.id))
          })
      }
    } else {
     
      personService
        .create(nameObject)
        .then(response => {
          props.setPersons(props.persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          props.setErrorMessage(
            `Added '${newName}' `
          )
          setTimeout(() => {
            props.setErrorMessage(null)
          }, 5000)
        }) 
        .catch(error => {
          alert(
            `the person '${newName}' was already deleted from the server`
          )
         
          props.setPersons(props.persons.filter(n => n.id !== props.persons.id))
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
            {person.name} {person.number} <RemoveButton persons={props.persons} setPersons={props.setPersons} setErrorMessage={props.setErrorMessage}/>
          </p>
        ))
    } else {
      return (
        props.persons.map((person) =>
          <p key={person.name}>
            {person.name} {person.number} <RemoveButton persons={props.persons} setPersons={props.setPersons} person={person} setErrorMessage={props.setErrorMessage}/>
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
const Notification = ({ message }) => {
  
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
  
}
const RemoveButton = (props) => {

  return (<Button handleClick={() => {
    if (window.confirm(`Delete '${props.person.name}' ?`)) {
      personService
        .removePerson(props.person.id)
        .catch(error => {
          alert(`the person '${props.person.name}' was already deleted from server`)
            props.setPersons(props.persons.filter(n => n.id !== props.person.id))
        })
        props.setErrorMessage(
          `'${props.person.name}' was deleted from server`
        )
        setTimeout(() => {
          props.setErrorMessage(null)
        }, 5000)
        props.setPersons(props.persons.filter(n => n.id !== props.person.id))
      }
  }} text="delete"></Button>)
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
  const [errorMessage, setErrorMessage] = useState(null)

  

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
      <Notification message={errorMessage} />
      <Filter filter={addFilter} setNewFilter={setNewFilter} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={addFilter} setPersons={setPersons} setErrorMessage={setErrorMessage} />
    </div>
  )

}

export default App