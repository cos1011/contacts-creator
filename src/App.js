import './scss/contacts.scss';
import ContactForm from "./components/ContactForm";
import ContactList from './components/ConstactList';

function App() {
  return (
    <div className="App">
      <div className='contact-form-container'>
        <ContactForm />
      </div>
      <ContactList />
    </div>
  );
}

export default App;
