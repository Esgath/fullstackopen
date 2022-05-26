import Capital from "./Capital";

const CountryView = ({ countryObj }) => {

  return (
    <div>
      <h2>{countryObj.name.common}</h2>
      <div>Capital: {countryObj.capital ? countryObj.capital[0] : null}</div>
      <div>Area: {countryObj.area}</div>
      <div>Population: {countryObj.population}</div>
      {countryObj.languages ? (
        <div>
          Languages:
          <ul>
            {Object.entries(countryObj.languages).map(([key, value]) => {
              return <li key={key}>{value}</li>;
            })}
          </ul>
        </div>
      ) : null}
      <div>
        <img src={countryObj.flags.png} alt={`${countryObj.name.common} flag`} />
      </div>
      {countryObj.capital ? (
        <Capital countryObj={countryObj} />
      ) : null}
    </div>
  )
}

export default CountryView;