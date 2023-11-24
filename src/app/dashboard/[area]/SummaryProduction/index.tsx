import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./summary-production.module.css"

export default function SummaryProduction() {
  return (
    <PanelPlain className={styles.section}
                size={102}>
      <PanelGroup direction="row"
                  gap={0}>
        <DataDigitItem>
          <span className="text-secondary">当日订单</span>
          <DataDigitNumber>8</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">当日派工</span>
          <DataDigitNumber>20</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">按时完成率</span>
          <DataDigitNumber unit="%">100</DataDigitNumber>
        </DataDigitItem>
      </PanelGroup>
    </PanelPlain>
  );
}
