import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getGreeting = createAsyncThunk(
    'greeting/getGreeting',
    async () => {
        const response = await fetch('http://localhost:3000/greetings');
        return response.json();
    }
);


const initialState = { 
    message: 'Hello World!',
}

const  greetingSlice = createSlice({
    name: 'greeting',  
    initialState,
reducers: {},
    extraReducers: {
    [getGreeting.fulfilled]: (state, action) => {
        return action.payload.message;
    }
    },
});

export default greetingSlice.reducer;
