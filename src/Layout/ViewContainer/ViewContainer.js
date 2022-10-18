import React from "react";

import { ICONS, STRINGS } from "../../static/config";
import Button from "../Button/Button";
import Svg from "../Svg/Svg";
import classes from "./ViewContainer.module.css";

const ViewContainer = (props) => {
  const types = props.data.type.split(" ");
  const listInformation = types.map((type) => {
    return <p key={type}>{type}</p>;
  });
  return (
    <div className={classes["container-details"]}>
      <p className={classes.title}>{props.data.name}</p>
      <div>
        <img src={props.data.imageUrl} alt={props.data.name}></img>
        <div>
          <p className={classes["sub-text"]}>{props.data.language}</p>
          <div className={classes["list-info"]}>{listInformation}</div>
          <div className={classes.rating}>
            <p>{props.data.rate}</p>
            <Svg path={ICONS.star} />
          </div>
        </div>
      </div>
      <Button onClick={props.onClickHandler} title={STRINGS.bookNow} />
    </div>
  );
};

export default ViewContainer;
