import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer, addContact, removeContact, changeSearchTerm } from "./slices/contactsSlice";
import { createContactReducer, changeName, changePosition, changeSalary } from "./slices/createContactSlice";

const store = configureStore({
    reducer: {
        form: createContactReducer,
        contacts: contactsReducer
    }
});

export {store, addContact, removeContact, changeSearchTerm, changeName, changePosition, changeSalary};