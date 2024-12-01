import {
  Gender,
  Titles,
  Destination,
  Season,
} from "./../constants/userOptionsModel";
function filterItemsBasedOnCriterias(
  data,
  firstCriteria,
  secondCriteria = undefined
) {
  return secondCriteria
    ? data
        ?.filter((item) => item?.[firstCriteria] && item?.[secondCriteria])
        .map((el) => ({ id: el.id, itemName: el.item }))
    : data
        ?.filter((item) => item?.[firstCriteria])
        .map((el) => ({ id: el.id, itemName: el.item }));
}

export default async function fetchSuggestedItems(title, selectedData) {

  const result = { };

  try {
    const { gender, destination, season, isChildren, isPet } = selectedData;

    //fetching data from the json file in the mock folder based on the title
    const response = await fetch(`http://localhost:8000/data`);
    const data = (await response.json())?.[title];

    const genderKey =
      gender.toLowerCase() === Gender.MALE ? "isMale" : "isFemale";

    const tripTypeKey =
      destination.toLocaleLowerCase() === Destination.LOCAL
        ? "isLocal"
        : "isInternational";

    const seasonTypeKey =
      season.toLocaleLowerCase() === Season.SUMMER ? "isSummer" : "isWinter";

    //iterating over the data to find the suggested items based on the selectedData
    switch (title) {
      case Titles.DOCUMENTS: // filtering the documents based on the selected data
        result.user = filterItemsBasedOnCriterias(data, genderKey, tripTypeKey);

        if (isChildren)
          result.children = filterItemsBasedOnCriterias(data, "isChildren");

        if (isPet) result.pets = filterItemsBasedOnCriterias(data, "isPet");

        return result;

      case Titles.MEDICATIONS: //filtering medications based on selected data
      case Titles.PERSONAL_CARE:
        result.user = filterItemsBasedOnCriterias(data, genderKey);

        if (isChildren)
          result.children = filterItemsBasedOnCriterias(data, "isChildren");

        if (isPet) result.pets = filterItemsBasedOnCriterias(data, "isPet");

        return result;

      case Titles.OUTER_WEAR_CLOTHES: //filtering outer wear clothes based on selected data
        result.user = filterItemsBasedOnCriterias(
          data,
          genderKey,
          seasonTypeKey
        );

        if (isChildren)
          result.children = filterItemsBasedOnCriterias(
            data,
            "isChildren",
            seasonTypeKey
          );

        if (isPet)
          result.pets = filterItemsBasedOnCriterias(
            data,
            "isPet",
            seasonTypeKey
          );

        return result;

      case Titles.ELECTRONICS: // filtering electronics based on selected data
      case Titles.HOME_WEAR_CLOTHES:
        result.user = filterItemsBasedOnCriterias(data, genderKey);

        if (isChildren)
          result.children = filterItemsBasedOnCriterias(data, "isChildren");

        return result;

      default:
        return result;
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
