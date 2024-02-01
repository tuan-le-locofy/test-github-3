import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

type GroupComponentType = {
  rectangle19?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  rectangle19,
  propBackgroundImage,
  propWidth,
  propHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const managepropertytextStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.rectangleframesParent}>
      <div className={styles.rectangleframes} />
      <div className={styles.rectangleParent} style={frameDivStyle}>
        <img className={styles.frameChild} alt="" src={rectangle19} />
        <div
          className={styles.managepropertytext}
          style={managepropertytextStyle}
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.sobhaHearlandIiVillasParent}>
          <div className={styles.sobhaHearlandIi}>Sobha Hearland II Villas</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum.
          </div>
          <div className={styles.starsParent}>
            <div className={styles.stars}>
              <img
                className={styles.starinactivebigIcon}
                loading="eager"
                alt=""
                src="/starinactivebig.svg"
              />
              <img
                className={styles.starinactivebigIcon1}
                loading="eager"
                alt=""
                src="/starinactivebig-1.svg"
              />
              <img
                className={styles.starinactivebigIcon2}
                loading="eager"
                alt=""
                src="/starinactivebig-2.svg"
              />
              <img
                className={styles.starinactivebigIcon3}
                loading="eager"
                alt=""
                src="/starinactivebig-3.svg"
              />
              <img
                className={styles.starinactivebigIcon4}
                loading="eager"
                alt=""
                src="/starinactivebig-4.svg"
              />
            </div>
            <div className={styles.backgroundFrame}>4.83</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
