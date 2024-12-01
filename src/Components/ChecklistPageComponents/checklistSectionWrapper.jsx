import { useSelector } from "react-redux";
import ChecklistContainer from "./ChecklistContainer";

import { userDataSelector } from "../../store/userDataSlice";
import { listNames } from "../../constants/textConstants";

const ChecklistSectionWrapper = ({ listName, listData }) => {
  const { name } = useSelector(userDataSelector);

  return (
    <>
      {listData?.[listNames.user] && (
        <ChecklistContainer
          headerTitle={listName}
          subHeaderTitle={`${name}'s ${listName}`}
          arrayOfItems={listData[listNames.user]}
        />
      )}
      {listData?.[listNames.children] && (
        <ChecklistContainer
          subHeaderTitle={`Children's ${listName}`}
          arrayOfItems={listData[listNames.children]}
        />
      )}{" "}
      {listData?.[listNames.pets] && (
        <ChecklistContainer
          subHeaderTitle={`Pet's ${listName}`}
          arrayOfItems={listData[listNames.pets]}
        />
      )}
    </>
  );
};

export default ChecklistSectionWrapper;
