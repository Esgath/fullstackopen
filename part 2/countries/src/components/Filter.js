const Filter = ({ country, handleChangeCountry }) => {
  return (
    <div>
      find countries <input value={country} onChange={handleChangeCountry} />
    </div>
  )
}

export default Filter;