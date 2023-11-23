import Container from "@/components/Container";
import Header from "@/components/Header";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import PanelPlain from "@/components/Panel/PanelPlain";
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
          <PanelPlain>
            <PanelHeader title="产值（万元）" />
          </PanelPlain>

          <PanelPlain>
            <PanelHeader title="产量（台）" />
          </PanelPlain>

          <PanelPlain>
            <PanelHeader title="容量（MkVA）" />
          </PanelPlain>

          <PanelPlain>
            <PanelHeader title="在线订单（万元）" />
          </PanelPlain>
        </PanelGroup>

        <PanelGroup direction="row">
          <PanelGroup direction="column"
                      size={579}>
            <PanelCorner size={456}>
              <PanelHeader title="交付水平" />

              <PanelPlain size={112}>1</PanelPlain>
            </PanelCorner>

            <PanelCorner>
              <PanelHeader title="品质绩效" />
            </PanelCorner>
          </PanelGroup>

          <PanelGroup direction="column">
            <PanelCorner size={620}>1</PanelCorner>

            <PanelCorner>
              <PanelHeader title="订单实时进度" />
            </PanelCorner>
          </PanelGroup>

          <PanelGroup direction="column"
                      size={579}>
            <PanelCorner size={620}>
              <PanelHeader title="绿色制造" />
            </PanelCorner>

            <PanelCorner>
              <PanelHeader title="制造效率" />
            </PanelCorner>
          </PanelGroup>
        </PanelGroup>
      </PanelGroup>
    </Container>
  );
}
