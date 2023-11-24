"use client";

import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { echartsDefaultOption, echartsDefaultXAxisOption, echartsDefaultYAxisOption } from "./constants";
import styles from "./chart.module.css";

interface ChartProps {
  options: echarts.EChartOption;
}

export default function Chart(props: ChartProps) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }

    const chart = echarts.init(chartRef.current);

    const { xAxis, yAxis, ...options } = props.options

    chart.setOption({
      ...echartsDefaultOption,
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
  }, [chartRef.current]);

  return (
    <div className={styles.chartContainer}
         ref={chartRef}></div>
  );
}
