import styles from "./data-shift.module.css";

interface DataShiftProps {
  children: React.ReactNode;
  className: string;
  name: string;
}

export default function DataShift(props: DataShiftProps) {
  return (
    <div className={`${styles.shiftContainer} ${props.className || ""}`}>
      <div className={styles.shiftName}>{props.name}</div>

      <div className={styles.shiftMainContainer}>
        <div className={styles.shiftMain}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
