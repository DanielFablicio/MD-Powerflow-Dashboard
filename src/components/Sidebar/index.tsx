import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { BaseComponentsProps, MenuItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { formatTitleToURL } from "../../utils/utils";
import { ReactSVG } from "react-svg";
import { useMenuContext } from "../../contexts/MenuContext";

const basePathForIcons = "/images/menuIcons";

export default function Sidebar() {
  return (
    <Wrapper>
      <SidebarHeaderContainer>
        <img src="" />
        <h2>MD PowerFlow</h2>
      </SidebarHeaderContainer>

      <MenuContainer>
        <ul className={styles.menu}>
          <MenuItem
            title="Dashboard"
            iconSrc="/dashboard.svg"
            hasSubItems={true}
          >
            <MenuItem title="Profile" iconSrc="/user.svg" />
            <MenuItem
              title="Portfolio"
              hasSubItems={true}
              iconSrc="/portfolio.svg"
            >
              <MenuItem
                title="Solar farm 1"
                hasSubItems={true}
                iconSrc="/solar-panels.svg"
              >
                <MenuItem
                  title="Plant Overview"
                  iconSrc="/plant-overview.svg"
                />
                <MenuItem
                  title="Plant Insights"
                  iconSrc="/plant-insights.svg"
                />
                <MenuItem
                  title="Device Drilldown"
                  iconSrc="/device-drilldown.svg"
                />
                <MenuItem
                  title="Plant Heat Map"
                  iconSrc="/plant-heat-map.svg"
                />
              </MenuItem>
            </MenuItem>
          </MenuItem>
        </ul>
      </MenuContainer>

      <Footer>
        <button className={styles.FooterLanguage}> EN 🌏︎</button>
        <p>MD PowerFlow by Mandacaru Tech ©</p>
      </Footer>
    </Wrapper>
  );
}

function Wrapper({ children }: BaseComponentsProps) {
  return <aside className={styles.Wrapper}>{children}</aside>;
}

function SidebarHeaderContainer({ children }: BaseComponentsProps) {
  return <div className={styles.HeaderContainer}>{children}</div>;
}

function MenuContainer({ children }: BaseComponentsProps) {
  return <nav className={styles.menuContainer}>{children}</nav>;
}

function MenuItem({
  children,
  title,
  hasSubItems = false,
  iconSrc,
  parentPath = "",
}: MenuItemProps) {
  const { activeMenu, setActiveMenu, openSubMenus, toggleSubMenu } =
    useMenuContext();

  const isActive = activeMenu === title;
  const isOpen = openSubMenus.includes(title);

  const navigate = useNavigate();
  const currentPath = `${parentPath}/${formatTitleToURL(title)}`;

  const handleNavigate = () => {
    if (hasSubItems) {
      toggleSubMenu(title);
    }
    setActiveMenu(title);
    navigate(currentPath);
  };

  const MenuButton = (
    <button
      className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
      onClick={handleNavigate}
    >
      <ReactSVG
        src={basePathForIcons + iconSrc}
        beforeInjection={(svg) => {
          svg.setAttribute("width", "24px");
          svg.setAttribute("height", "24px");
          svg.setAttribute("fill", "var(--text-color)");
        }}
      />
      {title}
    </button>
  );

  return (
    <>
      {hasSubItems ? (
        <div>
          {MenuButton}
          {isOpen && (
            <ul>
              {/* Passa o caminho atual como parentPath para os filhos */}
              {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement, {
                  parentPath: currentPath,
                }),
              )}
            </ul>
          )}
        </div>
      ) : (
        MenuButton
      )}
    </>
  );
}

function Footer({ children }: BaseComponentsProps) {
  return (
    <footer className={styles.FooterWrapper}>
      <div className={styles.FooterContent}>{children}</div>
    </footer>
  );
}
