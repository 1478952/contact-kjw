import { memo } from "react";

interface SliderContentProps {
  children?: React.ReactNode;
}

const SliderContent = ({ children }: SliderContentProps) => {
  return (
    <div className="flex flex-col text-white p-8 items-start">{children}</div>
  );
};

export default memo(SliderContent);
