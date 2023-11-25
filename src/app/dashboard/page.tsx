import Container from "@/components/Container";
import Header from "@/components/Header";
import PanelGroup from "@/components/Panel/PanelGroup";
import SectionDelivery from "./SectionDelivery";
import SectionEfficiency from "./SectionEfficiency";
import SectionFloorPlan from "./SectionFloorPlan";
import SectionGreen from "./SectionGreen";
import SectionProgress from "./SectionProgress";
import SectionQuality from "./SectionQuality";
import SummaryCapacity from "./SummaryCapacity";
import SummaryOnlineOrder from "./SummaryOutlineOrder";
import SummaryOutput from "./SummaryOutput";
import SummaryOutputValue from "./SummaryOutPutValue";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <Container header={<Header title="智造一体化平台" />}
               height={1536}
               width={2330}>
      <PanelGroup className={styles.board}
                  direction="column">
        <PanelGroup direction="row"
                    size={145}>
          <SummaryOutputValue />
          <SummaryOutput />
          <SummaryCapacity />
          <SummaryOnlineOrder />
        </PanelGroup>

        <PanelGroup direction="row">
          <PanelGroup direction="column"
                      size={579}>
            <SectionDelivery />
            <SectionQuality />
          </PanelGroup>

          <PanelGroup direction="column">
            <SectionFloorPlan />
            <SectionProgress />
          </PanelGroup>

          <PanelGroup direction="column"
                      size={579}>
            <SectionGreen />
            <SectionEfficiency />
          </PanelGroup>
        </PanelGroup>
      </PanelGroup>
    </Container>
  );
}
