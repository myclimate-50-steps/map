import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../../stories/components/login/Login";
import { LoginMobile } from "../../stories/components/loginMobile/LoginMobile";
import styles from "../../styles/LoginPage.module.css";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { auth } from "../../firebase/clientApp";
import router from "next/router";

const RegisterPage: NextPage = () => {
  const [current, setCurrent] = useState(true);
  const toggle = (): void => {
    history.pushState(null, "", current ? "login" : "register");
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
        <title>MyClimate Map | {current ? "Register" : "Login"}</title>
        <meta name="description" content="MyClimate Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`grid place-items-center h-screen ${styles.media}`}>
        <Login toggled onSwitch={toggle}></Login>
      </div>
      <div className={`grid place-items-center h-screen ${styles.mediaMobile}`}>
        <LoginMobile toggled onSwitch={toggle}></LoginMobile>
      </div>
    </div>
  );
};

export default RegisterPage;
