/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import styles from "./LoginMobile.module.css";

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
  const toggleSignup = (): void => {
    setToggled((prev) => !prev);
    onSwitch && onSwitch();
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
                <input id="email" type="email" className={styles.input} />
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
                />
              </div>
              <div className={styles.group}>
                <input
                  type="submit"
                  className={styles.button}
                  value="Einloggen"
                />
              </div>
              <div className={styles.group}>
                <button type="submit" className={styles.fbBtn}>
                  Mit <span>Google</span> einloggen
                </button>
              </div>
              <div className={styles.footLnk}>
                <a id="forgot">Passwort vergessen?</a>
              </div>
            </div>
            <div className={styles.signUpHtm}>
              <div className={styles.group}>
                <label htmlFor="email" className={styles.label}>
                  E-Mail
                </label>
                <input id="email" type="email" className={styles.input} />
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
                />
              </div>
              <div className={styles.group}>
                <input
                  type="submit"
                  className={styles.button}
                  value="Registrieren"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
