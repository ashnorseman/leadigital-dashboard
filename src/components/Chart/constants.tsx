import * as echarts from "echarts";

export const echartsDefaultOption: echarts.EChartOption = {
  textStyle: {
    color: "rgba(255, 255, 255, .65)",
    fontSize: 16,
  },
};

export const echartsDefaultGridOption: echarts.EChartOption.Grid = {
  containLabel: true,
  left: 0,
  top: 8,
  right: 0,
  bottom: 0,
};

export const echartsDefaultLegendOption: echarts.EChartOption.Legend = {
  icon: "circle",
  orient: "vertical",
  right: 0,
  top: "middle",
  textStyle: {
    color: "#FFF",
    fontSize: 14,
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
