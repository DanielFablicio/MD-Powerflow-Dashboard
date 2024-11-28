import { ReactNode } from "react";

export interface BaseComponentsProps {
  children: ReactNode;
}

export interface MenuItemProps {
  children?: ReactNode;
  hasSubItems?: boolean;
  title: string;
  iconSrc: string;
  toggleMenu?: (menu: string) => void;
  openMenu?: string | null;
}
