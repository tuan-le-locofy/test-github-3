import { FunctionComponent } from "react";
import styles from "./HeaderFrame.module.css";

const HeaderFrame: FunctionComponent = () => {
  return (
    <section className={styles.headerFrame}>
      <h1 className={styles.weAreA}>
        We are a global, boutique real estate brokerage
      </h1>
      <div className={styles.threeColumnsFrame}>
        <div className={styles.searchBarComponent}>
          <div className={styles.subtitleText}>
            <div className={styles.servicesListFrame}>
              <div className={styles.projectNameText}>
                <h1 className={styles.theTransferOf}>
                  The transfer of real estate
                </h1>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
                  pellentesque sollicitudin. Egestas faucibus lacus diam in
                  senectus consectetur. Mattis elit adipiscing quisque tellus
                  scelerisque vehicula ante nunc. Tellus consequat nisl quis
                  nisl justo.
                </div>
              </div>
              <div className={styles.bookNowButton}>
                <button className={styles.readMoreButton}>
                  <div className={styles.bookNow}>Book Now!</div>
                </button>
                <button className={styles.readMoreButton1}>
                  <div className={styles.readMore}>Read More</div>
                </button>
              </div>
            </div>
            <div className={styles.officesFrame}>
              <div className={styles.subscribeAreaFrame}>
                <div className={styles.inputFieldFrame}>12+</div>
                <div className={styles.customers}>Customers</div>
              </div>
              <div className={styles.subscribeAreaFrame1}>
                <div className={styles.div}>14+</div>
                <div className={styles.officesWrapper}>
                  <div className={styles.offices}>Offices</div>
                </div>
              </div>
              <div className={styles.subscribeAreaFrame2}>
                <div className={styles.div1}>10+</div>
                <div className={styles.students}>Students</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-27@2x.png"
          />
          <div className={styles.newsletterSubscribe} />
        </div>
      </div>
    </section>
  );
};

export default HeaderFrame;
