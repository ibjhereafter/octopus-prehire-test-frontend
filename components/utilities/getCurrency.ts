import {CurrenciesDetails} from "../types";

export const getCurrency = (countryCode: CurrenciesDetails []) => {
    // @ts-ignore
    const currencyDetail = countryCode.currencyDetails;
    const [countryCurrency] = currencyDetail;

    return countryCurrency;
}