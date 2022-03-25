import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currency, Error } from "../types";

const INITIAL_STATE = {
    error: false,
    errorMessage: '',
    result: [{}]
}

const searchSlice = createSlice({
    name: 'currencies',
    initialState: INITIAL_STATE,
    reducers: {
        getSearchResult(state, action: PayloadAction<Currency []>) {
            state.result = action.payload;
        },

        getSearchResultError(state, action: PayloadAction<Error>) {
            state.error = true;
            state.errorMessage = action.payload
        }
    }
});

const { actions, reducer: searchReducer } = searchSlice;
export const { getSearchResult, getSearchResultError } = actions;
export default searchReducer;