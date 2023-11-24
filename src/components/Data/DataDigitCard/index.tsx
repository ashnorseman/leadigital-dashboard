import styles from "./data-digit-card.module.css";

interface DataDigitCardProps {
  className?: string;
  label: string;
  unit: string;
  value: number;
}

export default function DataDigitCard(props: DataDigitCardProps) {
  return (
    <div className={`${styles.card} ${props.className || ""}`}>
      <span className={styles.corner}></span>

      <div className={styles.cardNumber}>
        <span className={styles.value}>{props.value}</span>
        {props.unit}
      </div>

      <span className={styles.label}>{props.label}</span>
    </div>
  );
}
