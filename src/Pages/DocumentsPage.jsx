import AccordionPageLayout from "../Components/AccordionPageLayout/AccordionPageLayout";

import AccordionsContainer from "../Components/AccordionPageLayout/AccordionsContainer";
import { useNavigate } from "react-router-dom";

import {
  LandingHeaderImage,
  SuggestionSubTitle,
  AccordionTitle,
} from "../constants/textConstants";

import { Titles, checklistPageTitles } from "../constants/userOptionsModel";
import { useDispatch } from "react-redux";
import { currentAnimationStatus } from "../store/statusBarSlice";

function DocumentsPage(
  titleText,
  subtitleText,
  imageName,
  containerText,
  pageId
) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const personalPageTitle = Titles.DOCUMENTS;
  const personalDisplayName = checklistPageTitles.DOCUMENTS;
  return (
    <div>
      <AccordionPageLayout
        titleText={AccordionTitle}
        subtitleText={SuggestionSubTitle}
        imageName={LandingHeaderImage}
        containerText={checklistPageTitles.DOCUMENTS}
        onChange={() => {
          navigate("/electronics");
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

export default DocumentsPage;
