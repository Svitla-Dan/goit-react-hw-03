import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={style.contact}>
      <div className={style.contactInfo}>
        <p className={style.contactName}>
          <FaUserAlt />
          &nbsp;
          {contact.name}
        </p>
        <p className={style.contactTel}>
          <FaPhoneAlt />
          &nbsp;
          <a href={`tel:${contact.number}`}>{contact.number}</a>
        </p>
      </div>
      <button
        className={style.deleteButton}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
