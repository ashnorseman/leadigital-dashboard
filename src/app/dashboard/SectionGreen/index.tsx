"use client";

import * as echarts from "echarts";
import Chart from "@/components/Chart";
import PanelCorner from "@/components/Panel/PanelCorner";
import PanelGroup from "@/components/Panel/PanelGroup";
import PanelHeader from "@/components/Panel/PanelHeader";
import styles from "./section-green.module.css";

export default function SectionGreen() {
  const xAxis: echarts.EChartOption.XAxis = {
    data: new Array(12).fill(0).map((_, index) => `${index + 1}月`),
  };

  const usageChart: echarts.EChartOption = {
    grid: {
      top: 52,
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
      orient: "horizontal",
      top: 0,
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
    <PanelCorner size={620}>
      <PanelGroup direction="column">
        <PanelHeader title="绿色制造" />

        <h5 className="section-title">设备管理</h5>

        <h5 className="section-title">设备利用率</h5>

        <Chart className={styles.usageChart}
               options={usageChart} />
      </PanelGroup>
    </PanelCorner>
  );
}
