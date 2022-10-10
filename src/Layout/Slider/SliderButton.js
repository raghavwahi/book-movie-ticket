import React from "react";

import { SLIDER_ICONS } from "../../static/config";

const SliderButton = (props) => {
  return (
    <button onClick={props.moveSlide}>
      <svg xmlns={SLIDER_ICONS.url} width="24" height="24" viewBox="0 0 24 24">
        <path d={props.path} />
      </svg>
    </button>
  );
};

export default SliderButton;
