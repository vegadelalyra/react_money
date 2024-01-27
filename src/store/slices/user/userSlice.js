import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
    },
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload;
        },

        SET_ERROR: (state, action) => {
            state.error = action.payload;
        },
        SET_IS_AUTHENTICATED: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    },
});

export const {
    SET_USER,
    SET_ERROR,
    SET_IS_AUTHENTICATED,
} = userSlice.actions;
export default userSlice.reducer;
