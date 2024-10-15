"use client";
import styles from "./Slider.module.css";

import SliderContent from "@/components/atoms/sliderContents/SldierContent";
import React, { useState } from "react";

interface SliderProps {
  data: {
    children?: React.ReactNode;
    bgColor: string;
  }[];
}

const boxWidth = 362;

const Slider = ({ data }: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const getStyles = (index: number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  const handleClickSlide = (index: number) => () => {
    setActiveSlide(index);
  };

  return (
    <div className={styles["slideC"]}>
      {data.map((item, i) => (
        <React.Fragment key={i}>
          <div
            className={styles["slide"]}
            onClick={handleClickSlide(i)}
            style={{
              background: item.bgColor,
              boxShadow: `0 5px 20px ${item.bgColor}30`,
              ...getStyles(i),
            }}
          >
            <SliderContent {...item} />
          </div>
          <div
            className={styles["reflection"]}
            style={{
              background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
              ...getStyles(i),
            }}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;
