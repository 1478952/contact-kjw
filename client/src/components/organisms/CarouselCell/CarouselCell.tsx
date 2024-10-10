import styles from "./CarouselCell.module.css";

interface CarouselCellProps {
  children: React.ReactNode;
  index: number;
  totalCellCount: number;
}

const CarouselCell = ({
  children,
  index,
  totalCellCount,
}: CarouselCellProps) => {
  const angle = 360 / totalCellCount;

  return (
    <div
      className={styles["carousel__cell"]}
      style={{
        transform: `rotateY(${angle * index}deg) translateZ(250px)`,
      }}
    >
      {children}
    </div>
  );
};

export default CarouselCell;
