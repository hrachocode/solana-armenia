import { FC } from "react";
import { IconProps } from "@/interfaces/IconInterface";

export const ArrowIcon: FC<IconProps> = ({
  width = "12",
  height = "12",
  color = "#ffffff",
  disabled = false,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M0 9L3.75 5.25L0 1.5L0.75 0L6 5.25L0.75 10.5L0 9Z"
        fill={color}
      />
    </svg>
  );
};
