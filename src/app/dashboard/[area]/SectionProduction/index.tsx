"use client";

import * as echarts from "echarts";
import Chart from "@/components/Chart";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SummaryProduction from "../SummaryProduction";

export default function SectionProduction() {
  const efficiencyChart: echarts.EChartOption = {
    xAxis: {
      data: new Array(8).fill(0).map((_, index) => `工位${index + 1}`),
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260, 224],
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

  return (
    <PanelCorner size={415}>
      <PanelGroup direction="column">
        <PanelHeader title="生产管理" />

        <SummaryProduction />

        <h5 className="section-title">工序作业效率</h5>

        <Chart options={efficiencyChart} />
      </PanelGroup>
    </PanelCorner>
  );
}
