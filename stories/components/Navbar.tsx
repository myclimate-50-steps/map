/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import "./Navbar.css";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="navbar-container">
      <ul className="nav navbar">
        <li className="nav-item">
          <a href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a href="/project/">UNSER PROJEKT</a>
        </li>
        <li className="nav-item active">
          <a href="https://myclimate-50-steps.github.io/map/">MAP</a>
        </li>
        <li className="nav-item">
          <a href="#">KONTO</a>
        </li>
        <li className="nav-item">
          <a href="/about/">ÜBER UNS</a>
        </li>
        <li className="nav-item">
          <a href="#">KONTAKT</a>
        </li>
      </ul>
    </nav>
  );
};
