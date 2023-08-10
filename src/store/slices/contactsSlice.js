import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        searchTerm: '', 
        data: [] 
    },
    reducers: {
        addContact(state, action) {
            state.data.push({
                name: action.payload.name,
                position: action.payload.position,
                salary: action.payload.salary,
                id: nanoid()
            });
        },
        removeContact(state, action) {
            const updatedList = state.data.filter(contact => {
                // Here action.payload === id But I must
                return contact.id !== action.payload
            })

            state.data = updatedList;
        },
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
});

console.log(contactsSlice.actions)
export const { addContact, removeContact, changeSearchTerm } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;