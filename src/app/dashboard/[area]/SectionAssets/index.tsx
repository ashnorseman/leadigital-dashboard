import DataDigitCard from "@/components/Data/DataDigitCard";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import styles from "./section-assets.module.css";

export default function SectionAssets() {
  return (
    <PanelCorner>
      <PanelGroup direction="column"
                  gap={12}>
        <PanelHeader title="设备管理" />

        <PanelGroup direction="row"
                    gap={12}>
          <DataDigitCard className={`${styles.card} ${styles.cardRunning}`}
                         label="运行"
                         unit="台"
                         value={50} />

          <DataDigitCard className={`${styles.card} ${styles.cardIdle}`}
                         label="待机"
                         unit="台"
                         value={50} />

          <DataDigitCard className={`${styles.card} ${styles.cardMaintenance}`}
                         label="保养"
                         unit="台"
                         value={50} />

          <DataDigitCard className={`${styles.card} ${styles.cardFixing}`}
                         label="维修"
                         unit="台"
                         value={50} />

          <DataDigitCard className={`${styles.card} ${styles.cardChecking}`}
                         label="点检"
                         unit="台"
                         value={50} />

          <DataDigitCard className={`${styles.card} ${styles.cardOee}`}
                         label="OEE"
                         unit="台"
                         value={50} />
        </PanelGroup>

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
  );
}
