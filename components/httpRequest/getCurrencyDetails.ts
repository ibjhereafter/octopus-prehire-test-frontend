import axios from "axios";
import { Dispatch } from "redux";

import { getCurrencyDetails, getCurrencyDetailsError } from "../reducers/currencyDetailsReducer";
import { baseUrlLocal } from "./getCurrencies";
import { CurrenciesDetails, Error } from "../types";

type Code = string;

export const startGetDetails = (code: Code) => {
    return async (dispatch: Dispatch) => {
        try {
            const url = `${baseUrlLocal}/currencies/${code}`;
            const { data } = await axios.get<CurrenciesDetails []>(url);
            dispatch(getCurrencyDetails(data));
        } catch (error: any) {
            if (error.response) {
                dispatch(getCurrencyDetailsError(`Sorry! Details for the currency ${code} is not available now!`));
            }
        }
    }

}
