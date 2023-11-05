import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Post1.module.css";

const Post1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/post-2");
  }, [navigate]);

  const onIconographyCaesarzknClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconographyCaesarzkn2Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  return (
    <div className={styles.post1}>
      <div className={styles.tag}>TAG</div>
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
          <div className={styles.groupInner} onClick={onRectangle2Click} />
          <div className={styles.own}>Own</div>
        </div>
      </div>
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
            src="/iconography--caesarzkn4.svg"
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

export default Post1;
