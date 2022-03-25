export type Currencies = {
    _id: string,
    error: boolean,
    errorMessage: string,
    currencies: [{
        _id: string,
        code: string,
        country: string
    }]
};

export type SearchResult = {
    searchResult: {
        error: boolean,
        errorMessage: string,
        result: Currency []
    }
}

export type CurrenciesDetails = {};

export type Error = string;
export type CountryCode = string;

export type StoreState = {
    currencies: Currencies,
    currencyDetail: CurrenciesDetails,
    searchResult: {
        error: boolean,
        errorMessage: string,
        result: Currency []
    }
}

export type Currency = {
    _id: string,
    code: string,
    country: string
}

export type Context = {
    params: {
        result: string
    }
}
