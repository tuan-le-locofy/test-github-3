import { FunctionComponent } from "react";
import FRAMEEmpty from "../components/FRAMEEmpty";
import WelcomeFrame from "../components/WelcomeFrame";
import ThreeStepsGroup from "../components/ThreeStepsGroup";
import BestProjects from "../components/BestProjects";
import HeaderFrame from "../components/HeaderFrame";
import SubscribeBox from "../components/SubscribeBox";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <section className={styles.frameAboutUsProjects}>
        <FRAMEEmpty />
        <WelcomeFrame />
      </section>
      <ThreeStepsGroup />
      <BestProjects />
      <HeaderFrame />
      <SubscribeBox />
    </div>
  );
};

export default LandingPage;
