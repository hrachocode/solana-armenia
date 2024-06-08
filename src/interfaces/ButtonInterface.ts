import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  styles?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick: () => void;
}
