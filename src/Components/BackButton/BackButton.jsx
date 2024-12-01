import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { currentAnimationStatus } from "../../store/statusBarSlice";

export default function BackButton({ history }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
    dispatch(currentAnimationStatus(0));
  };
  return (
    <button onClick={handleClick} className={styles.backButton}>
      Back
    </button>
  );
}
