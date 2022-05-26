const Filter = ({ handleSearch, searchString }) => {
  return (
    <div>
      Filter shown with <input onChange={handleSearch} value={searchString} />
    </div>
  );
}

export default Filter;