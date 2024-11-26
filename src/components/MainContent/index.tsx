import { ReactNode } from "react";
import styles from "./MainContent.module.css";

export default function MainContent({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>{children}</div>
    </div>
  );
}
