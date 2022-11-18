import React, { useCallback, useEffect, useState } from "react";

import SliderImage from "./SliderImage";
import SliderButton from "./SliderButton";
import classes from "./Slider.module.css";
import { ICONS } from "../../static/config";

const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlideRight = useCallback(() => {
    slideIndex === 0
      ? setSlideIndex(props.data.length - 1)
      : setSlideIndex(slideIndex - 1);
  }, [props.data.length, slideIndex]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      moveSlideRight();
    }, 2000);

    return () => clearTimeout(timeoutID);
  }, [slideIndex, moveSlideRight]);

  const moveSlideLeft = () => {
    slideIndex + 1 === props.data.length
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  const images = props.data.map((item, index) => {
    return (
      <SliderImage
        visible={index === slideIndex}
        src={item.imageUrl}
        alt={item.name}
        key={index} // Added index as key because combined API data has same ids (API issue)
        id={item.id}
      />
    );
  });

  return (
    <div className={classes["container-slider"]}>
      {images}
      <SliderButton
        direction="prev"
        path={ICONS.left}
        moveSlide={moveSlideLeft}
      />
      <SliderButton
        direction="next"
        path={ICONS.right}
        moveSlide={moveSlideRight}
      />
    </div>
  );
};

export default Slider;
