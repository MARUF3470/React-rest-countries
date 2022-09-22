import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './Components/Countries/Countries';
import Person from './Components/Person/Person';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}
// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       {
//         countries.map(country => <DisplayCountries name={country.name} capital={country.capital} flag={country.flags}></DisplayCountries>)
//       };
//       <h1>Total Countries:{countries.length}</h1>
//     </div>
//   )
// }
// function DisplayCountries(props) {
//   console.log(props)
//   return (
//     <div style={{ border: '2px solid black', margin: '20px' }}>
//       <h1>Name: {props.name.common}</h1>
//       <h3>Capital: {props.capital}</h3>
//       <img src={props.flag.png} alt="" />
//     </div>
//   )
// }

export default App;
