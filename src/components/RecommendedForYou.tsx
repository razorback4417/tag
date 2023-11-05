import { FunctionComponent } from "react";
import styles from "./RecommendedForYou.module.css";

const RecommendedForYou: FunctionComponent = () => {
  return (
    <div className={styles.recommendedForYou}>
      <div className={styles.property1default}>
        <img
          className={styles.property1defaultChild}
          alt=""
          src="/rectangle-21@2x.png"
        />
        <img
          className={styles.property1defaultItem}
          alt=""
          src="/rectangle-31@2x.png"
        />
        <img
          className={styles.property1defaultInner}
          alt=""
          src="/rectangle-41@2x.png"
        />
        <div className={styles.recommendedForYou1}>Recommended For You</div>
      </div>
      <div className={styles.property1variant2}>
        <img
          className={styles.property1defaultChild}
          alt=""
          src="/rectangle-22@2x.png"
        />
        <img
          className={styles.property1defaultItem}
          alt=""
          src="/rectangle-32@2x.png"
        />
        <img
          className={styles.property1defaultInner}
          alt=""
          src="/rectangle-42@2x.png"
        />
        <div className={styles.recommendedForYou1}>Recommended For You</div>
      </div>
    </div>
  );
};

export default RecommendedForYou;
