"use client";

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { echartsDefaultGridOption, echartsDefaultLegendOption, echartsDefaultOption, echartsDefaultXAxisOption, echartsDefaultYAxisOption } from "./constants";
import styles from "./chart.module.css";

interface ChartProps {
  className?: string;
  options: echarts.EChartOption;
}

export default function Chart(props: ChartProps) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    // 保证在页面尺寸初始化之后渲染
    setTimeout(() => {
      const chart = echarts.init(chartRef.current);

      const { grid = {}, legend = {}, xAxis = {}, yAxis = {}, ...options } = props.options

      chart.setOption({
        ...echartsDefaultOption,
        grid: {
          ...echartsDefaultGridOption,
          ...grid,
        },
        legend: {
          ...echartsDefaultLegendOption,
          ...legend,
        },
        xAxis: {
          ...echartsDefaultXAxisOption,
          ...xAxis,
        },
        yAxis: {
          ...echartsDefaultYAxisOption,
          ...yAxis,
        },
        ...options,
      });
    }, 500);
  }, [chartRef.current]);

  return (
    <div className={`${styles.chartContainer} ${props.className || ""}`}
         ref={chartRef}></div>
  );
}
