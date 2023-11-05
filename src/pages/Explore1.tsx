import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore1.module.css";

const Explore1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipseImage1Click = useCallback(() => {
    navigate("/sample-profile");
  }, [navigate]);

  const onIconographyCaesarzkn1Click = useCallback(() => {
    navigate("/post-1");
  }, [navigate]);

  const onIconographyCaesarzkn2Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  return (
    <div className={styles.explore1}>
      <div className={styles.explore1Inner}>
        <div className={styles.frameChild} />
      </div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-32@2x.png" />
      <img className={styles.image4Icon} alt="" src="/image-41@2x.png" />
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <div className={styles.tag}>TAG</div>
      <div className={styles.activity}>
        <img className={styles.activityChild} alt="" src="/ellipse-1@2x.png" />
        <img
          className={styles.activityItem}
          alt=""
          src="/ellipse-5@2x.png"
          onClick={onEllipseImage1Click}
        />
        <img className={styles.activityChild} alt="" src="/ellipse-2@2x.png" />
        <img className={styles.activityChild} alt="" src="/ellipse-3@2x.png" />
        <img className={styles.activityChild1} alt="" src="/ellipse-4@2x.png" />
      </div>
      <div className={styles.recommendedForYou}>
        <img
          className={styles.recommendedForYouChild}
          alt=""
          src="/rectangle-2@2x.png"
        />
        <img
          className={styles.recommendedForYouItem}
          alt=""
          src="/rectangle-3@2x.png"
        />
        <img
          className={styles.recommendedForYouInner}
          alt=""
          src="/rectangle-4@2x.png"
        />
        <div className={styles.recommendedForYou1}>Recommended For You</div>
      </div>
      <div className={styles.bottomNavBarWrapper}>
        <div className={styles.bottomNavBar}>
          <img
            className={styles.iconographyCaesarzkn}
            alt=""
            src="/iconography--caesarzkn.svg"
          />
          <img
            className={styles.iconographyCaesarzkn1}
            alt=""
            src="/iconography--caesarzkn1.svg"
            onClick={onIconographyCaesarzkn1Click}
          />
          <img
            className={styles.iconographyCaesarzkn2}
            alt=""
            src="/iconography--caesarzkn2.svg"
            onClick={onIconographyCaesarzkn2Click}
          />
          <img className={styles.bottomNavBarChild} alt="" src="/line-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Explore1;
