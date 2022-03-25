import styles from '../../styles/details/details.module.css';
import React, {FC, Fragment, useEffect, ReactElement} from 'react';
import { connect } from "react-redux";
import Link from "next/link";

import LineChart from "../../components/currencies/charts/LineChart";
import { getLastTwelveMonthsRates } from "../../components/utilities/getLastTwelveMonthsRates";
import { getCurrency } from "../../components/utilities/getCurrency";
import { averageRate } from "../../components/utilities/averageRate";
import { Context, CurrenciesDetails, StoreState } from "../../components/types";
import { startGetDetails } from "../../components/httpRequest/getCurrencyDetails";

type CodeProps = {
    result: string,
    currencyDetails: CurrenciesDetails [],
    startGetDetails: typeof startGetDetails

}
const Details: FC<CodeProps> = ({ currencyDetails, startGetDetails, result }): ReactElement => {
    // @ts-ignore
    const { error, errorMessage } = currencyDetails;

    const rates = getLastTwelveMonthsRates(currencyDetails);
    const currency = getCurrency(currencyDetails);
    const average = averageRate(rates);

    useEffect(() => {
        startGetDetails(result);
    }, [result, startGetDetails])


    return (
        <Fragment>
            <main className={styles.container}>

                {
                    error ? <section className={styles.error}>
                        <div>
                            {errorMessage}
                        </div>
                        <div>
                            <Link href={'/'} passHref>
                                <button className={styles.button}>All Currencies</button>
                            </Link>
                        </div>

                    </section>: <section>
                        <h1>{currency?.country} {currency?.code}</h1>
                        <p>Average exchange rates for {currency.country} in the last twelve months: {average}.</p>
                        <Link href={'/'} passHref>
                            <button className={styles.button}>All Currencies</button>
                        </Link>
                        <LineChart dataSets={rates}/>
                    </section>
                }
            </main>
        </Fragment>
    );
};

const mapStateToProps = (state: StoreState) => {

    return {
        // @ts-ignore
        currencyDetails: state?.currencyDetails
    }
}

// @ts-ignore
export default connect(mapStateToProps, { startGetDetails })(Details);

export const getServerSideProps = (context: Context) =>{
    return {
        props: {
            result: context.params.result
        },
    }
}

