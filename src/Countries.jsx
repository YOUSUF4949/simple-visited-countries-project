import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"
import './countries.css'

export default  function Countries(){
  const [countries, setCountries ] = useState([])
  const [visited, setCountry ] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((countryData) =>{
      setCountries(countryData)
    })
  })

  const handleMarkVisitedCountries = (country)=>{
    console.log("I'm visited country")
    const newArray = [...visited, country];
    setCountry(newArray)
  }

  return (
    <div>
      <h2>Countries : {countries.length} </h2>
      <h3>Visited Countries : {visited.length}</h3>
      <ul>
        {
          visited.map(country => <li>{country.name.common}</li>)
        }
      </ul>
      <div className="card card-container">
        {
          countries.map((country) =>{
            return <Country country={country} handleMarkVisitedCountries={handleMarkVisitedCountries}></Country>
          })
        }
      </div>
    </div>
  )
}