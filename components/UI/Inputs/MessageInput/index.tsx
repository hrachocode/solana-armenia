import { FC } from "react";
import cn from "classnames";

import {
  INPUT_MESSAGE_SIZE_LARGE,
  INPUT_MESSAGE_SIZE_MEDIUM,
} from "@/constants/inputConstants";
import { MessageIcon } from "@/components/UI/Icons";

interface MessageInputProps {
  size?: string;
  placeholder?: string;
  maxLength?: number;
  isFullWidth?: boolean;
}

const MessageInput: FC<MessageInputProps> = ({
  placeholder,
  maxLength,
  size = INPUT_MESSAGE_SIZE_LARGE,
  isFullWidth = false,
}) => {
  const isSizeMedium = size === INPUT_MESSAGE_SIZE_MEDIUM;
  const isSizeLarge = size === INPUT_MESSAGE_SIZE_LARGE;

  return (
    <div className="flex items-center relative">
      <div className="absolute left-22 top-26">
        <MessageIcon />
      </div>
      <textarea
        className={cn(
          "bg-white-2 rounded-sm p-20 pl-46 pr-236 text-heading text-blue-2 placeholder-pink-2 resize-none",
          {
            "h-73": isSizeMedium,
            "h-120": isSizeLarge,
            "w-full": isFullWidth,
          },
        )}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
};

export default MessageInput;
