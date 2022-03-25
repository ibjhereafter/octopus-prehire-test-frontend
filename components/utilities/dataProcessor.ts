import { Currencies, Currency } from "../types";

export const getCurrencyList = (currencyCollection: Currencies ) => {
    let sortedList: Currency [] = [];
    const { currencies } = currencyCollection;
    const [ currencyList ] = currencies;
    // @ts-ignore
    const { currencies: list } = currencyList;

    if (list?.length > 0) {
        const listToBeSorted = [...list];
        sortedList = listToBeSorted?.sort(compare);
    }

    return sortedList;
};

const compare = (a: Currency, b: Currency) => {
    let fa = a.country.toLowerCase(),
        fb = b.country.toLowerCase();

    if (fa < fb) {
        return -1;
    }

    if (fa > fb) {
        return 1;
    }

    return 0;
}