import styles from "./Header.module.css";
import "../../../assets/app.css";
import { images } from '../../../assets/imageImports';

/**
 * Header component used in page layout
 *
 * @returns {JSX.Element} The rendered header component
 */

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <img
        src={images.vodIcon}
        alt="Vodafone Logo"
        className={styles.headerIcon}
      />
    </header>
  );
};

export default Header;
