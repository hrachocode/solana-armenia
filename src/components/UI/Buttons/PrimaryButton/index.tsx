"use client";

import { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "@/interfaces/ButtonInterface";

const PrimaryButton: FC<ButtonProps> = ({
  children,
  styles = "",
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "h-63 uppercase border-solid py-23 px-41 rounded-sm text-sm font-press", // general
        "enabled:border-green-1 enabled:bg-green-1 enabled:text-black-1", // colors
        "enabled:hover:bg-purple-1 enabled:hover:text-white-1  enabled:hover:border-white-1", // hover
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

export default PrimaryButton;
