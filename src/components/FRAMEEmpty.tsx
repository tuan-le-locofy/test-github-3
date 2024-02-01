import { FunctionComponent } from "react";
import styles from "./FRAMEEmpty.module.css";

const FRAMEEmpty: FunctionComponent = () => {
  return (
    <header className={styles.fRAMEEmpty}>
      <div className={styles.fRAMEEmptyChild} />
      <div className={styles.fRAMELogo}>
        <div className={styles.logo}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <img
              className={styles.frameInner}
              loading="eager"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <div className={styles.fRAMEProjectsListing}>
            <img
              className={styles.buildIcon}
              loading="eager"
              alt=""
              src="/build.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.cOMPONENTSearch}>
        <div className={styles.cOMPONENTSearchChild} />
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.projects}>Projects</div>
        <div className={styles.agents}>Agents</div>
        <div className={styles.services}>Services</div>
        <div className={styles.listings}>Listings</div>
        <img
          className={styles.vuesaxlinearsearchNormalIcon}
          loading="eager"
          alt=""
          src="/vuesaxlinearsearchnormal.svg"
        />
      </div>
      <div className={styles.fRAMEOtherServices}>
        <div className={styles.tEXTTransferOfRealEstat}>
          <div className={styles.fRAMECustomersFrame}>
            <div className={styles.otherServices}>Other services</div>
            <img
              className={styles.vuesaxlineararrowRightIcon}
              loading="eager"
              alt=""
              src="/vuesaxlineararrowright@2x.png"
            />
          </div>
        </div>
        <button className={styles.fRAMEBookNow}>
          <div className={styles.contactUs}>Contact us</div>
        </button>
      </div>
    </header>
  );
};

export default FRAMEEmpty;
