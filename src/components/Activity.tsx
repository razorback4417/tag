import { FunctionComponent } from "react";
import styles from "./Activity.module.css";

const Activity: FunctionComponent = () => {
  return (
    <div className={styles.activity}>
      <img className={styles.activityChild} alt="" src="/ellipse-1@2x.png" />
      <img className={styles.activityChild} alt="" src="/ellipse-51@2x.png" />
      <img className={styles.activityChild} alt="" src="/ellipse-2@2x.png" />
      <img className={styles.activityChild} alt="" src="/ellipse-31@2x.png" />
      <img className={styles.activityChild1} alt="" src="/ellipse-4@2x.png" />
    </div>
  );
};

export default Activity;
