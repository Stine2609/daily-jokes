import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    visible: boolean;
    message: string;
}

const initialState: InitialState = {
    visible: false,
    message: "",
}

export const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        updateToast: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        updateMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        resetState: (state) => {
            // Directly return the initialState
            return initialState;
        },

    },
});

// Export the generated action creators
export const { updateToast, updateMessage } = toastSlice.actions;

export default toastSlice.reducer;