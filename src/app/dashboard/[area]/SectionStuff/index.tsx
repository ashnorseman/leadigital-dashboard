import DataShift from "@/components/Data/DataShift";
import DataShiftWorker, { DataShiftWorkerProps } from "@/components/Data/DataShiftWorker";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SummaryStaff from "../SummaryStaff";
import styles from "./section-stuff.module.css";

export default function SectionStuff() {
  const workers: DataShiftWorkerProps[] = new Array(15).fill(0).map(() => ({
    avatar: "/logo.png",
    name: "金大中",
  }));

  return (
    <PanelCorner>
      <PanelGroup direction="column"
                  gap={12}>
        <PanelHeader title="人员管理" />

        <SummaryStaff />

        <DataShift className={styles.shiftMorning}
                   name="早班">
          {
            workers.map((w, index) => <DataShiftWorker key={index} {...w} />)
          }
        </DataShift>

        <DataShift className={styles.shiftDay}
                   name="中班">
          {
            workers.map((w, index) => <DataShiftWorker key={index} {...w} />)
          }
        </DataShift>

        <DataShift className={styles.shiftNight}
                   name="晚班">
          {
            workers.map((w, index) => <DataShiftWorker key={index} {...w} />)
          }
        </DataShift>
      </PanelGroup>
    </PanelCorner>
  );
}
