import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SectionHeader from "@/components/SectionHeader";
import Tab, { TabItemProps } from "@/components/Tab";
import { commonTab } from "../constants";

export default function SectionEfficiency() {
  const stockBalanceTab: TabItemProps[] = [
    {
      name: "total",
      text: "存货总额",
    },
    {
      name: "inProgress",
      text: "在制品",
    },
    {
      name: "finished",
      text: "产成品",
    },
    {
      name: "parts",
      text: "零部件",
    },
  ];

  return (
    <PanelCorner>
      <PanelGroup direction="column">
        <PanelHeader title="制造效率" />

        <SectionHeader>
          <h5 className="section-title">产线生产效率</h5>

          <Tab activeTab="average"
                data={commonTab} />
        </SectionHeader>

        <SectionHeader>
          <h5 className="section-title">存货余额（万元）</h5>

          <Tab activeTab="total"
              data={stockBalanceTab} />
        </SectionHeader>
      </PanelGroup>
    </PanelCorner>
  );
}
