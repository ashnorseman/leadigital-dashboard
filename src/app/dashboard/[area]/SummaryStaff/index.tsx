import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./summary-staff.module.css"

export default function SummaryStaff() {
  return (
    <PanelPlain className={styles.section}
                size={102}>
      <PanelGroup direction="row"
                  gap={0}>
        <DataDigitItem>
          <span className="text-secondary">总人数</span>
          <DataDigitNumber>28</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">出勤</span>
          <DataDigitNumber>27</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">休假</span>
          <DataDigitNumber>1</DataDigitNumber>
        </DataDigitItem>

        <DataDigitItem>
          <span className="text-secondary">出勤率</span>
          <DataDigitNumber unit="%">98</DataDigitNumber>
        </DataDigitItem>
      </PanelGroup>
    </PanelPlain>
  );
}
