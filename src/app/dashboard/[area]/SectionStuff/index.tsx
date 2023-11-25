import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SummaryStaff from "../SummaryStaff";

export default function SectionStuff() {
  return (
    <PanelCorner>
      <PanelGroup direction="column">
        <PanelHeader title="人员管理" />

        <SummaryStaff />
      </PanelGroup>
    </PanelCorner>
  );
}
