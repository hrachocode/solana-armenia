"use client";

import { FC, useRef } from "react";
import cn from "classnames";

import {
  ArrowBlackIcon,
  ArrowDisabledIcon,
  ArrowGreenIcon,
  ArrowIcon,
} from "@/components/UI/Icons";

import { ButtonProps } from "@/interfaces/ButtonInterface";
import {
  BUTTON_DIRECTION_NEXT,
  BUTTON_DIRECTION_BACK,
} from "@/constants/buttonConstants";

interface SliderButtonProps extends ButtonProps {
  direction: "back";
}

const SliderButton: FC<SliderButtonProps> = ({
  isFullWidth = false,
  disabled = false,
  type = "button",
  direction = BUTTON_DIRECTION_BACK,
  onClick,
}) => {
  const isNext = direction === BUTTON_DIRECTION_NEXT;
  const isBack = direction === BUTTON_DIRECTION_BACK;

  const buttonRef = useRef(null);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "h-40 w-40 py-15 pl-18 pr-16 px-28 rounded-xs group", // general
        "enabled:transition enabled:duration-700", // animation
        {
          "w-full": isFullWidth,
          "enabled:bg-purple-1": isNext,
          "enabled:hover:bg-green-1": isNext,
          "border-solid border-gray-2 bg-inherit": isBack,
          "enabled:hover:border-green-1 enabled:hover:bg-black-2": isBack,
        },
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <ArrowBlackIcon />
    </button>
  );
};

export default SliderButton;
