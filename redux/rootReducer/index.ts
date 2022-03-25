import { combineReducers } from 'redux';
import currenciesReducer from "../../components/reducers/currenciesReducer";
import currencyDetailsReducer from "../../components/reducers/currencyDetailsReducer";
import searchReducer from "../../components/reducers/searchReducer";

const rootReducer = combineReducers({
    currencies: currenciesReducer,
    currencyDetails: currencyDetailsReducer,
    searchResult: searchReducer
});

export default rootReducer;