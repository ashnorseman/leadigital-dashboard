import Container from "@/components/Container";
import Header from "@/components/Header";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SectionDelivery from "./SectionDelivery";
import SectionEfficiency from "./SectionEfficiency";
import SectionFloorPlan from "./SectionFloorPlan";
import SectionGreen from "./SectionGreen";
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

            <PanelCorner>
              <PanelGroup direction="column">
                <PanelHeader title="订单实时进度" />

                <table className="data-table">
                  <thead>
                    <tr>
                      <th>工作令号</th>
                      <th>客户</th>
                      <th>产品类型</th>
                      <th>铁心叠片</th>
                      <th>线圈绕制</th>
                      <th>线圈套装</th>
                      <th>器身组装</th>
                      <th>器身干燥</th>
                      <th>总装配</th>
                      <th>产品试验</th>
                      <th>完工入库</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>P2200665</td>
                      <td>巴西</td>
                      <td>220kV</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>P2200665</td>
                      <td>乌克兰</td>
                      <td>220kV</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>P2200665</td>
                      <td>巴西</td>
                      <td>220kV</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>P2200665</td>
                      <td>乌克兰</td>
                      <td>220kV</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>P2200665</td>
                      <td>巴西</td>
                      <td>220kV</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>P2200665</td>
                      <td>乌克兰</td>
                      <td>220kV</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </PanelGroup>
            </PanelCorner>
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
