"use client";

import { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "@/interfaces/ButtonInterface";

const SecondaryButton: FC<ButtonProps> = ({
  children,
  styles = "",
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "h-50 uppercase py-18 px-20 rounded-sm text-xs font-press", // general
        "enabled:bg-purple-1 enabledtext-white-1", // colors
        "enabled:hover:bg-green-1 enabled:hover:text-black-1", // hover
        "enabled:transition enabled:duration-700", // animation
        {
          "w-full": fullWidth,
          "bg-gray-2 text-white-3 cursor-default border-none": disabled,
          [styles]: [styles],
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
