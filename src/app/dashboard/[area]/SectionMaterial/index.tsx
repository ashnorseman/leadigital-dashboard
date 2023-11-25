import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SummaryMaterial from "../SummaryMaterial";

export default function SectionMaterial() {
  return (
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
  );
}
