/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "./Navbar.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={`${styles.nav} ${styles.navbar}`}>
        <li className={styles.navItem}>
          <a href="/">HOME</a>
        </li>
        <li className={styles.navItem}>
          <a href="/project/">UNSER PROJEKT</a>
        </li>
        <li className={`${styles.navItem} ${styles.active}`}>
          <a href="https://myclimate-50-steps.github.io/map/">MAP</a>
        </li>
        <li className={styles.navItem}>
          <a href="/map/login">KONTO</a>
        </li>
        <li className={styles.navItem}>
          <a href="/about/">ÜBER UNS</a>
        </li>
      </ul>
    </nav>
  );
};
