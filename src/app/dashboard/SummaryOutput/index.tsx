import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./summary-output.module.css"

export default function SummaryOutput() {
  return (
    <PanelPlain className={styles.section}>
      <PanelHeader title="产量（台）" />

      <PanelGroup direction="row"
                  gap={0}>
        <DataDigitItem>
          <DataDigitNumber>888</DataDigitNumber>
          <span>总产量</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>109</DataDigitNumber>
          <span>110kV</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>160</DataDigitNumber>
          <span>220–550kV</span>
        </DataDigitItem>

        <DataDigitItem>
          <DataDigitNumber>29</DataDigitNumber>
          <span>550kV及以上</span>
        </DataDigitItem>
      </PanelGroup>
    </PanelPlain>
  );
}
