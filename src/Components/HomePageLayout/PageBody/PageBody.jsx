import "../../../assets/app.css";
import { images } from "../../../assets/imageImports";
import styles from "./PageBody.module.css";

/**
 * Body component used in layout
 *
 * To change the icon in the corner (if needed), pass it's name in a string as a prop
 *
 * Refer to `imageImports.js` for the names of icons
 *
 * @param {string} imageName - Determines which icon to display
 * @returns {JSX.Element} The rendered body component
 */
const PageBody = ({ children, imageName }) => {
  const imgUrl = imageName ? images[imageName] || "" : "";
  const bodyImageStyle = {
    backgroundImage: imgUrl === "" ? "none" : `url(${imgUrl})`,
  };

  return (
    <div className={styles.homepageBody} style={bodyImageStyle}>
      {children}
    </div>
  );
};

export default PageBody;
