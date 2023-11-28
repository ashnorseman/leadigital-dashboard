import Image from "next/image";
import styles from "./data-flow-chart-item.module.css";

type DataFlowChartStatus = "finished" | "delayed" | "running" | "scheduled";

export interface DataFlowChartItemProps {
  left: number;
  name: string;
  progress?: number;
  status: DataFlowChartStatus;
  top: number;
  width?: number;
}

export default function DataFlowChartItem(props: DataFlowChartItemProps) {
  return (
    <div className={`${styles.item} ${styles[props.status]}`}
         style={{
           left: `${props.left}px`,
           top: `${props.top}px`,
           width: props.width ? `${props.width}px` : undefined,
         }}>
      {
        props.status === "finished"
          && <Image alt="已完成"
                    height={11}
                    src="/icons/check.svg"
                    width={17} />
      }

      {
        props.progress !== undefined && <span className={styles.progress}>{props.progress}%</span>
      }

      <span className={styles.label}>{props.name}</span>
    </div>
  );
}
