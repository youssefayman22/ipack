import { useEffect, useState } from "react";
import styles from "./StatusBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  statusBarSelector,
  currentAnimationStatus,
} from "../../store/statusBarSlice";

const barAnimations = {
  0: { decrease: styles.barDec0 },
  1: { decrease: styles.barDec1, increase: styles.barInc1 },
  2: { decrease: styles.barDec2, increase: styles.barInc2 },
  3: { decrease: styles.barDec3, increase: styles.barInc3 },
  4: { decrease: styles.barDec4, increase: styles.barInc4 },
  5: { decrease: styles.barDec5, increase: styles.barInc5 },
};

export default function StatusBar({ currentStep, totalSteps }) {
  const dispatch = useDispatch();
  const { currentDirection } = useSelector(statusBarSelector);
  const [animationClass, setAnimationClass] = useState();

  const progressPercentage = ((currentStep / totalSteps) * 100).toFixed(0);

  const handleGoBackBrowser = (e) => {
    dispatch(currentAnimationStatus(0));
  };

  useEffect(() => {
    window.addEventListener("popstate", handleGoBackBrowser);

    return () => {
      window.removeEventListener("popstate", handleGoBackBrowser);
    };
  }, []);

  useEffect(() => {
    let direction = currentDirection !== 0 ? "increase" : "decrease";
    setAnimationClass(barAnimations[currentStep]?.[direction]);
  }, [currentStep, currentDirection]);

  return (
    <div className={styles["status-bar"]}>
      <div
        className={`${styles["progress-bar"]} ${animationClass}`}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
