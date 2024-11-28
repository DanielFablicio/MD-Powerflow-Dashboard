import ThemeSwitch from "../ThemeSwitch";
import styles from "./InfoTitle.module.css";

export default function InfoTitle() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <h1>Solar Farm 1: Plant Overview</h1>
        <div className={styles.ThemeSwitchContainer}>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
