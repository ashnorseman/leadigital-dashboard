import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./summary-output-value.module.css"

export default function SummaryOutputValue() {
  return (
    <PanelPlain className={styles.section}>
      <PanelHeader title="产值（万元）" />

      <PanelGroup direction="row"
                  gap={0}>
        <DataDigitItem>
          <DataDigitNumber>888888</DataDigitNumber>
          <span>总产值</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>10999</DataDigitNumber>
          <span>110kV</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>169900</DataDigitNumber>
          <span>220–550kV</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>55555</DataDigitNumber>
          <span>550kV及以上</span>
        </DataDigitItem>
      </PanelGroup>
    </PanelPlain>
  );
}
