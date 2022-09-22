import React, { useEffect, useState } from 'react';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    return (
        <div>
            <h2>Total Countries: {countries.length}</h2>
            <div className='countries-container'>
                {
                    countries.map(country => <Country country={country} capital={country.capital} flag={country.flags} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

const Country = (props) => {
    const { population, region } = props.country;

    return (
        <div className='border'>
            <h1>Name: {props.country.name.common}</h1>
            <h3>Capital:{props.capital}</h3>
            <p>Area: {props.country.area}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <img src={props.flag.png} alt="" />
        </div>
    )
}

export default Countries;