import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import styles from "./ThreeStepsGroup.module.css";

const ThreeStepsGroup: FunctionComponent = () => {
  return (
    <section className={styles.threeStepsGroup}>
      <div className={styles.messageGroup}>
        <div className={styles.threeStepsThree}>
          Three steps. Three minutes.
        </div>
        <h1 className={styles.everythingShouldBe}>
          Everything should be this easy.
        </h1>
      </div>
      <div className={styles.frameParent}>
        <GroupComponent1
          vuesaxlinearmessages="/vuesaxlinearmessages.svg"
          answerQuestions="Answer questions"
        />
        <GroupComponent1
          vuesaxlinearmessages="/vuesaxlinearsmstracking.svg"
          answerQuestions="Select a quote"
        />
        <GroupComponent1
          vuesaxlinearmessages="/vuesaxlinearedit2.svg"
          answerQuestions="Get registered"
        />
      </div>
    </section>
  );
};

export default ThreeStepsGroup;
