"use client";

import { FC } from "react";
import cn from "classnames";

import { ButtonProps } from "@/interfaces/ButtonInterface";
import { ArrowGreenIcon } from "@/components/UI/Icons";

const OutlinedButton: FC<ButtonProps> = ({
  children,
  isFullWidth = false,
  disabled = false,
  type = "button",
  onClick,
}) => {
  return (
    <button
      className={cn(
        "h-63 uppercase py-23 px-28 rounded-sm text-sm font-press bg-none border border-solid", // general
        "enabled:border-white-1 enabled:text-white-1", // colors
        "enabled:hover:bg-black-2 enabled:hover:border-green-1 enabled:hover:text-green-1", // hover
        "enabled:transition enabled:duration-700", // animation
        {
          "w-full": isFullWidth,
          "bg-gray-2 text-white-3 cursor-default border-none": disabled,
        },
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
