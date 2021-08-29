import PhonebookListItem from "./ContactListItem";
import "./ContactList.css";
import { useSelector } from "react-redux";
import {
  getContacts,
  getFilter,
} from "../../redux/phonebook/phonebook-selectors";
import { filterContacts } from "../../helpers/filterContacts";

const ContactList = () => {
  const fullContactList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contacts = filterContacts(fullContactList, filter);

  return (
    <ul className="Contact__list">
      {contacts.map(({ name, number, id }) => {
        return (
          <PhonebookListItem key={id} name={name} number={number} id={id} />
        );
      })}
    </ul>
  );
};

export default ContactList;
