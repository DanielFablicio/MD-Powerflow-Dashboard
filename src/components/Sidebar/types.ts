import { ReactNode } from "react";

export interface BaseComponentsProps {
  children: ReactNode;
}

export interface MenuItemProps {
  children?: ReactNode;
  hasSubItems?: boolean;
  title: string;
}
