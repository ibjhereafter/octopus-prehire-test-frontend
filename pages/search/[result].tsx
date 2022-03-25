import React, { Fragment, FC, ReactElement, useEffect } from 'react';
import { connect } from "react-redux";
import { startGetCurrency } from "../../components/httpRequest/getCurrency";
import { StoreState, SearchResult, Currency, Context } from "../../components/types";
import Link from "next/link";
import styles from "../../styles/currencies/currency.module.css";
import style from "../../styles/currencies/search.module.css";
import Search from "../../components/currencies/Search";
import Head from "next/head";

type ResultProps = {
    result: string,
    startGetCurrency: typeof startGetCurrency,
    searchResult: SearchResult
}

const Result:FC<ResultProps> = ({ result, startGetCurrency, searchResult }): ReactElement => {

    useEffect(() => {
        startGetCurrency(result);
    }, [result, startGetCurrency])

    // @ts-ignore
    const currency = searchResult.result.map((currency: Currency) => {
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
            <Head>
                <title>Search</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.container}>
                <Search startGetCurrency={startGetCurrency}/>
                <Link href={"/"} passHref>
                    <button className={style.button}>All Currencies</button>
                </Link>
                <div>
                    <div className={styles.heading}>
                        <div>Currency Code</div>
                        <div>Currency Country</div>
                    </div>
                    <div>{currency}</div>
                </div>
                {
                    // @ts-ignore
                    searchResult?.result?.length === 0 ? <div>
                        <strong className={style.error}>Such a currency does not exist in our database! Did you make a typo :)</strong>
                    </div>: null
                }
            </section>
        </Fragment>
    );
};

const mapStateToProps = (state: StoreState) => {
    return {
        searchResult: state?.searchResult
    }
};


// @ts-ignore
export default connect(mapStateToProps, { startGetCurrency })(Result);


export const getServerSideProps = (context: Context) =>{
    return {
        props: {
            result: context.params.result
        },
    }
}


