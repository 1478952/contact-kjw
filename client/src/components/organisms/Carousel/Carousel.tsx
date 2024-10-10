"use client";

import styles from "./Carousel.module.css";
import { useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  totalCellCount: number;
}

const Carousel = ({ children, totalCellCount }: CarouselProps) => {
  const [rotation, setRotation] = useState(0);
  const angle = 360 / totalCellCount;

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + angle);
    }, 3000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 정리
  }, [angle]);

  return (
    <div className={styles["scene"]}>
      <div
        className={styles["carousel"]}
        style={{
          transform: `rotateY(${rotation}deg)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
