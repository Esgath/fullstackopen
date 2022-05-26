import CountryView from "./CountryData";

const OutputCountries = ({ country, countriesData, setCountry }) => {
  const handleClick = (countryName) => {
    setCountry(countryName);
  }

  let foundCountries = '';
  if (country) {
    // Find array of countries that contain the specified string
    foundCountries = countriesData.filter((countryEl) => {
      return countryEl.name.common.toLowerCase().indexOf(country.toLowerCase()) !== -1;
    });

    if (foundCountries.length > 10) {
      // Don't display more than 10 countries
      return <div>Too many matches, specify another f ilter</div>;
    } else if (foundCountries.length === 0) {
      return <div>No matches</div>;
    } else if (foundCountries.length === 1) {
      // For single match display additional data
      const countryObj = foundCountries[0];
      return <CountryView countryObj={countryObj} />;
    }

    // Map array creating div element for each country
    foundCountries = foundCountries.map((country) => {
      return (
        <div key={country.name.common}>
          <span>{country.name.common}</span>
          <button onClick={() => { handleClick(country.name.common) }}>show</button>
        </div>
      );
    })
  }

  return (<div>{foundCountries}</div>);
}

export default OutputCountries;