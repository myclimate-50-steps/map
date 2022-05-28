/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import styles from "./LoginMobile.module.css";

import { auth, provider } from "../../../firebase/clientApp";
import {
  signInWithRedirect,
  setPersistence,
  browserLocalPersistence,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginMobileProps {
  toggled?: boolean;
  onSwitch?: () => void;
}

export const LoginMobile = ({
  toggled = false,
  onSwitch,
}: LoginMobileProps) => {
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
    <div className={styles.container}>
      <div className={styles.loginWrap}>
        <div className={styles.loginHtml}>
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className={styles.signIn}
            onChange={toggleSignup}
            checked={!currentToggled}
          />
          <label htmlFor="tab-1" className={styles.tab}>
            Sign in
          </label>
          <input
            id="tab-2"
            type="radio"
            name="tab"
            className={styles.signUp}
            onChange={toggleSignup}
            checked={currentToggled}
          />
          <label htmlFor="tab-2" className={styles.tab}>
            Sign up
          </label>
          <div className={styles.loginForm}>
            <div className={styles.signInHtm}>
              <div className={styles.group}>
                <label htmlFor="email" className={styles.label}>
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={getEmail}
                  onChange={(event): void => {
                    setEmail(event.currentTarget.value);
                  }}
                  className={styles.input}
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="pass" className={styles.label}>
                  Passwort
                </label>
                <input
                  id="pass"
                  type="password"
                  className={styles.input}
                  data-type="password"
                  value={getPassword}
                  onChange={(event): void => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className={styles.group}>
                <input
                  type="submit"
                  className={styles.button}
                  value="Einloggen"
                  onClick={loginPassword}
                />
              </div>
              <div className={styles.group}>
                <button
                  type="submit"
                  onClick={loginGoogle}
                  className={styles.fbBtn}
                >
                  Mit <span>Google</span> verbinden
                </button>
              </div>
              <div className={styles.footLnk}>
                <a onClick={forgotPassword} id="forgot">
                  Passwort vergessen?
                </a>
              </div>
            </div>
            <div className={styles.signUpHtm}>
              <div className={styles.group}>
                <label htmlFor="email" className={styles.label}>
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  value={getEmail}
                  onChange={(event): void => {
                    setEmail(event.currentTarget.value);
                  }}
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="pass" className={styles.label}>
                  Passwort
                </label>
                <input
                  id="pass"
                  type="password"
                  className={styles.input}
                  data-type="password"
                  value={getPassword}
                  onChange={(event): void => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="pass" className={styles.label}>
                  Passwort bestätigen
                </label>
                <input
                  id="pass"
                  type="password"
                  className={styles.input}
                  data-type="password"
                  value={getPasswordConfirm}
                  onChange={(event): void => {
                    setPasswordConfirm(event.target.value);
                  }}
                />
              </div>
              <div className={styles.group}>
                <input
                  type="submit"
                  className={styles.button}
                  value="Registrieren"
                  onClick={registerPassword}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
