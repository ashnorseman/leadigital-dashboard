import Image from "next/image";
import PanelCorner from "@/components/Panel/PanelCorner";
import AreaBlock from "./AreaBlock";
import AreaLegend from "./AreaLegend";
import StaticAreaBlock from "./StaticAreaBlock";
import styles from "./section-area-map.module.css";

export default function SectionAreaMap() {
  return (
    <PanelCorner>
      <div className={styles.container}>
        <div className={styles.legendContainer}>
          <AreaLegend name="设备型" type="equipment" />
          <AreaLegend name="人/设备协作型" type="human-equipment" />
          <AreaLegend name="人/工装协作型" type="assembly" />
          <AreaLegend name="人员型" type="human" />
        </div>

        <div className={styles.warehouse}>仓库</div>

        <StaticAreaBlock direction="row"
                         left={256}
                         height={58}
                         top={54}
                         width={142}>物料分拣转运区</StaticAreaBlock>

        <StaticAreaBlock direction="column"
                         left={269}
                         height={109}
                         top={134}
                         width={53}>登高梯</StaticAreaBlock>

        <StaticAreaBlock direction="column"
                         left={238}
                         height={99}
                         top={386}
                         width={77}>压盘放置区</StaticAreaBlock>

        <StaticAreaBlock direction="row"
                         left={324}
                         height={99}
                         top={386}
                         width={77}>绕线模具放置区</StaticAreaBlock>

        <StaticAreaBlock direction="row"
                         left={837}
                         height={145}
                         top={507}
                         width={88}>
          <div>
            <Image alt="看板"
                   className={styles.dashbaord}
                   height={43}
                   src="/dashboard.jpg"
                   width={67} />
            <div>车间看板<br />介绍区</div>
          </div>
        </StaticAreaBlock>

        <AreaBlock direction="row"
                   name="整理打压"
                   status="blue"
                   type="assembly"
                   left={0}
                   height={94}
                   top={261}
                   width={238}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="去漆打磨"
                   status="red"
                   type="assembly"
                   left={247}
                   height={116}
                   top={261}
                   width={110}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="整理打压"
                   status="green"
                   type="assembly"
                   left={0}
                   height={190}
                   top={390}
                   width={65}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="线圈干燥"
                   status="green"
                   type="equipment"
                   left={72}
                   height={154}
                   top={426}
                   width={159}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="row"
                   name="整理装配"
                   type="human"
                   left={238}
                   height={86}
                   top={494}
                   width={163}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="row"
                   name="线圈套装"
                   status="green"
                   type="assembly"
                   left={0}
                   height={94}
                   top={595}
                   width={292}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="row"
                   name="压装绝缘"
                   status="green"
                   type="assembly"
                   left={302}
                   height={94}
                   top={595}
                   width={207}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="row"
                   name="线圈套装"
                   status="yellow"
                   type="equipment"
                   left={520}
                   height={94}
                   top={595}
                   width={155}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="卧绕"
                   status="red"
                   type="human-equipment"
                   left={411}
                   height={217}
                   top={128}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="立绕"
                   status="green"
                   type="human-equipment"
                   left={481}
                   height={217}
                   top={128}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="卧绕"
                   status="green"
                   type="human-equipment"
                   left={551}
                   height={217}
                   top={128}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="立绕"
                   status="green"
                   type="human-equipment"
                   left={621}
                   height={217}
                   top={128}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="卧绕"
                   status="green"
                   type="human-equipment"
                   left={691}
                   height={217}
                   top={128}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="立绕"
                   status="green"
                   type="human-equipment"
                   left={761}
                   height={217}
                   top={128}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="卧绕"
                   status="red"
                   type="human-equipment"
                   left={411}
                   height={217}
                   top={363}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="立绕"
                   status="green"
                   type="human-equipment"
                   left={481}
                   height={217}
                   top={363}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="卧绕"
                   status="green"
                   type="human-equipment"
                   left={551}
                   height={217}
                   top={363}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="立绕"
                   status="green"
                   type="human-equipment"
                   left={621}
                   height={217}
                   top={363}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="卧绕"
                   status="green"
                   type="human-equipment"
                   left={691}
                   height={217}
                   top={363}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="立绕"
                   status="yellow"
                   type="human-equipment"
                   left={761}
                   height={217}
                   top={363}
                   width={60}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="绝缘打底"
                   type="human"
                   left={826}
                   height={126}
                   top={221}
                   width={99}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>

        <AreaBlock direction="column"
                   name="绝缘打底"
                   type="human"
                   left={838}
                   height={117}
                   top={373}
                   width={87}>
          引线预制<br />
          P2200665<br />
          张三、李四、王五
        </AreaBlock>
      </div>
    </PanelCorner>
  );
}
