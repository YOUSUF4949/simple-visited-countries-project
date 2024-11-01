import './Countries.css'
import Countries from './Countries'
import { useState } from 'react';

export default function Country({country, handleMarkVisitedCountries, handleVisitedFlags}){
    const {name, capital, flags, language, continents} = country;
   
    const [visitedCountry, setVisitedCountry] = useState(false)
    const handleVisitedCountry = ()=>{
         setVisitedCountry(!visitedCountry)
    }

    const handleVisitedMarkCountry = ()=>{
        handleMarkVisitedCountries(country)
    }

    return (
        <div className={`${visitedCountry ? "visited-card" : "card" }`}>
            <img className="image" src={flags.png} />
            <h2>Country Name : {name.common}</h2>
            <h3>Capital : {capital}</h3>
            <h3>continents : {continents}</h3>
            <button onClick={handleVisitedMarkCountry}>Mark Visited</button> <br />
            <button onClick={()=> handleVisitedFlags(country)}>Visited Flags</button>
            <br />
            <button onClick={handleVisitedCountry}>{`${visitedCountry ? "Visited Country" : "Going to Visited"}`}</button>
            {
                visitedCountry ? "I have visited this Country" : " I will go to this country"
            }
        </div>
    )
}