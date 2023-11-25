import styles from "./panel-header.module.css";

interface PanelHeaderProps {
  children?: React.ReactNode;
  title: string;
}

export default function PanelHeader(props: PanelHeaderProps) {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>{props.title}</h3>
      {props.children}
    </header>
  );
}
