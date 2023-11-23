import styles from "./panel-corner.module.css";

interface PanelCornerProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

export default function PanelCorner(props: PanelCornerProps) {
  return (
    <div className={styles.section + (props.className ? ` ${props.className}` : "")}
         style={{
           flex: props.size ? `${props.size}px 0 0` : 1,
         }}>
      <div className={`${styles.corner} ${styles.cornerTop} ${styles.cornerLeft}`}></div>
      <div className={`${styles.corner} ${styles.cornerTop} ${styles.cornerRight}`}></div>
      <div className={`${styles.corner} ${styles.cornerBottom} ${styles.cornerLeft}`}></div>
      <div className={`${styles.corner} ${styles.cornerBottom} ${styles.cornerRight}`}></div>
      {props.children}
    </div>
  );
}
