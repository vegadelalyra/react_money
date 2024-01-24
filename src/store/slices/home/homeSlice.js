import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        contacts: [],
        balance: 0,
        transactions: [],
    },
    reducers: {
        setContacts: (state, action) => {
            state.contacts = action.payload;
        },
        setBalance: (state, action) => {
            state.balance = action.payload;
        },
        setTransactions: (state, action) => {
            state.transactions = action.payload;
        },
        // Add other actions as needed
    },
});

export const { setContacts, setBalance, setTransactions } = homeSlice.actions;
export default homeSlice.reducer;
