import styles from '../../styles/currencies/search.module.css';
import React, {useState, SyntheticEvent, FC, ReactElement, useEffect} from 'react';
import Loader from "../utilities/Loader";

import { startGetCurrency } from "../httpRequest/getCurrency";

type SearchProps = {
    startGetCurrency: typeof startGetCurrency
}

type SearchString = string;
type FormError = string;
type ShowFormError = boolean;

const Search:FC<SearchProps> = ({ startGetCurrency }): ReactElement=> {
    const [searchString, setSearchString] = useState<SearchString>('');
    const [error, setError] = useState<FormError>('');
    const [showFormError, setShowFormError] = useState<ShowFormError>(false);
    const [spinner, setSpinner] = useState<ShowFormError>(false);

    useEffect(() => {
        setSpinner(false);
    })

    const onFormSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      if (!searchString) {
          setError('Please, enter the code of the currency or the full name of the country.');
          return setShowFormError(true);
      }
      setSpinner(true);
      startGetCurrency(searchString.trim());
    };

    return (
        <form className={styles.container} onSubmit={onFormSubmit}>
            {
                spinner ? <Loader /> : <div>
                    {
                        showFormError ? <strong className={styles.error}>{error}</strong> : null
                    }
                    <section>
                        <div className={styles.form}>
                            <label><strong>Filter By Code or Country</strong></label>
                            <div>
                                <input type="text" className={styles.input} value={searchString}
                                       onChange={(event => setSearchString(event.target.value))}/>
                                <button className={styles.button} type="submit">Search</button>
                            </div>
                        </div>
                    </section>

                </div>
            }
        </form>
    );
};

export default Search;
