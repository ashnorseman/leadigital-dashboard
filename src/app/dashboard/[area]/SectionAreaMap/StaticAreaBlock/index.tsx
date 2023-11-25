import styles from "./static-area-block.module.css";

interface StaticAreaBlockProps {
  children: React.ReactNode;
  direction: "column" | "row";
  height: number;
  left: number;
  top: number;
  width: number;
}

export default function StaticAreaBlock(props: StaticAreaBlockProps) {
  return (
    <div className={`${styles.container} ${styles[props.direction]}`}
         style={{
           height: `${props.height}px`,
           left: `${props.left}px`,
           top: `${props.top}px`,
           width: `${props.width}px`,
         }}>{props.children}</div>
  );
}
