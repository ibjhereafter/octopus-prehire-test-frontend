import { CurrenciesDetails } from "../types";

export const getLastTwelveMonthsRates = (rates: CurrenciesDetails []) => {
    // @ts-ignore
    const currencyDetail = rates.currencyDetails;
    const [, allRates] = currencyDetail;
    const exchangeRate = allRates?.rates;

    //removes the first element of the array in order to get the last twelve elements
    return exchangeRate?.filter((elements: CurrenciesDetails, index: number) => {
        return index !== 0;
    });
}