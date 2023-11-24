import styles from "./data-digit-item.module.css";

interface DataDigitItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function DataDigitItem(props: DataDigitItemProps) {
  return (
    <div className={`${styles.item} ${props.className || ""}`}>
      {props.children}
      <span className={styles.separater}></span>
    </div>
  );
}
