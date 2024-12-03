import ThemeSwitch from "../ThemeSwitch";
import { useLocation } from "react-router-dom";
import styles from "./InfoTitle.module.css";

export default function InfoTitle() {
  const location = useLocation();

  // Extraindo o caminho da URL e formatando-o para exibição
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);
  const lastTwoSegments = pathSegments.slice(-2); // Pega os dois últimos segmentos
  // Formata os dois segmentos para exibição
  const title = lastTwoSegments
    .map((segment) => formatSegment(segment))
    .join(": ");

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <h1>{title}</h1>
        <div className={styles.ThemeSwitchContainer}>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

// Função para formatar o texto (ex.: capitalize)
function formatSegment(segment: string) {
  return segment
    .replace(/-/g, " ") // Substitui "-" por espaços
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Torna a primeira letra de cada palavra maiúscula
}
