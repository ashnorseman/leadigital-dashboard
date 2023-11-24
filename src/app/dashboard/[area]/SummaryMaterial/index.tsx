import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./summary-material.module.css"

export default function SummaryMaterial() {
  return (
    <PanelPlain className={styles.section}
                size={102}>
      <PanelGroup direction="row"
                  gap={0}>
        <DataDigitItem>
          <span className="text-secondary">计划配料批次</span>
          <DataDigitNumber>8</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">完成配料批次</span>
          <DataDigitNumber>20</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">配料及时率</span>
          <DataDigitNumber unit="%">98</DataDigitNumber>
        </DataDigitItem>
      </PanelGroup>
    </PanelPlain>
  );
}
