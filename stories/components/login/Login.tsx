/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import styles from "./Login.module.css";

import { auth, provider } from "../../../firebase/clientApp";
import {
  signInWithRedirect,
  setPersistence,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {
  toggled?: boolean;
  onSwitch?: () => void;
}

export const Login = ({ toggled = false, onSwitch }: LoginProps) => {
  const [currentToggled, setToggled] = useState(toggled);
  const [getEmail, setEmail] = useState(String);
  const [getPassword, setPassword] = useState(String);
  const [getPasswordConfirm, setPasswordConfirm] = useState(String);
  const toggleSignup = (): void => {
    setToggled((prev) => !prev);
    onSwitch && onSwitch();
  };
  const loginGoogle = (): void => {
    signInWithRedirect(auth, provider).then(() => {
      setPersistence(auth, browserLocalPersistence);
    });
  };
  const forgotPassword = (): void => {
    sendPasswordResetEmail(auth, getEmail)
      .then((): void => {
        alert("Password reset sent.");
      })
      .catch((error): void => {
        alert(error.message);
      });
  };
  const loginPassword = (): void => {
    signInWithEmailAndPassword(auth, getEmail, getPassword)
      .then((): void => {
        setPersistence(auth, browserLocalPersistence);
      })
      .catch((error): void => {
        alert(error.message);
      });
  };
  const registerPassword = (): void => {
    createUserWithEmailAndPassword(auth, getEmail, getPassword)
      .then((): void => {
        setPersistence(auth, browserLocalPersistence);
      })
      .catch((error): void => {
        alert(error.message);
      });
  };
  return (
    <div
      className={`${styles.cont}${currentToggled ? " " + styles.sSignup : ""}`}
    >
      <div className={`${styles.form} ${styles.signIn}`}>
        <h2 className={styles.title}>Willkommen zurück</h2>
        <label className={styles.label}>
          <span>Email</span>
          <input
            value={getEmail}
            onChange={(event): void => {
              setEmail(event.currentTarget.value);
            }}
            type="email"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          <span>Passwort</span>
          <input type="password" className={styles.input} />
        </label>
        <p
          onClick={forgotPassword}
          className={`hover:cursor-pointer ${styles.forgotPass}`}
        >
          Passwort vergessen?
        </p>
        <button
          onClick={loginPassword}
          type="button"
          className={`${styles.submit} ${styles.button}`}
        >
          Einloggen
        </button>
        <button
          type="button"
          onClick={loginGoogle}
          className={`${styles.fbBtn} ${styles.button}`}
        >
          Mit <span>Google</span> verbinden
        </button>
      </div>
      <div className={styles.subCont}>
        <div className={styles.img}>
          <div className={`${styles.imgText} ${styles.mUp}`}>
            <h2 className={styles.title}>Neu?</h2>
            <p>
              Registriere dich und unternehme etwas für deinen CO2-Verbrauch!
            </p>
          </div>
          <div className={`${styles.imgText} ${styles.mIn}`}>
            <h2 className={styles.title}>Bereits registriert?</h2>
            <p>Dann logge dich ein!</p>
          </div>
          <div className={styles.imgBtn} onClick={toggleSignup}>
            <span className={styles.mUp}>Registrieren</span>
            <span className={styles.mIn}>Einloggen</span>
          </div>
        </div>
        <div className={`${styles.form} ${styles.signUp}`}>
          <h2 className={styles.title}>Zeit etwas zu verändern!</h2>
          <label className={styles.label}>
            <span>Email</span>
            <input type="email" className={styles.input} />
          </label>
          <label className={styles.label}>
            <span>Passwort</span>
            <input
              value={getPassword}
              onChange={(event): void => {
                setPassword(event.target.value);
              }}
              type="password"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <span>Passwort bestätigen</span>
            <input
              value={getPasswordConfirm}
              onChange={(event): void => {
                setPasswordConfirm(event.target.value);
              }}
              type="password"
              className={styles.input}
            />
          </label>
          <button
            onClick={registerPassword}
            type="button"
            className={`${styles.submit} ${styles.button}`}
          >
            Registrieren
          </button>
          <button
            type="button"
            onClick={loginGoogle}
            className={`${styles.fbBtn} ${styles.button}`}
          >
            Mit <span>Google</span> verbinden
          </button>
        </div>
      </div>
    </div>
  );
};
