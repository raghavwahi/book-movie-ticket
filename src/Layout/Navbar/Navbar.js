import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { NAVBAR_LINKS } from "../../static/config";
import InputField from "../InputField/InputField";
import classes from "./Navbar.module.css";
import actions from "./actions";

const Navbar = () => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSearchValue(inputSearchValue));
  }, [dispatch, inputSearchValue]);

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
      <div className={classes.searchbox}>
        <InputField
          placeholder="Search"
          onChange={(event) => setInputSearchValue(event.target.value)}
          value={inputSearchValue}
        />
      </div>
    </header>
  );
};

export default Navbar;
