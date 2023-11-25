import Image from "next/image";
import styles from "./data-shift-worker.module.css";

export interface DataShiftWorkerProps {
  avatar: string;
  name: string;
}

export default function DataShiftWorker(props: DataShiftWorkerProps) {
  return (
    <div className={styles.container}>
      <Image alt={props.name}
             className={styles.avatar}
             height={28}
             src={props.avatar}
             width={28} />

      <div className={styles.info}>
        <div className={styles.infoMain}>
          <span className={styles.name}>{props.name}</span>
          <span className={styles.type}>S1</span>
        </div>

        <div className={styles.icons}>
          <div className={styles.icon}>
            <Image alt="起重机"
                   height={9}
                   src="/icons/crane.svg"
                   width={13} />
          </div>

          <div className={styles.icon}>
            <Image alt="卡车"
                   height={10}
                   src="/icons/trunk.svg"
                   width={13} />
          </div>

          <div className={styles.icon}>
            <Image alt="步行"
                   height={9}
                   src="/icons/walk.svg"
                   width={12} />
          </div>
        </div>
      </div>
    </div>
  );
}
