import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../store";
import { faker } from '@faker-js/faker'
import SalarySum from "./SalarySum";
import { nanoid } from "@reduxjs/toolkit";
import ContactSearch from "./ConactSearch";

const ContactList = () => {

    const dispatch = useDispatch();

    const { name, contacts } = useSelector(({ contacts: { data, searchTerm }, form }) => {
        const filteredContacts = data.filter(contact => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

        return {
            contacts: filteredContacts,
            name: form.name
        }
    });

    const handleContactDelete = id => {
        dispatch(removeContact(id))
    }

    const renderedContacts = contacts.map(contact => {

        // in case tailwind, bulma etc are used
        const bold = name && contact.name.toLowerCase().includes();

        return (
            <div className={`rendered-contact-box ${bold && 'bold'}`} key={nanoid}>
                <div className="img-container">
                    <img src={faker.image.avatar()}/>
                </div>
                <div className="contact-panel" key={contact.key}>
                    <p>
                        Name: {contact.name}
                    </p>
                    <p>
                        Position: {contact.position}
                    </p>
                    <p>
                        Salary: {contact.salary}
                    </p>
                    
                </div>
                <div className="btn-edit">
                    <button>EDIT</button>
                </div>
                <div className="btn-delete">
                    <button
                        onClick={() => handleContactDelete(contact.id)}
                    >
                        DELETE
                    </button>

                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="contacts-container">
                <h3 contacts-container-header>EMPLOYEES</h3>

                <div className="contact-list-box">
                    {renderedContacts}
                </div>

                <div className="contacts-container-salary">
                    <SalarySum/>
                </div>
            </div>
            <div className="contacts-container-search-bar">
                <ContactSearch />
            </div>
        </div>
    );
};

export default ContactList;