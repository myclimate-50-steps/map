import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { auth } from "../firebase/clientApp";
import { useRouter } from "next/router";
import { browserLocalPersistence, setPersistence } from "firebase/auth";

const Home: NextPage = () => {
  const router = useRouter();
  React.useEffect((): void => {
    setPersistence(auth, browserLocalPersistence).then((): void => {
      if (!auth.currentUser) {
        router.push("/login");
      }
    });
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>50 - Steps - Map</title>
        <meta name="description" content="MyClimate Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
