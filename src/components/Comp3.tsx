import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Comp3.module.css";

type Comp3Type = {
  /** Style props */
  comp1FlexShrink?: CSSProperties["flexShrink"];
};

const Comp3: FunctionComponent<Comp3Type> = ({ comp1FlexShrink }) => {
  const comp1Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: comp1FlexShrink,
    };
  }, [comp1FlexShrink]);

  return <div className={styles.comp1} style={comp1Style} />;
};

export default Comp3;
