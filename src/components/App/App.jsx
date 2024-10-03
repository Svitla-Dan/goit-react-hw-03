import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactList";
import style from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

const initialContacts = JSON.parse(localStorage.getItem("contacts")) || [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const duplicateContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (duplicateContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts((prevContacts) => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  <SearchBox searchTerm={filter} onChangeSearch={handleFilterChange} />;

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox searchTerm={filter} onChangeSearch={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
