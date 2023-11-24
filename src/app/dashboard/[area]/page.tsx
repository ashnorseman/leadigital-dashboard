import Container from "@/components/Container";
import Header from "@/components/Header";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SectionProduction from "./SectionProduction";
import SectionQualityManagement from "./SectionQualityManagement";
import SummaryMaterial from "./SummaryMaterial";
import SummaryStaff from "./SummaryStaff";
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
          <SectionProduction />

          <PanelCorner size={373}>
            <PanelGroup direction="column"
                        gap={12}>
              <PanelHeader title="物料管理" />

              <SummaryMaterial />

              <table className="data-table">
                <thead>
                  <tr>
                    <th>工作令号</th>
                    <th>配料单号</th>
                    <th>物料种类</th>
                    <th>物料数量</th>
                    <th>配送需求时间</th>
                    <th>当前状态</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                </tbody>
              </table>
            </PanelGroup>
          </PanelCorner>

          <PanelCorner>
            <PanelGroup direction="column"
                        gap={12}>
              <PanelHeader title="设备管理" />

              <table className="data-table">
                <thead>
                  <tr>
                    <th>工作令号</th>
                    <th>设备</th>
                    <th>故障描述</th>
                    <th>报修时间</th>
                    <th>完成时间</th>
                    <th>当前状态</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                  <tr>
                    <td>P2200665</td>
                    <td>P2200665</td>
                    <td>23</td>
                    <td>123</td>
                    <td>2023/11/22</td>
                    <td>已完成</td>
                  </tr>
                </tbody>
              </table>
            </PanelGroup>
          </PanelCorner>
        </PanelGroup>

        <PanelGroup direction="column">
          <PanelCorner size={455}>
            <PanelGroup direction="column">
              <PanelHeader title="当日排产管理" />

              <table className="data-table">
                <thead>
                  <tr>
                    <th>工作令号</th>
                    <th>客户</th>
                    <th>产品类型</th>
                    <th>铁心叠片</th>
                    <th>铁心相套</th>
                    <th>上轭铁装配</th>
                    <th>引线预制</th>
                    <th>引线装配</th>
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
                  </tr>
                </tbody>
              </table>
            </PanelGroup>
          </PanelCorner>

          <PanelCorner>2</PanelCorner>
        </PanelGroup>

        <PanelGroup direction="column"
                    size={549}>
          <SectionQualityManagement />

          <PanelCorner>
            <PanelGroup direction="column">
              <PanelHeader title="人员管理" />

              <SummaryStaff />
            </PanelGroup>
          </PanelCorner>
        </PanelGroup>
      </PanelGroup>
    </Container>
  );
}
