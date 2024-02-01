import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./BestProjects.module.css";

const BestProjects: FunctionComponent = () => {
  return (
    <section className={styles.bestProjects}>
      <div className={styles.bestprojectsframe}>
        <div className={styles.bestProjectOf}>Best Project of the Years</div>
        <div className={styles.starratinggroup}>
          <h1 className={styles.ourRecentProjects}>Our recent projects</h1>
          <div className={styles.villaprojectframe}>
            <img
              className={styles.villaprojectframeChild}
              loading="eager"
              alt=""
              src="/group-10.svg"
            />
            <div className={styles.wrapperGroup11}>
              <img
                className={styles.wrapperGroup11Child}
                loading="eager"
                alt=""
                src="/group-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <GroupComponent
          rectangle19="/rectangle-19@2x.png"
          propBackgroundImage="url('/rectangle-19@2x.png')"
          propWidth="447px"
          propHeight="263px"
        />
        <GroupComponent
          rectangle19="/rectangle-20@2x.png"
          propBackgroundImage="url('/rectangle-20@2x.png')"
          propWidth="100%"
          propHeight="100%"
        />
        <GroupComponent
          rectangle19="/rectangle-21@2x.png"
          propBackgroundImage="url('/rectangle-21@2x.png')"
          propWidth="100%"
          propHeight="100%"
        />
      </div>
    </section>
  );
};

export default BestProjects;
