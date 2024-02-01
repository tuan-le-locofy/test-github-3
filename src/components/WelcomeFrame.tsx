import { FunctionComponent } from "react";
import GroupComponent2 from "./GroupComponent2";
import styles from "./WelcomeFrame.module.css";

const WelcomeFrame: FunctionComponent = () => {
  return (
    <div className={styles.welcomeFrame}>
      <img
        className={styles.welcomeFrameChild}
        loading="eager"
        alt=""
        src="/group-2@2x.png"
      />
      <div className={styles.emailForm}>
        <img
          className={styles.emailFormChild}
          alt=""
          src="/rectangle-14@2x.png"
        />
        <div className={styles.threeSteps}>
          <div className={styles.welcomeToRealstate}>Welcome to Realstate</div>
          <h1 className={styles.manageYourProperty}>Manage Your Property</h1>
        </div>
        <div className={styles.yourWillHave}>
          Your will have everything nearby supermarket, buses , station, the
          carmen neighborhood, etc
        </div>
        <GroupComponent2
          propWidth="438px"
          propPadding="0px 0px 0px var(--padding-5xl)"
          propWidth1="438px"
        />
      </div>
    </div>
  );
};

export default WelcomeFrame;
