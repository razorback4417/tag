import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyProfile.module.css";

const MyProfile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconographyCaesarzknClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconographyCaesarzkn1Click = useCallback(() => {
    navigate("/post-1");
  }, [navigate]);

  return (
    <div className={styles.myProfile}>
      <img className={styles.myProfileChild} alt="" src="/ellipse-52@2x.png" />
      <div className={styles.johnDoe}>John Doe</div>
      <div className={styles.pastTags}>Past tags</div>
      <div className={styles.currentTags}>Current tags</div>
      <div className={styles.div}>123-456-7890</div>
      <div className={styles.rfyVariant1}>
        <img
          className={styles.rfyVariant1Child}
          alt=""
          src="/rectangle-21@2x.png"
        />
        <img
          className={styles.rfyVariant1Item}
          alt=""
          src="/rectangle-31@2x.png"
        />
        <img
          className={styles.rfyVariant1Inner}
          alt=""
          src="/rectangle-41@2x.png"
        />
        <div className={styles.recommendedForYou}>Recommended For You</div>
      </div>
      <img className={styles.myProfileItem} alt="" src="/group-5.svg" />
      <div className={styles.bottomNavBarWrapper}>
        <div className={styles.bottomNavBar}>
          <img
            className={styles.iconographyCaesarzkn}
            alt=""
            src="/iconography--caesarzkn3.svg"
            onClick={onIconographyCaesarzknClick}
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
            src="/iconography--caesarzkn5.svg"
          />
          <img className={styles.bottomNavBarChild} alt="" src="/line-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
