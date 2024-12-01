import AccordionPageLayout from "../Components/AccordionPageLayout/AccordionPageLayout";
import { useNavigate } from "react-router-dom";
import AccordionsContainer from "../Components/AccordionPageLayout/AccordionsContainer";

import {
  AccordionTitle,
  LandingHeaderImage,
  SuggestionSubTitle,
} from "../constants/textConstants";

import { Titles, checklistPageTitles } from "../constants/userOptionsModel";
import { useDispatch } from "react-redux";
import { currentAnimationStatus } from "../store/statusBarSlice";

function ElectronicsPage() {
  const navigate = useNavigate();
  const personalPageTitle = Titles.ELECTRONICS;
  const personalDisplayName = checklistPageTitles.ELECTRONICS;
  const dispatch = useDispatch();
  return (
    <div>
      <AccordionPageLayout
        titleText={AccordionTitle}
        subtitleText={SuggestionSubTitle}
        imageName={LandingHeaderImage}
        containerText={checklistPageTitles.ELECTRONICS}
        onChange={() => {
          navigate("/outerwearClothes");
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

export default ElectronicsPage;
