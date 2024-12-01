import React from "react";
import AccordianPageLayoutCss from "../AccordionPageLayout/AccordionPageLayout.module.css";
import Subheader from "../HomePageLayout/Subheader/Subheader";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../store/userDataSlice";
import StatusBar from "../StatusBar/StatusBar";
import BackButton from "../BackButton/BackButton";
import { checklistPageTitles as Titles } from "../../constants/userOptionsModel";

const stepMapping = {
  [Titles.DOCUMENTS]: 0,
  [Titles.ELECTRONICS]: 1,
  [Titles.OUTER_WEAR_CLOTHES]: 2,
  [Titles.HOME_WEAR_CLOTHES]: 3,
  [Titles.MEDICATIONS]: 4,
  [Titles.PERSONAL_CARE]: 5,
};

function findCurrentStep(containerText) {
  return stepMapping[containerText];
}

const AccordionPageLayout = ({
  onChange,
  subtitleText,
  imageName,
  containerText,
  titleText,
  pageId,
  children,
}) => {
  const userData = useSelector(userDataSelector);
  const { name } = userData;

  return (
    <>
      <Subheader
        titleText={`${titleText} ${name}!`}
        subtitleText={subtitleText}
        imageName={imageName}
      />
      <div className={AccordianPageLayoutCss.Body}>
        <div className={AccordianPageLayoutCss.Container}>
          <StatusBar
            currentStep={findCurrentStep(containerText)}
            totalSteps={5}
          />
          <div className={AccordianPageLayoutCss.Title}>{containerText}</div>
          <div className={AccordianPageLayoutCss.ContainerFlex}>{children}</div>
          <div className={AccordianPageLayoutCss.buttonsContainer}>
            <BackButton />
            <button
              onClick={() => onChange()}
              className={AccordianPageLayoutCss.NextButton}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccordionPageLayout;
