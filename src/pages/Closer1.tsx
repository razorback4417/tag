import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Closer1.module.css";

const Closer1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconographyCaesarzknClick = useCallback(() => {
    navigate("/explore-1");
  }, [navigate]);

  const onEllipseImageClick = useCallback(() => {
    navigate("/sample-profile");
  }, [navigate]);

  const onIconographyCaesarzkn2Click = useCallback(() => {
    navigate("/post-1");
  }, [navigate]);

  const onIconographyCaesarzkn3Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  return (
    <div className={styles.closer1}>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-5.svg" />
        <div className={styles.tagARide}>Tag a ride to Malibu</div>
      </div>
      <img
        className={styles.iconographyCaesarzkn}
        alt=""
        src="/iconography--caesarzkn6.svg"
        onClick={onIconographyCaesarzknClick}
      />
      <img
        className={styles.closer1Child}
        alt=""
        src="/ellipse-51@2x.png"
        onClick={onEllipseImageClick}
      />
      <div className={styles.markLin}>Mark Lin</div>
      <div className={styles.date}>Date</div>
      <div className={styles.description}>Description</div>
      <div className={styles.service}>Service</div>
      <div className={styles.div}>123-456-7890</div>
      <div className={styles.bottomNavBarWrapper}>
        <div className={styles.bottomNavBar}>
          <img
            className={styles.iconographyCaesarzkn1}
            alt=""
            src="/iconography--caesarzkn.svg"
          />
          <img
            className={styles.iconographyCaesarzkn2}
            alt=""
            src="/iconography--caesarzkn1.svg"
            onClick={onIconographyCaesarzkn2Click}
          />
          <img
            className={styles.iconographyCaesarzkn3}
            alt=""
            src="/iconography--caesarzkn2.svg"
            onClick={onIconographyCaesarzkn3Click}
          />
          <img className={styles.bottomNavBarChild} alt="" src="/line-1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Closer1;
