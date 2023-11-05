import { FunctionComponent } from "react";
import styles from "./TransportationOptions.module.css";

const TransportationOptions: FunctionComponent = () => {
  return (
    <div className={styles.transportationOptions}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <div className={styles.own}>Own</div>
      </div>
    </div>
  );
};

export default TransportationOptions;
