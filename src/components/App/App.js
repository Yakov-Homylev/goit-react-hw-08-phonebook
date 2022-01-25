import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import { Toaster } from "react-hot-toast";
import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter title="Find contacts by name" />
      <ContactList />
    </Wrapper>
  );
}

export default App;
