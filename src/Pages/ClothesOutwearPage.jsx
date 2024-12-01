import AccordionPageLayout from "../Components/AccordionPageLayout/AccordionPageLayout";
import AccordionsContainer from "../Components/AccordionPageLayout/AccordionsContainer";
import { useNavigate } from "react-router-dom";
import {
  LandingHeaderImage,
  AccordionTitle,
  SuggestionSubTitle,
} from "../constants/textConstants";

import { Titles, checklistPageTitles } from "../constants/userOptionsModel";
import { useDispatch } from "react-redux";
import { currentAnimationStatus } from "../store/statusBarSlice";

const clothesOutwearPageTitle = Titles.OUTER_WEAR_CLOTHES;
const outerwearDisplayName = checklistPageTitles.OUTER_WEAR_CLOTHES;

const ClothesOutwearPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <AccordionPageLayout
      titleText={AccordionTitle}
      subtitleText={SuggestionSubTitle}
      imageName={LandingHeaderImage}
      containerText={checklistPageTitles.OUTER_WEAR_CLOTHES}
      onChange={() => {
        navigate("/homewear");
        dispatch(currentAnimationStatus(1));
      }}
    >
      <AccordionsContainer
        pageName={clothesOutwearPageTitle}
        pageDisplayName={outerwearDisplayName}
      />
    </AccordionPageLayout>
  );
};

export default ClothesOutwearPage;
