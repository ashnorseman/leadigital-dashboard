import { AreaType } from "../types";
import styles from "./area-legend.module.css";
import commonStyles from "../common.module.css";

interface AreaLegendProps {
  name: string;
  type: AreaType;
}

export default function AreaLegend(props: AreaLegendProps) {
  return (
    <div className={`${styles.item} ${commonStyles[props.type]}`}>
      <span className={styles.label}></span>
      {props.name}
    </div>
  );
}
