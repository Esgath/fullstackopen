import personService from "../services/persons";

const Persons = ({ messageHandler, setPersonsData, personsData, searchString }) => {
  let dataToRender = '';
  let inputData = personsData;

  const handleDeletion = (person) => {
    let id = person.id;
    let newPersons = personsData.filter((person) => person.id !== id);
    personService
      .deleteItem(id)
      .then(response => {
        setPersonsData(newPersons);
        messageHandler(`${person.name} deleted from the DB.`, "success");
      })
      .catch((err) => {
        console.log(err);
        messageHandler(`Failed to delete ${person.name}. User might has been already removed.`, "error");
      })
  }

  if (searchString) {
    // Checks if searchString is present inside person's name
    inputData = personsData.filter(person => {
      return person.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
    });
  }

  dataToRender = inputData.map((person) => {
    return (
      <div key={person.id}>
        <span>
          {person.name} {person.number}
        </span>
        <button onClick={() => handleDeletion(person)}>DELETE</button>
      </div>
    )
  });

  return (
    <>
      {dataToRender}
    </>
  );
}

export default Persons;