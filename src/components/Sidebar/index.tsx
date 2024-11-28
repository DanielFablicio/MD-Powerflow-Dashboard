import { useState } from "react";
import styles from "./Sidebar.module.css";
import { BaseComponentsProps, MenuItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { formatTitleToURL } from "../../utils/utils";
import { ReactSVG } from "react-svg";

export default function Sidebar() {
  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };
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
                <MenuItem title="Plant Overview" />
                <MenuItem title="Plant Insights" />
                <MenuItem title="Device Drilldown" />
                <MenuItem title="Plant Heat Map" />
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
}: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${formatTitleToURL(title)}`);
    setIsOpen((prev) => !prev);
  };

  const basePathForIcons = "src/assets/images/menuIcons/";

  const MenuButton = (
    <button
      className={`${styles.menuItem} ${isOpen ? styles.active : ""}`}
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
        <ul>
          {MenuButton}
          {isOpen && <ul>{children}</ul>}
        </ul>
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
