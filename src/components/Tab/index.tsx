import styles from "./tab.module.css";

export interface TabItemProps {
  name: string;
  text: string;
}

interface TabProps {
  activeTab: string;
  className?: string;
  data: TabItemProps[];
}

export default function Tab(props: TabProps) {
  return (
    <div className={`${styles.tab} ${props.className || ""}`}>
      {
        props.data.map(tabItem => {
          const active = props.activeTab === tabItem.name;

          return (
            <span className={`${styles.tabItem} ${active ? styles.active : ""}`}
                  key={tabItem.name}>
              {tabItem.text}
            </span>
          );
        })
      }
    </div>
  );
}
