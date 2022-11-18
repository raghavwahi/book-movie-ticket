import React from "react";

import { ICONS, STRINGS } from "../../static/config";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Svg from "../Svg/Svg";
import classes from "./ViewContainer.module.css";

const ViewContainer = (props) => {
  const types = props.data.type.split(" ");
  const listInformation = types.map((type) => {
    return <p key={type}>{type}</p>;
  });

  return (
    <Container>
      <p className={classes.title}>{props.data.name}</p>
      <div className={classes["sub-container"]}>
        <img
          className={classes.shadow}
          src={props.data.imageUrl}
          alt={props.data.name}
        ></img>
        <div>
          <p className={classes["sub-text"]}>{props.data.language}</p>
          <div className={classes["list-info"]}>{listInformation}</div>
          <div className={classes.rating}>
            <p>{props.data.rate}</p>
            <Svg path={ICONS.star} />
          </div>
        </div>
      </div>
      <Button
        className={classes.shadow}
        onClick={props.onClick}
        title={STRINGS.bookNow}
      />
    </Container>
  );
};

export default ViewContainer;
