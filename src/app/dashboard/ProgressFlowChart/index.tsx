import DataFlowChartItem, { DataFlowChartItemProps } from "@/components/Data/DataFlowChartItem";
import styles from "./progress-flow-chart.module.css";
import Image from "next/image";

export default function ProgressFlowChart() {
  const designFlow: DataFlowChartItemProps[] = [
    {
      name: "报审设计",
      status: "finished",
      left: 22,
      top: 34,
    },
    {
      name: "方案设计",
      status: "finished",
      left: 84,
      top: 34,
    },
    {
      name: "线圈设计",
      status: "finished",
      left: 175,
      top: 25,
    },
    {
      name: "铁心设计",
      status: "finished",
      left: 235,
      top: 25,
    },
    {
      name: "器身设计",
      status: "finished",
      left: 289,
      top: 25,
    },
    {
      name: "引线设计",
      status: "finished",
      left: 343,
      top: 25,
    },
    {
      name: "油箱设计",
      status: "finished",
      left: 399,
      top: 25,
    },
    {
      name: "总装设计",
      status: "finished",
      left: 457,
      top: 25,
    },
    {
      name: "组件设计",
      status: "finished",
      left: 516,
      top: 25,
    },
  ];

  const purchaseFlow: DataFlowChartItemProps[] = [
    {
      name: "线圈绝缘体",
      status: "scheduled",
      left: 22,
      top: 150,
    },
    {
      name: "铜导线",
      status: "scheduled",
      left: 81,
      top: 150,
    },
    {
      name: "硅钢卷",
      status: "scheduled",
      left: 139,
      top: 150,
    },
    {
      name: "夹件",
      status: "scheduled",
      left: 191,
      top: 150,
    },
    {
      name: "铁心绝缘件",
      status: "scheduled",
      left: 235,
      top: 150,
    },
    {
      name: "器身绝缘件",
      status: "running",
      progress: 30,
      left: 291,
      top: 150,
    },
    {
      name: "引线绝缘体",
      status: "delayed",
      progress: 80,
      left: 343,
      top: 150,
    },
    {
      name: "油箱",
      status: "scheduled",
      left: 399,
      top: 150,
    },
    {
      name: "总装绝缘件",
      status: "running",
      progress: 30,
      left: 454,
      top: 150,
    },
    {
      name: "有载开关",
      status: "scheduled",
      left: 518,
      top: 150,
    },
    {
      name: "套管",
      status: "scheduled",
      left: 574,
      top: 150,
    },
    {
      name: "组部件",
      status: "scheduled",
      left: 620,
      top: 150,
    },
  ];

  const productionFlow: DataFlowChartItemProps[] = [
    {
      name: "引线预制",
      status: "delayed",
      progress: 20,
      left: 343,
      top: 260,
    },
    {
      name: "器身下箱",
      status: "running",
      progress: 80,
      left: 454,
      top: 282,
    },
    {
      name: "二次装配",
      status: "running",
      progress: 80,
      left: 663,
      top: 259,
    },
    {
      name: "铁心横剪",
      status: "running",
      progress: 80,
      left: 137,
      top: 347,
    },
    {
      name: "铁心叠片",
      status: "running",
      progress: 80,
      left: 214,
      top: 347,
    },
    {
      name: "器身组装",
      status: "running",
      progress: 80,
      left: 285,
      top: 347,
    },
    {
      name: "上轭铁装配",
      status: "running",
      progress: 80,
      left: 343,
      top: 347,
    },
    {
      name: "引线装配",
      status: "running",
      progress: 80,
      left: 398,
      top: 347,
    },
    {
      name: "器身干燥",
      status: "running",
      progress: 80,
      left: 454,
      top: 347,
    },
    {
      name: "总装配",
      status: "running",
      progress: 80,
      left: 502,
      top: 347,
      width: 164,
    },
    {
      name: "成品实验",
      status: "running",
      progress: 80,
      left: 689,
      top: 347,
    },
    {
      name: "拆卸包装",
      status: "running",
      progress: 80,
      left: 746,
      top: 347,
    },
    {
      name: "线圈打底",
      status: "scheduled",
      left: 22,
      top: 436,
    },
    {
      name: "线圈绕制",
      status: "scheduled",
      left: 81,
      top: 436,
    },
    {
      name: "线圈套装",
      status: "scheduled",
      left: 243,
      top: 436,
    },
  ];

  return (
    <div className={styles.chartContainer}>
      {
        designFlow.map((item, index) => (<DataFlowChartItem key={`design-${index}`} {...item} />))
      }

      {
        purchaseFlow.map((item, index) => (<DataFlowChartItem key={`purchase-${index}`} {...item} />))
      }

      {
        productionFlow.map((item, index) => (<DataFlowChartItem key={`production-${index}`} {...item} />))
      }

      <Image alt="箭头指示"
             className={styles.arrows}
             height={410}
             src="/flow-chart-arrows.svg"
             width={798} />

      <div className={`${styles.section} ${styles.sectionDesign}`}>
        <span className={`${styles.label}`}>设计</span>

        <div className={styles.structureFrame}>
          <span className={styles.structureLabel}>结构设计</span>
        </div>
      </div>

      <div className={`${styles.section} ${styles.sectionPurchase}`}>
        <span className={`${styles.label}`}>采购</span>
      </div>

      <div className={`${styles.section} ${styles.sectionProduction}`}>
        <span className={`${styles.label}`}>制造</span>
      </div>
    </div>
  );
}
