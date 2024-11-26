import styles from "./Card.module.css";
import { CardProps } from "./types";

export default function Card({
  height,
  width,
  title,
  color,
  variant,
  children,
}: CardProps) {
  //variant ainda não sei se vou usar
  /*o código abaixo é para setar o height tirando o padding e border
    pra deixar com o tamanho correto
  */
  const style: React.CSSProperties = {
    height: `calc(${height}px - var(--card-border-width)*2 - var(--card-padding)*2)`,
    width: `calc(${width}px - var(--card-border-width)*2 - var(--card-padding)*2)`,
  };

  const hexColorRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
  if (color && hexColorRegex.test(color)) {
    style.color = color;
  }

  return (
    <div className={styles.Card} style={style}>
      <h1>{title}</h1>
      <div className={styles.CardContent}>{children}</div>
    </div>
  );
}
