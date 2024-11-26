import { ReactNode, useState } from "react";
import styles from "./Sidebar.module.css";
import { BaseComponentsProps, MenuItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { formatTitleToURL } from "../../utils/utils";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <Wrapper>
      <SidebarHeaderContainer>
        <h2>MD PowerFlow</h2>
      </SidebarHeaderContainer>

      <MenuContainer>
        <ul className={styles.menu}>
          <MenuItem title="Profile" />
          <MenuItem title="Portfolio" hasSubItems={true}>
            <MenuItem title="Solar farm 1" hasSubItems={true}>
              <MenuItem title="Plant Overview" />
              <MenuItem title="Plant Insights" />
              <MenuItem title="Device Drilldown" />
              <MenuItem title="Plant Heat Map" />
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

function Container({ children }: BaseComponentsProps) {
  return <div className={styles.menuContainer}>{children}</div>;
}

function MenuContainer({ children }: BaseComponentsProps) {
  return <nav className={styles.menuContainer}>{children}</nav>;
}

function Logo({ children }: BaseComponentsProps) {
  return <div>{children}</div>;
}

function MenuItem({ children, title, hasSubItems = false }: MenuItemProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${formatTitleToURL(title)}`);
  };

  return (
    <>
      {hasSubItems ? (
        <ul>
          <button className={styles.menuItem} onClick={handleNavigate}>
            {title}
          </button>
          <ul>{children}</ul>
        </ul>
      ) : (
        <button className={styles.menuItem} onClick={handleNavigate}>
          {title}
        </button>
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
