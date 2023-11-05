import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Post2.module.css";

const Post2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconographyCaesarzkn2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconographyCaesarzkn4Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  return (
    <div className={styles.post2}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.tag}>TAG</div>
          <div className={styles.frame2}>
            <img className={styles.frameChild} alt="" src="/rectangle-10.svg" />
            <div className={styles.frameParent}>
              <div className={styles.iconographyCaesarzknParent}>
                <img
                  className={styles.iconographyCaesarzkn}
                  alt=""
                  src="/iconography--caesarzkn7.svg"
                />
                <img className={styles.frameItem} alt="" src="/line-2.svg" />
                <img
                  className={styles.iconographyCaesarzkn}
                  alt=""
                  src="/iconography--caesarzkn8.svg"
                />
              </div>
              <div className={styles.westwoodPlazaLosAngelesCParent}>
                <div className={styles.westwoodPlazaLos}>
                  425 Westwood Plaza, Los Angeles, CA 90095
                </div>
                <div className={styles.westwoodPlazaLos}>
                  1000 Gayley Ave, Los Angeles, CA 90024
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tagWrapper}>
          <div className={styles.tag1}>Tag</div>
        </div>
      </div>
      <div className={styles.frame3}>
        <img className={styles.frameInner} alt="" src="/rectangle-11.svg" />
        <div className={styles.bottomNavBarWrapper}>
          <div className={styles.bottomNavBar}>
            <img
              className={styles.iconographyCaesarzkn2}
              alt=""
              src="/iconography--caesarzkn3.svg"
              onClick={onIconographyCaesarzkn2Click}
            />
            <img
              className={styles.iconographyCaesarzkn3}
              alt=""
              src="/iconography--caesarzkn4.svg"
            />
            <img
              className={styles.iconographyCaesarzkn4}
              alt=""
              src="/iconography--caesarzkn2.svg"
              onClick={onIconographyCaesarzkn4Click}
            />
            <img
              className={styles.bottomNavBarChild}
              alt=""
              src="/line-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post2;
