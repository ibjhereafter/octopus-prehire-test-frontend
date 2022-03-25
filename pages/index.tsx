import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CurrencyList from "../components/currencies/CurrencyList";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Octopus-prehire-test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <CurrencyList />
    </div>
  )
}

export default Home
