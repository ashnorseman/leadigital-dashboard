import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import ProgressFlowChart from "../ProgressFlowChart";
import styles from "./section-progress.module.css";

export default function SectionProgress() {
  return (
    <PanelCorner>
      <PanelGroup direction="column"
                  gap={8}>
        <PanelHeader title="订单实时状态" />

        <PanelGroup direction="row"
                    gap={8}>
          <div className={styles.tableContainer}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>工作令号</th>
                  <th>客户</th>
                  <th>产品类型</th>
                </tr>
              </thead>

              <tbody>
                <tr className={styles.rowActive}>
                  <td>P2200665</td>
                  <td>巴西</td>
                  <td>220kV</td>
                </tr>
                <tr>
                  <td>P2200665</td>
                  <td>乌克兰</td>
                  <td>220kV</td>
                </tr>
                <tr>
                  <td>P2200665</td>
                  <td>巴西</td>
                  <td>220kV</td>
                </tr>
                <tr>
                  <td>P2200665</td>
                  <td>乌克兰</td>
                  <td>220kV</td>
                </tr>
                <tr>
                  <td>P2200665</td>
                  <td>巴西</td>
                  <td>220kV</td>
                </tr>
                <tr>
                  <td>P2200665</td>
                  <td>乌克兰</td>
                  <td>220kV</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ProgressFlowChart />
        </PanelGroup>
      </PanelGroup>
    </PanelCorner>
  );
}
