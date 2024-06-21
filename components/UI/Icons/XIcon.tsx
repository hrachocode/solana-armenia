import { FC } from "react";
import { IconProps } from "@/interfaces/IconInterface";

export const XIcon: FC<IconProps> = ({
  width = "18",
  height = "18",
  color = "#ffffff",
  hoverColor = "#0B0517",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7124 7.62177L17.4133 0H15.8254L10.0071 6.61788L5.35992 0H0L7.02738 10.0074L0 18H1.58799L7.73237 11.0113L12.6401 18H18L10.7121 7.62177H10.7124ZM8.53747 10.0956L7.82546 9.09906L2.16017 1.16971H4.59922L9.17118 7.56895L9.8832 8.56546L15.8262 16.8835H13.3871L8.53747 10.096V10.0956Z"
        fill={color}
        className={`group-hover:fill-[${hoverColor}]`}
      />
    </svg>
  );
};
