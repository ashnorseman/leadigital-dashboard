import Container from "@/components/Container";
import Header from "@/components/Header";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import PanelPlain from "@/components/Panel/PanelPlain";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <Container header={<Header title="器身车间 综合管理看板" />}
               height={1366}
               width={2150}>
      <PanelGroup className={styles.board}
                  direction="row">
        <PanelGroup direction="column"
                    size={549}>
          <PanelCorner size={415}>
            <PanelHeader title="生产管理" />

            <PanelPlain size={102}>1</PanelPlain>
          </PanelCorner>

          <PanelCorner size={373}>
            <PanelHeader title="物料管理" />

            <PanelPlain size={102}>2</PanelPlain>
          </PanelCorner>

          <PanelCorner>
            <PanelHeader title="设备管理" />
          </PanelCorner>
        </PanelGroup>

        <PanelGroup direction="column">
          <PanelCorner size={455}>
            <PanelHeader title="当日排产管理" />
          </PanelCorner>

          <PanelCorner>2</PanelCorner>
        </PanelGroup>

        <PanelGroup direction="column"
                    size={549}>
          <PanelCorner size={455}>
            <PanelHeader title="质量管理" />
          </PanelCorner>

          <PanelCorner>
            <PanelHeader title="人员管理" />

            <PanelPlain size={102}>2</PanelPlain>
          </PanelCorner>
        </PanelGroup>
      </PanelGroup>
    </Container>
  );
}
