import { useState, useEffect } from 'react'
import personService from "./services/persons";
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchString, setSearchString] = useState('');
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    personService
      .getAll()
      .then((returnedPersons) => setPersons(returnedPersons))
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const messageHandler = (message, messageType) => {
    setMessage(message);
    setMessageType(messageType);
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleRecordSubmit = (event) => {
    event.preventDefault();
    // Chekc for every person if they are already in the list
    const filtered = persons.filter((person) => person.name === newName);
    if (filtered.length >= 1) {
      // If in the list alert user
      let dialogBoxBool = window.confirm(`${newName} is already added to phonebook. Update phone number for this user ?`);
      if (dialogBoxBool) {
        let updatedPerson = { ...filtered[0], number: newNumber };
        personService
          .updateItem(filtered[0].id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map((person) => person.id !== returnedPerson.id ? person : returnedPerson));
            messageHandler(`${updatedPerson.name} updated.`, "success");
          })
          .catch((err) => {
            console.log(err);
            messageHandler(`Failed to update ${updatedPerson.name}. User might has been already removed.`, "error");
          })
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
      // Else add person to the list
      personService
        .create(newPerson)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          messageHandler(`Added ${returnedPerson.name}.`, "success");
        }).catch((err) => {
          console.log(err);
          messageHandler(`Failed to create ${newPerson.name}.`, "error");
        })
    }
    setNewName('');
    setNewNumber('');
  }

  const handleSearch = (event) => {
    setSearchString(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType} />
      <Filter handleSearch={handleSearch} searchString={searchString} />
      <h2>Add new</h2>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleRecordSubmit={handleRecordSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons messageHandler={messageHandler}
        setPersonsData={setPersons}
        personsData={persons}
        searchString={searchString} />
    </div>
  )
}

export default App;