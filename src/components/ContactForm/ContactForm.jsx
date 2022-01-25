import React from "react";
import toast from "react-hot-toast";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/contacts/contacts";
import { Form, InputName, Input, AddButoon } from "./ContactForm.styled";

function ContactForm() {
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const onFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      name: e.target.name.value,
      phone: e.target.number.value,
    };

    const isNameIncludeInArray = data.find(
      contact => contact.name === newContact.name
    );
    const isNumberIncludeInArray = data.find(
      contact => contact.phone === newContact.phone
    );

    if (isNameIncludeInArray) {
      return toast.error("This name in phonebook!");
    }
    if (isNumberIncludeInArray) {
      return toast.error("This number in phonebook");
    }

    addContact(newContact);

    toast.success("Contact create");

    e.target.reset();
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <InputName>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputName>
      <InputName>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputName>

      <AddButoon type="submit">Add contacts</AddButoon>
    </Form>
  );
}

export default ContactForm;
