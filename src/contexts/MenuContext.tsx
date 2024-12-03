import React, { createContext, useState, useContext } from "react";

// Definindo o contexto para o menu
const MenuContext = createContext(null);

// Hook para acessar o contexto
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext deve ser usado dentro de um MenuProvider");
  }
  return context;
};

// Provider do MenuContext
export const MenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState<string[]>([]); // Para armazenar quais submenus estão abertos

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  return (
    <MenuContext.Provider
      value={{ activeMenu, setActiveMenu, openSubMenus, toggleSubMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};
