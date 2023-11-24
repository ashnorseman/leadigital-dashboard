import styles from "./data-digit-number.module.css";

interface DataDigitNumberProps {
  children: React.ReactNode;
  className?: string;
  unit?: string;
}

export default function DataDigitNumber(props: DataDigitNumberProps) {
  return (
    <div className={`${props.className || ""}`}>
      <span className={styles.number}>{props.children}</span>

      {
        props.unit && <span className={`${styles.unit} text-secondary`}>{props.unit}</span>
      }
    </div>
  );
}
