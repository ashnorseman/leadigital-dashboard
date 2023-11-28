import Image from "next/image";
import Link from "next/link";
import PanelCorner from "@/components/Panel/PanelCorner";
import styles from "./section-floor-plan.module.css";

export default function SectionFloorPlan() {
  return (
    <PanelCorner className={styles.imagePanel}
                 size={614}>
      <div className={styles.imageContainer}>
        <div className={styles.linkLab}>
          <Link href="/dashboard/1">
            <span className={styles.link}>实验站</span>
          </Link>
        </div>

        <div className={styles.linkAssembly}>
          <Link href="/dashboard/1">
            <span className={styles.link}>总装车间</span>
          </Link>
        </div>

        <div className={styles.linkCoil}>
          <Link href="/dashboard/1">
            <span className={styles.link}>线圈车间</span>
          </Link>
        </div>

        <div className={styles.linkBody}>
          <Link href="/dashboard/1">
            <span className={styles.link}>器身车间</span>
          </Link>
        </div>

        <div className={styles.linkCore}>
          <Link href="/dashboard/1">
            <span className={styles.link}>铁心车间</span>
          </Link>
        </div>

        <Image alt="地图"
              height={597}
              src="/floor-plan.png"
              width={880} />
      </div>
    </PanelCorner>
  );
}
