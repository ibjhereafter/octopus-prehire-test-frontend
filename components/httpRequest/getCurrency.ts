import axios from "axios";
import { Dispatch } from "redux";
import Router from "next/router";

import { CountryCode, Currency } from "../types";
import { baseUrlLocal } from "./getCurrencies";
import { getSearchResult, getSearchResultError } from "../reducers/searchReducer";

export const startGetCurrency = (code: CountryCode) => {
    return async (dispatch: Dispatch) => {
        try {
            const url = `${baseUrlLocal}/currencies/${code}`;
            const { data } = await axios.post<Currency []>(url);
            dispatch(getSearchResult(data));
            await Router.push(`/search/${code}`);
        } catch (error: any) {
            if (error.response) {
                dispatch(getSearchResultError(error.response.data.error))
            }

        }
    }
}