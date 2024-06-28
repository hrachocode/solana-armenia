"use client";

import { FC } from "react";
import cn from "classnames";

import { ButtonProps } from "@/interfaces/ButtonInterface";
import { ArrowGreenIcon } from "@/components/UI/Icons";

const IconButton: FC<ButtonProps> = ({
  children,
  isFullWidth = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={cn(
        "h-36 p-9 rounded-base cursor-pointer group", // general
        "bg-purple-1", // colors
        "hover:bg-green-1  ", // hover
        "enabled:transition enabled:duration-700", // animation
        {
          "w-full": isFullWidth,
        },
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
