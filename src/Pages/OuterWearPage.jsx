import AccordionPageLayout from "../Components/AccordionPageLayout/AccordionPageLayout";
import { useNavigate } from "react-router-dom";
import AccordionsContainer from "../Components/AccordionPageLayout/AccordionsContainer";

import {
  LandingTitle,
  LandingHeaderImage,
  SuggestionSubTitle,
} from "../constants/textConstants";
import { Titles, checklistPageTitles } from "../constants/userOptionsModel";
import { useDispatch } from "react-redux";
import { currentAnimationStatus } from "../store/statusBarSlice";

export default function OuterWearPage() {
  const navigate = useNavigate();
  const personalPageTitle = Titles.OUTER_WEAR_CLOTHES;
  const personalDisplayName = checklistPageTitles.OUTER_WEAR_CLOTHES;
  const dispatch = useDispatch();
  return (
    <div>
      <AccordionPageLayout
        titleText={LandingTitle}
        subtitleText={SuggestionSubTitle}
        imageName={LandingHeaderImage}
        containerText={checklistPageTitles.OUTER_WEAR_CLOTHES}
        onChange={() => {
          navigate("/homewear");
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