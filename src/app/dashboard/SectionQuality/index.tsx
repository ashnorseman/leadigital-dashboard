import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SectionHeader from "@/components/SectionHeader";
import Tab from "@/components/Tab";
import { commonTab } from "../constants";

export default function SectionQuality() {
  return (
    <PanelCorner>
      <PanelGroup direction="column">
        <PanelHeader title="品质绩效" />

        <SectionHeader>
          <h5 className="section-title">原材料/零部件送检合格率</h5>

          <Tab activeTab="average"
              data={commonTab} />
        </SectionHeader>

        <SectionHeader>
          <h5 className="section-title">成品一次送检合格率</h5>

          <Tab activeTab="average"
              data={commonTab} />
        </SectionHeader>

        <SectionHeader>
          <h5 className="section-title">过程检验合格率</h5>

          <Tab activeTab="average"
              data={commonTab} />
        </SectionHeader>
      </PanelGroup>
    </PanelCorner>
  );
}
