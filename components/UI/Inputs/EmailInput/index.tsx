import { FC } from "react";
import cn from "classnames";
import {
  INPUT_SIZE_LARGE,
  INPUT_SIZE_MEDIUM,
} from "@/constants/inputConstants";
import { EmailIcon } from "@/components/UI/Icons";

interface EmailInputProps {
  size?: string;
  placeholder?: string;
  maxLength?: number;
  isFullWidth?: boolean;
  isTransparent?: boolean;
}

const EmailInput: FC<EmailInputProps> = ({
  placeholder,
  maxLength,
  size = INPUT_SIZE_LARGE,
  isFullWidth = false,
  isTransparent = false,
}) => {
  const isSizeMedium = size === INPUT_SIZE_MEDIUM;
  const isSizeLarge = size === INPUT_SIZE_LARGE;

  return (
    <div className="flex items-center relative">
      <div className="absolute left-22">
        <EmailIcon />
      </div>
      <input
        type="text"
        className={cn(
          "bg-white-2 rounded-sm p-20 pl-46 text-heading text-blue-2 placeholder-pink-2",
          {
            "h-73": isSizeLarge,
            "h-63": isSizeMedium,
            "w-full": isFullWidth,
            "bg-transparent": isTransparent,
            // "bg-white-2": !isTransparent,
          },
        )}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default EmailInput;
