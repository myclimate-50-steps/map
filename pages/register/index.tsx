import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../../stories/components/login/Login";
import styles from "../../styles/LoginPage.module.css";

const RegisterPage: NextPage = () => {
  const [current, setCurrent] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>MyClimate Map | {current ? "Register" : "Login"}</title>
        <meta name="description" content="MyClimate Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login
        toggled
        onSwitch={() => {
          history.pushState(null, "", current ? "login" : "register");
          setCurrent((prev) => !prev);
        }}
      ></Login>
    </div>
  );
};

export default RegisterPage;
