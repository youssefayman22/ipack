import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userDataSelector } from "../store/userDataSlice";
import { updateDataList, dataList } from "../store/dataSlice";

import fetchSuggestedItems from "../utils/fetchSuggestedItems";

const useFetchAccordionListData = (pageTitle) => {
  const dispatch = useDispatch();

  const userData = useSelector(userDataSelector);
  const accordionLists = useSelector(dataList);

  let isPreStored = true;

  useEffect(() => {
    if (accordionLists)
      isPreStored = accordionLists?.[pageTitle]?.user;
  },[accordionLists])

  useEffect(() => {
    if (userData && !isPreStored) {
      fetchSuggestedItems(pageTitle, userData).then((initialState) =>
        dispatch(
          updateDataList({
            sectionName: pageTitle,
            dataObject: { ...initialState },
          })
        )
      );
    }
  }, [userData]);

  return accordionLists?.[pageTitle];
};

export default useFetchAccordionListData;
