"use client";

import { useEffect, useState } from "react";
import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  height?: number;
  width?: number;
}

export default function Container(props: ContainerProps) {
  const [style, setStyle] = useState<any>(null);

  useEffect(() => {
    setStyle({
      height: props.height,
      transform: props.width ? `scale(${window.innerWidth / props.width})` : null,
      width: props.width,
    });
  }, []);

  return (
    <section className={styles.container}
             style={style}>
      {props.header}

      <main className={styles.main}>{props.children}</main>
    </section>
  );
}
