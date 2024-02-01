import { FunctionComponent } from "react";
import Comp3 from "../components/Comp3";
import styles from "./Frame.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.comp1Parent}>
      <Comp3 comp1FlexShrink="0" />
    </div>
  );
};

export default Frame1;
