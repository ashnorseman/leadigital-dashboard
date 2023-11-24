import styles from "./section-header.module.css";

interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>{props.children}</div>
  );
}
