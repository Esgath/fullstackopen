import axios from 'axios';
import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import OutputCountries from './components/OutputCountries';

const App = () => {
  const [country, setCountry] = useState('');
  const [countriesData, setCountriesData] = useState([]);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountriesData(response.data);
      });
  }, []);

  return (
    <div>
      <Filter country={country} handleChangeCountry={handleChangeCountry} />
      <OutputCountries country={country} countriesData={countriesData} setCountry={setCountry} />
    </div>
  )
}


export default App;
