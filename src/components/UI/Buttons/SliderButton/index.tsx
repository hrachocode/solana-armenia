"use client";

import { FC, useRef } from "react";
import cn from "classnames";

import { ArrowBlackIcon, ArrowIcon } from "@/components/UI/Icons";
import { useHandleIcon } from "@/hooks/useHandleIcon";
import { ButtonProps } from "@/interfaces/ButtonInterface";

const SliderButton: FC<ButtonProps> = ({
  styles = "",
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  const buttonRef = useRef(null);

  const currentIcon = useHandleIcon({
    icon: <ArrowIcon />,
    hoverIcon: <ArrowBlackIcon />,
    ref: buttonRef,
  });

  return (
    <button
      ref={buttonRef}
      className={cn(
        "h-40 w-40 py-15 pl-18 pr-16 px-28 rounded-xs group", // general
        "enabled:bg-purple-1", // colors
        "enabled:hover:bg-green-1", // hover
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
      {currentIcon}
    </button>
  );
};

export default SliderButton;
