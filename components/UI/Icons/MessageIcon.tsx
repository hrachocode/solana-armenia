import { FC } from "react";
import { IconProps } from "@/interfaces/IconInterface";

export const MessageIcon: FC<IconProps> = ({
  width = "16",
  height = "15",
  color = "#2F1569",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.32955 14.0874H1.19586L1.9975 13.2857C2.42973 12.8535 2.69964 12.2913 2.77221 11.6815C0.92122 10.4668 0 8.70703 0 6.86221C0 3.45873 3.12812 0 8.02711 0C13.2171 0 16 3.18268 16 6.56403C16 9.96766 13.1877 13.1482 8.02711 13.1482C7.12311 13.1482 6.17979 13.0275 5.33758 12.8061C4.54033 13.6238 3.46011 14.0874 2.32955 14.0874Z"
        fill={color}
      />
    </svg>
  );
};
