import { ReactNode } from "react";

export interface CardProps {
  maxHeight?: number;
  maxWidth?: number;
  title: string;
  color?: string;
  variant?: string;
  children: ReactNode;
}
