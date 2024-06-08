import { RefObject, useEffect, useState, ReactNode, useCallback } from "react";

import { ArrowDisabledIcon } from "@/components/UI/Icons";

interface UseHandleIconProps {
  ref: RefObject<HTMLElement>;
  icon: ReactNode;
  hoverIcon: ReactNode;
  disabled?: boolean;
}

export const useHandleIcon = ({
  ref,
  icon,
  hoverIcon,
  disabled,
}: UseHandleIconProps) => {
  const [currentIcon, setCurrentIcon] = useState<ReactNode>(icon);

  const setOnDuration = (setIcon: ReactNode): void => {
    setTimeout(() => {
      setCurrentIcon(setIcon);
    }, 100);
  };

  const onMouseEnter = useCallback(() => {
    setOnDuration(hoverIcon);
  }, [hoverIcon]);

  const onMouseLeave = useCallback(() => {
    setOnDuration(icon);
  }, [icon]);

  useEffect(() => {
    if (!disabled) {
      const element = ref.current;
      if (!element) return;

      element.addEventListener("mouseenter", onMouseEnter);
      element.addEventListener("mouseleave", onMouseLeave);

      return () => {
        element.removeEventListener("mouseenter", onMouseEnter);
        element.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [ref, onMouseEnter, onMouseLeave, disabled]);

  return currentIcon;
};
