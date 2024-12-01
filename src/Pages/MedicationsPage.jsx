import AccordionPageLayout from "../Components/AccordionPageLayout/AccordionPageLayout";
import { useNavigate } from "react-router-dom";
import AccordionsContainer from "../Components/AccordionPageLayout/AccordionsContainer";

import {
  LandingHeaderImage,
  SuggestionSubTitle,
  AccordionTitle,
} from "../constants/textConstants";

import { Titles, checklistPageTitles } from "../constants/userOptionsModel";
import { useDispatch } from "react-redux";
import { currentAnimationStatus } from "../store/statusBarSlice";

function MedicationsPage(titleText, subtitleText, imageName, containerText) {
  const navigate = useNavigate();
  const personalPageTitle = Titles.MEDICATIONS;
  const personalDisplayName = checklistPageTitles.MEDICATIONS;
  const dispatch = useDispatch();
  return (
    <div>
      <AccordionPageLayout
        titleText={AccordionTitle}
        subtitleText={SuggestionSubTitle}
        imageName={LandingHeaderImage}
        containerText={checklistPageTitles.MEDICATIONS}
        onChange={() => {
          navigate("/personalCare");
          dispatch(currentAnimationStatus(1));
        }}
      >
        <AccordionsContainer
          pageName={personalPageTitle}
          pageDisplayName={personalDisplayName}
        />
      </AccordionPageLayout>
    </div>
  );
}

export default MedicationsPage;
