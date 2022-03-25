import styles from '../../styles/currencies/currency.module.css';
import React, { useEffect, Fragment, FC, ReactElement, useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";

import { StoreState, Currencies, Currency } from "../types";
import { startGetCurrencies } from "../httpRequest/getCurrencies";
import { startGetCurrency } from "../httpRequest/getCurrency";
import { getCurrencyList } from "../utilities/dataProcessor";
import Search from "./Search";
import Loader from "../utilities/Loader";

type CurrencyListProps = {
    currencies: Currencies,
    startGetCurrencies: typeof startGetCurrencies,
    startGetCurrency: typeof startGetCurrency
}

const CurrencyList: FC<CurrencyListProps> = ({ currencies, startGetCurrencies, startGetCurrency }): ReactElement => {
    useEffect(() => {
        startGetCurrencies();
    }, [startGetCurrencies])

    const list = getCurrencyList(currencies);

    const listOfCurrencies = list?.map((currency: Currency) => {
        return (
            <Fragment key={currency?._id}>
                <Link href={`/details/${currency.code}`} passHref>
                    <div className={styles.data}>
                        <div className={`${styles.dataItem} ${styles.cursor}`}>{currency?.code}</div>
                        <div className={styles.cursor}>{currency?.country}</div>
                    </div>
                </Link>
            </Fragment>
        )
    })

    return (
        <Fragment>
            <section className={styles.container}>
                <Search startGetCurrency={startGetCurrency}/>
                {
                    list.length === 0 ? <Loader /> : <div>
                        <div>
                            <div className={styles.heading}>
                                <div>Currency Code</div>
                                <div>Currency Country</div>
                            </div>
                            <div>{listOfCurrencies}</div>
                        </div>
                    </div>
                }
            </section>
        </Fragment>
    )
};

const mapStateToProps = (state: StoreState) => {
    return {
        currencies: state?.currencies,
    }
}

// @ts-ignore
export default connect(mapStateToProps, { startGetCurrencies, startGetCurrency })(CurrencyList);