import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Login } from "../../stories/components/login/Login";
import styles from "../../styles/LoginPage.module.css";

const LoginPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>50 - Steps - Login</title>
        <meta name="description" content="MyClimate Map | Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login></Login>
    </div>
  );
};

export default LoginPage;
