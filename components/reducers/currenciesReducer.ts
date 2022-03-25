import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currencies, Error } from "../types";

const INITIAL_STATE = {
    error: false,
    errorMessage: '',
    currencies: [{}]
}

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: INITIAL_STATE,
    reducers: {
        getCurrencies(state, action: PayloadAction<Currencies []>) {
            state.currencies = action.payload;
        },

        getCurrenciesError(state, action: PayloadAction<Error>) {
            state.error = true;
            state.errorMessage = action.payload
        }
    }
});

const { actions, reducer: currenciesReducer } = currenciesSlice;
export const { getCurrencies, getCurrenciesError } = actions;
export default currenciesReducer;
