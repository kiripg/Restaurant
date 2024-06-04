import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    entrantes: null,
    error: null,
}

const entrantesSlice = createSlice({
    name: 'entrantes',
    initialState, 
    reducers: {
        entrantesAction: (state) =>{
            state.loading = true
            state.entrantes = null
            state.error = null
        },
        entrantesSuccessAction: (state, action) =>{
            state.loading = false
            state.entrantes = action.payload
            state.error = null
        },
        entrantesFailedAction: (state, action)=>{
            state.loading = false
            state.entrantes = null
            state.error = action.payload
        },
        resetAll: () => initialState,
    }
})

export const {entrantesAction, entrantesSuccessAction, entrantesFailedAction} = entrantesSlice.actions;

export default entrantesSlice.reducer;