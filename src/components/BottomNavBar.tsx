import { FunctionComponent } from "react";
import styles from "./BottomNavBar.module.css";

const BottomNavBar: FunctionComponent = () => {
  return (
    <div className={styles.bottomNavBar}>
      <div className={styles.property1search}>
        <img
          className={styles.iconographyCaesarzkn}
          alt=""
          src="/iconography--caesarzkn.svg"
        />
        <img
          className={styles.iconographyCaesarzkn1}
          alt=""
          src="/iconography--caesarzkn1.svg"
        />
        <img
          className={styles.iconographyCaesarzkn2}
          alt=""
          src="/iconography--caesarzkn2.svg"
        />
        <img className={styles.property1searchChild} alt="" src="/line-1.svg" />
      </div>
      <div className={styles.property1post}>
        <img
          className={styles.iconographyCaesarzkn}
          alt=""
          src="/iconography--caesarzkn3.svg"
        />
        <img
          className={styles.iconographyCaesarzkn1}
          alt=""
          src="/iconography--caesarzkn4.svg"
        />
        <img
          className={styles.iconographyCaesarzkn2}
          alt=""
          src="/iconography--caesarzkn2.svg"
        />
        <img className={styles.property1postChild} alt="" src="/line-1.svg" />
      </div>
      <div className={styles.property1profile}>
        <img
          className={styles.iconographyCaesarzkn}
          alt=""
          src="/iconography--caesarzkn3.svg"
        />
        <img
          className={styles.iconographyCaesarzkn1}
          alt=""
          src="/iconography--caesarzkn1.svg"
        />
        <img
          className={styles.iconographyCaesarzkn2}
          alt=""
          src="/iconography--caesarzkn5.svg"
        />
        <img
          className={styles.property1profileChild}
          alt=""
          src="/line-1.svg"
        />
      </div>
    </div>
  );
};

export default BottomNavBar;
