import { AreaType } from "../types";
import styles from "./area-block.module.css";
import commonStyles from "../common.module.css";

interface AreaBlockProp {
  children: React.ReactNode;
  direction: "column" | "row";
  height: number;
  left: number;
  name: string;
  status?: "blue" | "green" | "red" | "yellow";
  top: number;
  type: AreaType;
  width: number;
}

export default function AreaBlock(props: AreaBlockProp) {
  return (
    <div className={`${styles.container} ${commonStyles[props.type]} ${styles[props.direction]}`}
         style={{
           height: `${props.height}px`,
           left: `${props.left}px`,
           top: `${props.top}px`,
           width: `${props.width}px`,
         }}>
      <div className={styles.label}>{props.name}</div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>{props.children}</div>

        {
          props.status && <span className={`${styles.status} ${styles[props.status]}`}></span>
        }
      </div>
    </div>
  );
}
