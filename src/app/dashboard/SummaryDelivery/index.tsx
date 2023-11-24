import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./summary-delivery.module.css"

export default function SummaryDelivery() {
  return (
    <PanelPlain className={styles.section}
                size={112}>
      <PanelGroup direction="row"
                  gap={0}>
        <DataDigitItem>
          <span className="text-secondary">计划台数</span>
          <DataDigitNumber>28</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">完成台数</span>
          <DataDigitNumber>20</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">计划容量</span>
          <DataDigitNumber unit="MkVA">982</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">完成容量</span>
          <DataDigitNumber unit="MkVA">29</DataDigitNumber>
        </DataDigitItem>
      </PanelGroup>
    </PanelPlain>
  );
}
