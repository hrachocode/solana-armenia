import { FC } from "react";
import { IconProps } from "@/interfaces/IconInterface";

export const TelegramIcon: FC<IconProps> = ({
  width = "20",
  height = "20",
  color = "#ffffff",
  hoverColor = "#0B0517",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0.612338L16.8367 16.5609C16.8367 16.5609 16.3945 17.6668 15.1777 17.1359L7.84521 11.5238C8.83076 10.6378 16.4765 3.76393 16.8109 3.45221C17.3277 2.96978 17.007 2.68267 16.4062 3.04751L5.11276 10.2194L0.755697 8.75264C0.755697 8.75264 0.0697532 8.50928 0.00373698 7.97842C-0.0626698 7.44755 0.777962 7.16005 0.777962 7.16005L18.5402 0.192022C18.5402 0.192022 20 -0.44939 20 0.612338Z"
        fill={color}
        className={`group-hover:fill-[${hoverColor}]`}
      />
    </svg>
  );
};
