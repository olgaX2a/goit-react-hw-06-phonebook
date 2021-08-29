import "./ContactList.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";

const PhonebookListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="Contact__item">
      <p className="Contact__info">{name}: </p>
      <p className="Contact__info">{number}</p>
      <button
        type="button"
        id={id}
        onClick={() => dispatch(deleteContact(id))}
        className="Contact__delete-btn"
      >
        Delete
      </button>
    </li>
  );
};

export default PhonebookListItem;
