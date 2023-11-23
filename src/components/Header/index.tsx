import moment from "moment";
import Image from "next/image";
import styles from "./header.module.css";

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const time = moment().format("LL LTS");

  return (
    <header className={styles.header}>
      <Image alt="Logo" 
             className={styles.logo}
             height={119}
             src="/logo.png" 
             width={166} />

      <h1 className={styles.title}>正泰高压电气设备（武汉）有限公司<br />{props.title}</h1>

      <span className={styles.time}>{time}</span>
    </header>
  );
}
