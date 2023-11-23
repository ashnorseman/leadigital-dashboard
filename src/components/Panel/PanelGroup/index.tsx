import styles from "./panel-group.module.css";

interface PanelGroupProps {
  children: React.ReactNode;
  className?: string;
  direction: "column" | "row";
  size?: number;
}

export default function PanelGroup(props: PanelGroupProps) {
  return (
    <div className={styles.section + (props.className ? ` ${props.className}` : "")}
         style={{
           flexDirection: props.direction,
           flex: props.size ? `${props.size}px 0 0` : 1,
         }}>
      {props.children}
    </div>
  );
}
