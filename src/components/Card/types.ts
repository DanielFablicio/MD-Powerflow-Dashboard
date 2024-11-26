import { ReactNode } from "react";

export interface CardProps {
  height: number;
  width: number;
  title: string;
  color?: string;
  variant?: string;
  children: ReactNode;
}
