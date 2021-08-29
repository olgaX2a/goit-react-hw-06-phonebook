import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ContactForm.css";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChangeUserInfo = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value.trim());
        break;

      case "number":
        setNumber(value.trim());
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const handleUserFormSubmit = (event) => {
    event.preventDefault();
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    addContact(contact);
    resetForm();
  };

  return (
    <form className="Form" onSubmit={handleUserFormSubmit}>
      <label className="Form__label">
        Name
        <input
          onChange={handleChangeUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className="Form__label">
        Number
        <input
          onChange={handleChangeUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className="Form__add-btn">
        Add contact
      </button>
    </form>
  );
}

// class oldContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChangeUserInfo = (event) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   resetForm = () => {
//     this.setState({ name: "", number: "" });
//   };

//   handleUserFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddContact({ ...this.state });
//     this.resetForm();
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleUserFormSubmit} className="Form">
//         <label className="Form__label">
//           Name
//           <input
//             onChange={this.handleChangeUserInfo}
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>

//         <label className="Form__label">
//           Number
//           <input
//             onChange={this.handleChangeUserInfo}
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button type="submit" className="Form__add-btn">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

export default ContactForm;
