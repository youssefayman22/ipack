import styles from "./Subheader.module.css";
import "../../../assets/app.css";
import { images } from "../../../assets/imageImports";

/**
 * Subheader (hero) component used in layout
 *
 * To change the icon (if needed), pass it's name in a string as a prop
 *
 * Refer to `imageImports.js` for the names of icons
 *
 * @param {string} titleText - Determines title text
 * @param {string} subtitleText - Determines subtitle text
 * @param {string} imageName - Determines which icon to display
 * @returns {JSX.Element} The rendered subheader (hero) component
 */

const Subheader = ({ titleText, subtitleText, imageName }) => {
  const imgUrl = imageName
    ? images[imageName] || images["vodIcon"]
    : images["vodIcon"];

  return (
    <div className={styles.subHeaderContainer}>
      <div className={styles.subHeaderContent}>
        <h3 className={styles.subHeaderTitle}>{titleText}</h3>
        <div className={styles.subHeaderSubtitle}>{subtitleText}</div>
        <div
          className={styles.subHeaderImage}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      </div>
    </div>
  );
};

export default Subheader;
