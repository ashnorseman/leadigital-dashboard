import Container from "@/components/Container";
import Header from "@/components/Header";
import DataDigitItem from "@/components/Data/DataDigitItem";
import DataDigitNumber from "@/components/Data/DataDigitNumber";
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

            <PanelPlain className={styles.summaryDigits}
                        size={102}>
              <PanelGroup direction="row"
                          gap={0}>
                <DataDigitItem>
                  <span className="text-secondary">当日订单</span>
                  <DataDigitNumber>8</DataDigitNumber>
                </DataDigitItem>

                <DataDigitItem>
                  <span className="text-secondary">当日派工</span>
                  <DataDigitNumber>20</DataDigitNumber>
                </DataDigitItem>

                <DataDigitItem>
                  <span className="text-secondary">按时完成率</span>
                  <DataDigitNumber unit="%">100</DataDigitNumber>
                </DataDigitItem>
              </PanelGroup>
            </PanelPlain>
          </PanelCorner>

          <PanelCorner size={373}>
            <PanelHeader title="物料管理" />

            <PanelPlain className={styles.summaryDigits}
                        size={102}>
              <PanelGroup direction="row"
                          gap={0}>
                <DataDigitItem>
                  <span className="text-secondary">计划配料批次</span>
                  <DataDigitNumber>8</DataDigitNumber>
                </DataDigitItem>

                <DataDigitItem>
                  <span className="text-secondary">完成配料批次</span>
                  <DataDigitNumber>20</DataDigitNumber>
                </DataDigitItem>

                <DataDigitItem>
                  <span className="text-secondary">配料及时率</span>
                  <DataDigitNumber unit="%">98</DataDigitNumber>
                </DataDigitItem>
              </PanelGroup>
            </PanelPlain>
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

            <PanelPlain className={styles.summaryDigits}
                        size={102}>
              <PanelGroup direction="row"
                          gap={0}>
                <DataDigitItem>
                  <span className="text-secondary">总人数</span>
                  <DataDigitNumber>28</DataDigitNumber>
                </DataDigitItem>

                <DataDigitItem>
                  <span className="text-secondary">出勤</span>
                  <DataDigitNumber>27</DataDigitNumber>
                </DataDigitItem>

                <DataDigitItem>
                  <span className="text-secondary">休假</span>
                  <DataDigitNumber>1</DataDigitNumber>
                </DataDigitItem>

                <DataDigitItem>
                  <span className="text-secondary">出勤率</span>
                  <DataDigitNumber unit="%">98</DataDigitNumber>
                </DataDigitItem>
              </PanelGroup>
            </PanelPlain>
          </PanelCorner>
        </PanelGroup>
      </PanelGroup>
    </Container>
  );
}
