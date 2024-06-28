import { FC } from "react";
import cn from "classnames";

import {
  INPUT_SIZE_LARGE,
  INPUT_SIZE_MEDIUM,
} from "@/constants/inputConstants";
import { PersonIcon } from "@/components/UI/Icons";

interface NameInputProps {
  size?: string;
  placeholder?: string;
  maxLength?: number;
  isFullWidth?: boolean;
}

const NameInput: FC<NameInputProps> = ({
  placeholder,
  maxLength,
  size = INPUT_SIZE_LARGE,
  isFullWidth = false,
}) => {
  const isSizeMedium = size === INPUT_SIZE_MEDIUM;
  const isSizeLarge = size === INPUT_SIZE_LARGE;

  return (
    <div className="flex items-center relative">
      <div className="absolute left-22">
        <PersonIcon />
      </div>
      <input
        type="text"
        className={cn(
          "bg-white-2 rounded-sm p-20 pl-46 text-heading text-blue-2 placeholder-pink-2",
          {
            "h-73": isSizeLarge,
            "h-63": isSizeMedium,
            "w-full": isFullWidth,
          },
        )}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default NameInput;
