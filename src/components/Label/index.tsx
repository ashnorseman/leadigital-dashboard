import styles from "./label.module.css";

interface LabelProps {
  children: React.ReactNode;
  className: string;
}

export default function Label(props: LabelProps) {
  return (
    <span className={`${styles.label} ${props.className}`}>{props.children}</span>
  );
}
