/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import styles from "./Login.module.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {
  toggled?: boolean;
  onSwitch?: () => void;
}

export const Login = ({ toggled = false, onSwitch }: LoginProps) => {
  const [currentToggled, setToggled] = useState(toggled);
  const toggleSignup = () => {
    setToggled((prev) => !prev);
    onSwitch && onSwitch();
  };
  return (
    <div
      className={`${styles.cont}${currentToggled ? " " + styles.sSignup : ""}`}
    >
      <div className={`${styles.form} ${styles.signIn}`}>
        <h2 className={styles.title}>Willkommen zurück</h2>
        <label className={styles.label}>
          <span>Email</span>
          <input type="email" className={styles.input} />
        </label>
        <label className={styles.label}>
          <span>Passwort</span>
          <input type="password" className={styles.input} />
        </label>
        <p className={styles.forgotPass}>Passwort vergessen?</p>
        <button type="button" className={`${styles.submit} ${styles.button}`}>
          Einloggen
        </button>
        <button type="button" className={`${styles.fbBtn} ${styles.button}`}>
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
            <input type="password" className={styles.input} />
          </label>
          <label className={styles.label}>
            <span>Passwort bestätigen</span>
            <input type="password" className={styles.input} />
          </label>
          <button type="button" className={`${styles.submit} ${styles.button}`}>
            Registrieren
          </button>
          <button type="button" className={`${styles.fbBtn}, ${styles.button}`}>
            Mit <span>Google</span> verbinden
          </button>
        </div>
      </div>
    </div>
  );
};
