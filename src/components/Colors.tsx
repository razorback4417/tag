import { FunctionComponent } from "react";
import styles from "./Colors.module.css";

const Colors: FunctionComponent = () => {
  return (
    <div className={styles.colors}>
      <img
        className={styles.screenShot20231105At113}
        alt=""
        src="/screen-shot-20231105-at-113-1@2x.png"
      />
      <img
        className={styles.screenShot20231105At114}
        alt=""
        src="/screen-shot-20231105-at-114-1@2x.png"
      />
      <img
        className={styles.screenShot20231105At111}
        alt=""
        src="/screen-shot-20231105-at-111-1@2x.png"
      />
      <img
        className={styles.screenShot20231104At606}
        alt=""
        src="/screen-shot-20231104-at-606-1@2x.png"
      />
    </div>
  );
};

export default Colors;
