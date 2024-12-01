import { Titles, checklistPageTitles } from "../../constants/userOptionsModel";

function getDisplayName(sectionName) {
  switch (sectionName) {
    case Titles.DOCUMENTS:
      return checklistPageTitles.DOCUMENTS;

    case Titles.ELECTRONICS:
      return checklistPageTitles.ELECTRONICS;

    case Titles.HOME_WEAR_CLOTHES:
      return checklistPageTitles.HOME_WEAR_CLOTHES;

    case Titles.MEDICATIONS:
      return checklistPageTitles.MEDICATIONS;

    case Titles.PERSONAL_CARE:
      return checklistPageTitles.PERSONAL_CARE;

    case Titles.OUTER_WEAR_CLOTHES:
      return checklistPageTitles.OUTER_WEAR_CLOTHES;
      
    default:
      return;
  }
}

export default getDisplayName;
