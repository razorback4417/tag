import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SampleProfile.module.css";

const SampleProfile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconographyCaesarzkn1Click = useCallback(() => {
    navigate("/post-1");
  }, [navigate]);

  const onIconographyCaesarzkn2Click = useCallback(() => {
    navigate("/my-profile");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/closer-1");
  }, [navigate]);

  return (
    <div className={styles.sampleProfile}>
      <div className={styles.frame}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.markLin}>Mark Lin</div>
            <div className={styles.div}>123-456-7890</div>
            <div className={styles.addFriendWrapper}>
              <div className={styles.addFriend}>Add friend</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <div className={styles.pastTags}>Past tags</div>
            <div className={styles.currentTags}>Current tags</div>
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
              <div className={styles.recommendedForYou}>
                Recommended For You
              </div>
            </div>
            <div className={styles.recommendedForYou1}>
              <img
                className={styles.rfyVariant1Child}
                alt=""
                src="/rectangle-22@2x.png"
              />
              <img
                className={styles.rfyVariant1Item}
                alt=""
                src="/rectangle-32@2x.png"
              />
              <img
                className={styles.rfyVariant1Inner}
                alt=""
                src="/rectangle-42@2x.png"
              />
              <div className={styles.recommendedForYou}>
                Recommended For You
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frame6}>
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
              <img
                className={styles.bottomNavBarChild}
                alt=""
                src="/line-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frame7}>
          <img
            className={styles.image3Icon}
            alt=""
            src="/image-31@2x.png"
            onClick={onImage3Click}
          />
        </div>
      </div>
    </div>
  );
};

export default SampleProfile;
