import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
