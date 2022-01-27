import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { Wrapper } from "./ContactsView.styled";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserLogin } from "redux/authorization/authorization-selectors";

function ContactsView() {
  const isLogin = useSelector(getUserLogin);

  return (
    <Wrapper>
      {isLogin ? (
        <>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter title="Find contacts by name" />
          <ContactList />
        </>
      ) : (
        <Navigate replace to="/login" />
      )}
    </Wrapper>
  );
}

export default ContactsView;
