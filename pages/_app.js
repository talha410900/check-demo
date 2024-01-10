import React, { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import 'react-modern-drawer/dist/index.css'
import "swiper/css";
import 'react-calendar/dist/Calendar.css';
import "swiper/css/navigation";
import Loader from "../components/Loader";
import { Contextprovider } from "../context";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);
  // }, [])



  return (
    <Fragment>
      <Head>
        <title>Prenájom stavebnej techniky v Bratislave | Rentyx</title>
        <meta name="title" content="Prenájom stavebnej techniky v Bratislave | Rentyx" />
        <meta name="description" content="Rentyx ponúka širokú škálu stavebnej techniky na prenájom v Bratislave. Nájdite efektívne riešenia pre vaše stavebné projekty, od debnenia po zemné stroje a autodopravu. Kontaktujte nás dnes pre profesionálnu konzultáciu." />
        <meta name="keywords" content="Prenájom stavebnej techniky Bratislava, Stavebné stroje na prenájom Bratislava, Debnenie na prenájom Bratislava, Autodoprava pre stavebníctvo Bratislava, Malá mechanizácia prenájom Bratislava, Stavebné projekty Bratislava, Efektívne stavebné riešenia Bratislava, Zemné stroje prenájom Bratislava, Stavebná technika na prenájom Bratislava" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Rentyx" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Contextprovider>
        <Component {...pageProps} />
      </Contextprovider>
    </Fragment>
  );
}

export default MyApp;
