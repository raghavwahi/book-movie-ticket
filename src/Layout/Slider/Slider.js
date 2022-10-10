import React, { useCallback, useEffect, useState } from "react";

import SliderImage from "./SliderImage";
import SliderButton from "./SliderButton";
// import classes from "./Slider.module.css";
import { SLIDER_ICONS } from "../../static/config";

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
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, [slideIndex, moveSlideRight]);

  const moveSlideLeft = () => {
    slideIndex + 1 === props.data.length
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };

  const images = props.data
    .filter((item, index) => {
      return index === slideIndex;
    })
    .map((item) => {
      return (
        <SliderImage
          src={item.imageUrl}
          alt={item.name}
          key={item._id}
          id={item._id}
        />
      );
    });

  return (
    <div className="container-slider">
      {images}
      <SliderButton path={SLIDER_ICONS.left} moveSlide={moveSlideLeft} />
      <SliderButton path={SLIDER_ICONS.right} moveSlide={moveSlideRight} />
    </div>
  );
};

export default Slider;
