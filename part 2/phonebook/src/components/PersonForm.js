const PersonForm = ({ handleNameChange, handleNumberChange, handleRecordSubmit, newName, newNumber }) => {
  return (
    <form>
      <div>
        name: <input onChange={handleNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit" onClick={handleRecordSubmit}>add</button>
      </div>
    </form>
  );
}

export default PersonForm;