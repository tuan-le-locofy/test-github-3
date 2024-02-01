import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <Button
        className={styles.frameChild}
        style={{ width: "211px" }}
        type="primary"
      >
        hello world
      </Button>
    </div>
  );
};

export default Frame;
