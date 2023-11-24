"use client";

import * as echarts from "echarts";
import Chart from "@/components/Chart";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";

export default function SectionQualityManagement() {
  const passChart: echarts.EChartOption = {
    xAxis: {
      data: new Array(6).fill(0).map((_, index) => `工序${index + 1}`),
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147],
        type: "line",
        showSymbol: false,
        smooth: true,
        lineStyle: {
          color: "#46E081",
          width: 3,
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(71, 255, 144, .42)"
            },
            {
              offset: 1,
              color: "rgba(255, 255, 255, 0)"
            }
          ])
        },
      },
    ],
  };

  const exceptionChart: echarts.EChartOption = {
    xAxis: {
      data: ["8/26", "8/27", "8/28", "8/29", "8/30", "8/31", "9/1"],
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        barWidth: 16,
        itemStyle: {
          barBorderRadius: 3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#60F5FF",
            },
            {
              offset: 1,
              color: "#3FA4FF",
            },
          ]),
        },
      },
    ],
  };

  return (
    <PanelCorner size={455}>
      <PanelGroup direction="column"
                  gap={12}>
        <PanelHeader title="质量管理" />

        <PanelGroup direction="row">
          <PanelGroup direction="column"
                      gap={12}>
            <h5 className="section-title">过程检验合格率（按工序）</h5>

            <Chart options={passChart} />
          </PanelGroup>

          <PanelGroup direction="column"
                      gap={12}>
            <h5 className="section-title">生产异常管理</h5>

            <Chart options={exceptionChart} />
          </PanelGroup>
        </PanelGroup>

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
