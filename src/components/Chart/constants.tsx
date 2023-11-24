import * as echarts from "echarts";

export const echartsDefaultOption: echarts.EChartOption = {
  grid: {
    containLabel: true,
    left: 0,
    top: 8,
    right: 0,
    bottom: 0,
  },
  textStyle: {
    color: "rgba(255, 255, 255, .65)",
    fontSize: 16,
  },
};

export const echartsDefaultXAxisOption: echarts.EChartOption.XAxis = {
  axisLine: {
    show: false,
  },
};

export const echartsDefaultYAxisOption: echarts.EChartOption.YAxis = {
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, .2)",
    },
  },
};
