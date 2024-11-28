import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SectionsMenu.module.css";
import { SectionsMenuProps } from "./types";
import { formatTitleToURL } from "../../utils/utils";

export default function SectionsMenu({ baseURL, titles }: SectionsMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  // coloca em minúsculo e troca os espaços por hífens

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        {titles.map((title, index) => (
          <div className={styles.SectionContainer} key={index}>
            <button
              className={styles.SectionOption}
              onClick={() => navigate(`/${baseURL}/${formatTitleToURL(title)}`)}
              style={{
                ...(location.pathname === formatTitleToURL(title)
                  ? {
                      backgroundColor: "var(--terciary-color)",
                    }
                  : undefined),
              }}
            >
              {title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
