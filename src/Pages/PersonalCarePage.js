import AccordionPageLayout from "../Components/AccordionPageLayout/AccordionPageLayout";
import AccordionsContainer from "../Components/AccordionPageLayout/AccordionsContainer";
import { useNavigate } from "react-router-dom";

import {
  AccordionTitle,
  LandingHeaderImage,
  SuggestionSubTitle,
} from "../constants/textConstants";
import { Titles, checklistPageTitles } from "../constants/userOptionsModel";
import { useDispatch } from "react-redux";
import { currentAnimationStatus } from "../store/statusBarSlice";

function PersonalCarePage() {
  const personalPageTitle = Titles.PERSONAL_CARE;
  const personalDisplayName = checklistPageTitles.PERSONAL_CARE;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <AccordionPageLayout
      titleText={AccordionTitle}
      subtitleText={SuggestionSubTitle}
      imageName={LandingHeaderImage}
      containerText={checklistPageTitles.PERSONAL_CARE}
      onChange={() => {
        navigate("/checklist");
        dispatch(currentAnimationStatus(1));
      }}
    >
      <AccordionsContainer
        pageName={personalPageTitle}
        pageDisplayName={personalDisplayName}
      />
    </AccordionPageLayout>
  );
}

export default PersonalCarePage;
