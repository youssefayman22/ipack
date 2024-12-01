import React from "react";
import Accordion from "../Accordion/Accordion";
import useFetchAccordionListData from "../../hooks/FetchAccordionListData";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../store/userDataSlice";
import { Flex } from "antd";
import {listNames} from "../../constants/textConstants";
 
const AccordionsContainer = ({ pageName, pageDisplayName }) => {
  const AccordionListData = useFetchAccordionListData(pageName);
  const { name, isChildren, isPet } = useSelector(userDataSelector);
 
  // Render three Accordion components, each with its own set of data
  return (
    <Flex vertical gap="3vh">
      {AccordionListData?.[listNames.user] && (
        <Accordion
          items={AccordionListData[listNames.user]}
          listName={listNames.user}
          userName={name}
          pageTitle={pageName}
          pageDisplayName={pageDisplayName}
        />
      )}

      {isChildren && AccordionListData?.[listNames.children] && (
        <Accordion
          items={AccordionListData[listNames.children]}
          listName={listNames.children}
          userName={name}
          pageTitle={pageName}
          pageDisplayName={pageDisplayName}
        />
      )}
 
      {isPet && AccordionListData?.[listNames.pets] && (
        <Accordion
          items={AccordionListData[listNames.pets]}
          listName={listNames.pets}
          userName={name}
          pageTitle={pageName}
          pageDisplayName={pageDisplayName}
        />
      )}
    </Flex>
  );
};

export default AccordionsContainer;
