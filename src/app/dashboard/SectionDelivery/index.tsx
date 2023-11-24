"use client";

import * as echarts from "echarts";
import Chart from "@/components/Chart";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SectionHeader from "@/components/SectionHeader";
import Tab from "@/components/Tab";
import SummaryDelivery from "../SummaryDelivery";
import { commonTab } from "../constants";

export default function SectionDelivery() {
  const chartDelivery = {
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
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        barWidth: 16,
        itemStyle: {
          barBorderRadius: 3,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#FFB14B",
            },
            {
              offset: 1,
              color: "#FF8827",
            },
          ]),
        },
      },
    ],
  };

  return (
    <PanelCorner size={456}>
      <PanelGroup direction="column">
        <PanelHeader title="交付水平" />

        <SummaryDelivery />

        <SectionHeader>
          <div>
            交付及时率 计划达成率
          </div>

          <Tab activeTab="average"
               data={commonTab} />
        </SectionHeader>

        <Chart options={chartDelivery} />
      </PanelGroup>
    </PanelCorner>
  );
}
