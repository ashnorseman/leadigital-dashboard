"use client";

import * as echarts from "echarts";
import Chart from "@/components/Chart";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import SectionHeader from "@/components/SectionHeader";
import Tab, { TabItemProps } from "@/components/Tab";
import { commonTab } from "../constants";

export default function SectionEfficiency() {
  const stockBalanceTab: TabItemProps[] = [
    {
      name: "total",
      text: "存货总额",
    },
    {
      name: "inProgress",
      text: "在制品",
    },
    {
      name: "finished",
      text: "产成品",
    },
    {
      name: "parts",
      text: "零部件",
    },
  ];

  const xAxis: echarts.EChartOption.XAxis = {
    data: new Array(12).fill(0).map((_, index) => `${index + 1}月`),
  };

  const efficiencyChart: echarts.EChartOption = {
    grid: {
      right: 90,
    },
    legend: {
      data: [{
        name: "目标",
        itemStyle: {
          color: "#0073FF",
        },
      }, {
        name: "2023年",
        itemStyle: {
          color: "#FFA33D",
        },
      }] as any,
    },
    xAxis,
    series: [
      {
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        type: "line",
        name: "目标",
        showSymbol: false,
        lineStyle: {
          color: "#0073FF",
          width: 1,
        },
      },
      {
        data: [150, 230, 224, 218, 135, 147, 260, 224, 218, 135, 147, 260],
        type: "line",
        name: "2023年",
        showSymbol: false,
        smooth: true,
        lineStyle: {
          color: "#FFA33D",
          width: 3,
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255, 163, 34, .42)"
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

  const balanceChart: echarts.EChartOption = {
    grid: {
      right: 90,
    },
    legend: {
      data: [{
        name: "目标",
        itemStyle: {
          color: "#0073FF",
        },
      }, {
        name: "2023年",
        itemStyle: {
          color: "#46E081",
        },
      }] as any,
    },
    xAxis,
    series: [
      {
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        type: "line",
        name: "目标",
        showSymbol: false,
        lineStyle: {
          color: "#0073FF",
          width: 1,
        },
      },
      {
        data: [150, 230, 224, 218, 135, 147, 260, 224, 218, 135, 147, 260],
        type: "line",
        name: "2023年",
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
    <PanelCorner>
      <PanelGroup direction="column">
        <PanelHeader title="制造效率" />

        <SectionHeader>
          <h5 className="section-title">产线生产效率</h5>

          <Tab activeTab="average"
               data={commonTab} />
        </SectionHeader>

        <Chart options={efficiencyChart} />

        <SectionHeader>
          <h5 className="section-title">存货余额（万元）</h5>

          <Tab activeTab="total"
               data={stockBalanceTab} />
        </SectionHeader>

        <Chart options={balanceChart} />
      </PanelGroup>
    </PanelCorner>
  );
}
