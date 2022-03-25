import axios from "axios";
import { Dispatch } from "redux";

import { Currencies } from "../types";
import { getCurrencies, getCurrenciesError } from "../reducers/currenciesReducer";

export const baseUrlLocal = `https://octopus-prehire-test-backend.herokuapp.com`;

export const startGetCurrencies = (): Function => {
    return async (dispatch: Dispatch) => {
        try {
            const url = `${baseUrlLocal}/currencies`;
            const { data } = await axios.get<Currencies []>(url);
            dispatch(getCurrencies(data));
        } catch (error: any ) {
            if (error.response) {
                dispatch(getCurrenciesError(error.response.data.error));
            }
        }
    }
}