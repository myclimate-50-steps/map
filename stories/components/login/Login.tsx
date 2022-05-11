/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import "./Login.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginProps {
  toggled: boolean;
}

const toggleSignup = () => {
  document.querySelector(".cont")?.classList.toggle("s--signup");
};

export const Login = ({ toggled = false }: LoginProps) => {
  return (
    <div className={`cont ${toggled ? "s--signup" : ""}`}>
      <div className="form sign-in">
        <h2>Willkommen zurück</h2>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Passwort</span>
          <input type="password" />
        </label>
        <p className="forgot-pass">Passwort vergessen?</p>
        <button type="button" className="submit">
          Einloggen
        </button>
        <button type="button" className="fb-btn">
          Mit <span>Google</span> verbinden
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h2>Neu?</h2>
            <p>
              Registriere dich und unternehme etwas für deinen CO2-Verbrauch!
            </p>
          </div>
          <div className="img__text m--in">
            <h2>Bereits registriert?</h2>
            <p>Dann logge dich ein!</p>
          </div>
          <div className="img__btn" onClick={toggleSignup}>
            <span className="m--up">Registrieren</span>
            <span className="m--in">Einloggen</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Zeit etwas zu verändern!</h2>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Passwort</span>
            <input type="password" />
          </label>
          <label>
            <span>Passwort bestätigen</span>
            <input type="password" />
          </label>
          <button type="button" className="submit">
            Registrieren
          </button>
          <button type="button" className="fb-btn">
            Mit <span>Google</span> verbinden
          </button>
        </div>
      </div>
    </div>
  );
};
