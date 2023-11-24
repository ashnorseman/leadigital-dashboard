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
    <Container header={<Header title="智造一体化平台" />}
               height={1536}
               width={2330}>
      <PanelGroup className={styles.board}
                  direction="column">
        <PanelGroup direction="row"
                    size={145}>
          <PanelPlain>
            <PanelHeader title="产值（万元）" />

            <PanelGroup className={styles.summaryOutputValue}
                        direction="row"
                        gap={0}>
              <DataDigitItem>
                <DataDigitNumber>888888</DataDigitNumber>
                <span>总产值</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>10999</DataDigitNumber>
                <span>110kV</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>169900</DataDigitNumber>
                <span>220–550kV</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>55555</DataDigitNumber>
                <span>550kV及以上</span>
              </DataDigitItem>
            </PanelGroup>
          </PanelPlain>

          <PanelPlain>
            <PanelHeader title="产量（台）" />

            <PanelGroup className={styles.summaryOutput}
                        direction="row"
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

          <PanelPlain>
            <PanelHeader title="容量（MkVA）" />

            <PanelGroup className={styles.summaryCapacity}
                        direction="row"
                        gap={0}>
              <DataDigitItem>
                <DataDigitNumber>8888</DataDigitNumber>
                <span>总容量</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>109</DataDigitNumber>
                <span>110kV</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>1600</DataDigitNumber>
                <span>220–550kV</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>29</DataDigitNumber>
                <span>550kV及以上</span>
              </DataDigitItem>
            </PanelGroup>
          </PanelPlain>

          <PanelPlain>
            <PanelHeader title="在线订单（万元）" />

            <PanelGroup className={styles.summaryOnlineOrder}
                        direction="row"
                        gap={0}>
              <DataDigitItem>
                <DataDigitNumber>8888</DataDigitNumber>
                <span>总订单</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>109</DataDigitNumber>
                <span>12月</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>1600</DataDigitNumber>
                <span>24年1月</span>
              </DataDigitItem>

              <DataDigitItem>
                <DataDigitNumber>29</DataDigitNumber>
                <span>2月及以后</span>
              </DataDigitItem>
            </PanelGroup>
          </PanelPlain>
        </PanelGroup>

        <PanelGroup direction="row">
          <PanelGroup direction="column"
                      size={579}>
            <PanelCorner size={456}>
              <PanelHeader title="交付水平" />

              <PanelPlain className={styles.summaryDelivery}
                          size={112}>
                <PanelGroup direction="row"
                            gap={0}>
                  <DataDigitItem>
                    <span className="text-secondary">计划台数</span>
                    <DataDigitNumber>28</DataDigitNumber>
                  </DataDigitItem>

                  <DataDigitItem>
                    <span className="text-secondary">完成台数</span>
                    <DataDigitNumber>20</DataDigitNumber>
                  </DataDigitItem>

                  <DataDigitItem>
                    <span className="text-secondary">计划容量</span>
                    <DataDigitNumber unit="MkVA">982</DataDigitNumber>
                  </DataDigitItem>

                  <DataDigitItem>
                    <span className="text-secondary">完成容量</span>
                    <DataDigitNumber unit="MkVA">29</DataDigitNumber>
                  </DataDigitItem>
                </PanelGroup>
              </PanelPlain>
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
