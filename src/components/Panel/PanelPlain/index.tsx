import styles from "./panel-plain.module.css";

interface PanelPlainProps {
  children: React.ReactNode;
  className?: string;
  size?: number;
}

export default function PanelPlain(props: PanelPlainProps) {
  return (
    <div className={styles.section + (props.className ? ` ${props.className}` : "")}
         style={{
           flex: props.size ? `${props.size}px 0 0` : 1,
         }}>
      {props.children}
    </div>
  );
}
