import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"
import './countries.css'

export default  function Countries(){
  const [countries, setCountries ] = useState([])
  const [visited, setCountry ] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

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

  const handleVisitedFlags = (flag)=>{
    console.log("visited flags occured")
    const newFlagsArray = [...visitedFlags, flag];
    setVisitedFlags(newFlagsArray)
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
      <div className="image-container">
        {
          visitedFlags.map((countryFlag) =>{
            return <img className="flag" src={countryFlag.flags.png}/>
          })
        }
      </div>
      <div className="card card-container">
        {
          countries.map((country) =>{
            return <Country country={country} handleMarkVisitedCountries={handleMarkVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>
          })
        }
      </div>
    </div>
  )
}