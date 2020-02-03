import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [inputFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  //console.log(countries)
  //console.log(inputFilter)

  return (
    <div>
      <Filter inputFilter={inputFilter} setNewFilter={setNewFilter} />
      <Countries countries={countries} inputFilter={inputFilter} />
    </div>
  )
}

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
        find countries <input value={props.inputFilter}
          onChange={handleFilterChange} />
      </div>
    </form>
  )
}

const Countries = (props) => {

  const filterCountries = () => {

    /* const newArr = props.countries.map((country) => {
       return country.name
     })
 */

    const setFiltertoShow = props.countries.filter(country =>
      country.name.toLowerCase().indexOf(props.inputFilter.toLowerCase()) !== -1)
    
    if (props.inputFilter !== '' || setFiltertoShow.length > 0 && setFiltertoShow.length < 10) {
      return (
        setFiltertoShow.map((country) =>
          <p key={country.name}>
            {country.name}
          </p>)
      )
    } else {
      return (
        props.countries.map((country) =>
          <p key={country.name}>
            {country.name}
          </p>
        ))
    }
  }

  return (
    <div>
      {filterCountries()}
    </div>
  )
}



export default App;
