import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrenciesDetails, Error } from "../types";

const INITIAL_STATE = {
    error: false,
    errorMessage: '',
    currencyDetails: [{}]
}

const currencyDetailsSlice = createSlice({
    name: 'currencyDetails',
    initialState: INITIAL_STATE,
    reducers: {
        getCurrencyDetails(state, action: PayloadAction<CurrenciesDetails []>) {
            state.currencyDetails = action.payload
            state.error = false;
            state.errorMessage = '';
        },

        getCurrencyDetailsError(state, action: PayloadAction<Error>) {
            state.error = true;
            state.errorMessage = action.payload;
        }
    }
});

const { actions, reducer: currencyDetailsReducer } = currencyDetailsSlice;
export const { getCurrencyDetails, getCurrencyDetailsError } = actions;
export default currencyDetailsReducer;