import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  type?: string;
  onClick: () => void;
}
