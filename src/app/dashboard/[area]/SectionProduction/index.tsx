import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SummaryProduction from "../SummaryProduction";

export default function SectionProduction() {
  return (
    <PanelCorner size={415}>
      <PanelGroup direction="column">
        <PanelHeader title="生产管理" />

        <SummaryProduction />

        <h5 className="section-title">工序作业效率</h5>
      </PanelGroup>
    </PanelCorner>
  );
}
