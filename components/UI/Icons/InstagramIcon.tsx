import { FC } from "react";
import { IconProps } from "@/interfaces/IconInterface";

export const InstagramIcon: FC<IconProps> = ({
  width = "20",
  height = "20",
  color = "#ffffff",
  hoverColor = "#0B0517",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6.33252C7.97603 6.33252 6.33203 7.97652 6.33203 10.0005C6.33203 12.0245 7.97603 13.6725 10 13.6725C12.024 13.6725 13.672 12.0245 13.672 10.0005C13.672 7.97652 12.024 6.33252 10 6.33252Z"
        fill={color}
        className={`group-hover:fill-[${hoverColor}]`}
      />
      <path
        d="M15.536 0H4.464C2.004 0 0 2.004 0 4.464V15.536C0 18 2.004 20 4.464 20H15.536C18 20 20 18 20 15.536V4.464C20 2.004 18 0 15.536 0ZM10 16.48C6.428 16.48 3.52 13.572 3.52 10C3.52 6.428 6.428 3.524 10 3.524C13.572 3.524 16.48 6.428 16.48 10C16.48 13.572 13.572 16.48 10 16.48ZM16.616 4.7C15.86 4.7 15.244 4.088 15.244 3.332C15.244 2.576 15.86 1.96 16.616 1.96C17.372 1.96 17.988 2.576 17.988 3.332C17.988 4.088 17.372 4.7 16.616 4.7Z"
        fill={color}
        className={`group-hover:fill-[${hoverColor}]`}
      />
    </svg>
  );
};
