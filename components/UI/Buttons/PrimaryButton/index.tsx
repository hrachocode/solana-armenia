"use client";

import { FC } from "react";
import cn from "classnames";
import { ButtonProps } from "@/interfaces/ButtonInterface";

interface PrimaryButtonProps extends ButtonProps {
  hasBorder?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  children,
  isFullWidth = false,
  disabled = false,
  type = "button",
  onClick = () => {},
  hasBorder = false,
}) => {
  return (
    <button
      className={cn(
        "h-63 uppercase  py-23 px-41 rounded-sm text-sm font-press", // general
        " enabled:bg-green-1 enabled:text-black-1", // colors
        "enabled:hover:bg-purple-1 enabled:hover:text-white-1", // hover
        "enabled:transition enabled:duration-700", // animation
        {
          "w-full": isFullWidth,
          "bg-gray-2 text-white-3 cursor-default border-none": disabled,
          "border-solid enabled:border-green-1 enabled:hover:border-white-1":
            hasBorder,
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

export default PrimaryButton;
