import React from "react";
import { Link } from "react-router-dom";

import { NAVBAR_LINKS } from "./../static/config";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const linkList = NAVBAR_LINKS.map((link) => {
    return (
      <li key={link.linkText}>
        <Link to={link.path}>{link.linkText}</Link>
      </li>
    );
  });

  return (
    <header className={classes.header}>
      <nav>
        <ul>{linkList}</ul>
      </nav>
    </header>
  );
};

export default Navbar;
