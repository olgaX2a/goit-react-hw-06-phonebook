import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import filterContacts from "./helpers/filterContacts";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const handleAddContact = (contact) => {
    if (contacts.some((el) => el.name === contact.name)) {
      alert(contact.name + " is already in contacts");
      return;
    }
    setContacts((prevState) => [...prevState, contact]);
  };

  const handleDeleteContact = (event) => {
    setContacts(contacts.filter((contact) => contact.id !== event.target.id));
  };

  const handleFilterContact = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} onFilter={handleFilterContact} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
}

export default App;
