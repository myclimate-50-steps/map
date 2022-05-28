import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../../stories/components/login/Login";
import styles from "../../styles/LoginPage.module.css";
import { LoginMobile } from "../../stories/components/loginMobile/LoginMobile";
import { auth } from "../../firebase/clientApp";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
import router from "next/router";

const LoginPage: NextPage = () => {
  const [current, setCurrent] = useState(true);
  const toggle = (): void => {
    history.pushState(null, "", current ? "register" : "login");
    setCurrent((prev) => !prev);
  };
  React.useEffect((): void => {
    setPersistence(auth, browserLocalPersistence).then((): void => {
      if (auth.currentUser) {
        router.push("/");
      }
    });
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>MyClimate Map | {current ? "Login" : "Register"}</title>
        <meta name="description" content="MyClimate Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`grid place-items-center h-screen ${styles.media}`}>
        <Login onSwitch={toggle}></Login>
      </div>
      <div className={`grid place-items-center h-screen ${styles.mediaMobile}`}>
        <LoginMobile onSwitch={toggle}></LoginMobile>
      </div>
    </div>
  );
};

export default LoginPage;
