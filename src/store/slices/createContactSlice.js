import { createSlice } from "@reduxjs/toolkit";
import { addContact } from "./contactsSlice";

const createContactSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        position: '',
        salary: 0
     },
     reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changePosition(state, action) {
            state.position = action.payload;
        },
        changeSalary(state, action) {
            state.salary = action.payload;
        }
     },
     extraReducers(builder) {
        builder.addCase(addContact, (state, action) => {
            state.name = '';
            state.position = '';
            state.salary = '';
        })
     }
});

export const { changeName, changePosition, changeSalary } = createContactSlice.actions;
export const createContactReducer = createContactSlice.reducer;