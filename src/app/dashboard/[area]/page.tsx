import Container from "@/components/Container";
import Header from "@/components/Header";
import PanelGroup from "@/components/Panel/PanelGroup";
import SectionAreaMap from "./SectionAreaMap";
import SectionAssets from "./SectionAssets";
import SectionMaterial from "./SectionMaterial";
import SectionProduction from "./SectionProduction";
import SectionQualityManagement from "./SectionQualityManagement";
import SectionSchedule from "./SectionSchedule";
import SectionStaff from "./SectionStaff";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <Container header={<Header title="器身车间 综合管理看板" />}
               height={1366}
               width={2150}>
      <PanelGroup className={styles.board}
                  direction="row">
        <PanelGroup direction="column">
          <SectionProduction />
          <SectionMaterial />
          <SectionAssets />
        </PanelGroup>

        <PanelGroup direction="column"
                    size={718}>
          <SectionSchedule />
          <SectionAreaMap />
        </PanelGroup>

        <PanelGroup direction="column"
                    size={549}>
          <SectionQualityManagement />
          <SectionStaff />
        </PanelGroup>
      </PanelGroup>
    </Container>
  );
}
