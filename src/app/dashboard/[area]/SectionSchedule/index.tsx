import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";

export default function SectionSchedule() {
  return (
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
  );
}
