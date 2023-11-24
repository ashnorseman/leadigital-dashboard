import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./summary-outline-order.module.css"

export default function SummaryOnlineOrder() {
  return (
    <PanelPlain className={styles.section}>
      <PanelHeader title="在线订单（万元）" />

      <PanelGroup direction="row"
                  gap={0}>
        <DataDigitItem>
          <DataDigitNumber>8888</DataDigitNumber>
          <span>总订单</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>109</DataDigitNumber>
          <span>12月</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>1600</DataDigitNumber>
          <span>24年1月</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>29</DataDigitNumber>
          <span>2月及以后</span>
        </DataDigitItem>
      </PanelGroup>
    </PanelPlain>
  );
}
