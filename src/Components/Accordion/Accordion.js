import React, { useState } from "react";

import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "antd/dist/reset.css";
import "./Accordion.css";

import AccordionElement from "../Accordions/AccordionElement/AccordionElement";
import ItemTextBox from "../Accordions/AddItemTextInput/ItemTextBox";

const { Panel } = Collapse;

const Accordion = ({
  items,
  listName,
  userName,
  pageTitle,
  index = 1,
  pageDisplayName,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Collapse
      accordion
      activeKey={activeIndex !== null ? [activeIndex] : []}
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
      expandIconPosition="end"
      className="accordion"
      onChange={handleClick}
    >
      <Panel
        header={
          <div className="accordion-header TextElement">
            {listName != "user"
              ? listName.charAt(0).toUpperCase() + listName.slice(1)
              : userName}{" "}
            {listName == "pets" ? `'` : `'s`} {pageDisplayName}
          </div>
        }
        key={index}
        className="accordion-panel"
      >
        {items.map((e) => (
          <div className="accordionElementContainer" key={e.id}>
            <AccordionElement
              item={e}
              sectionName={pageTitle}
              listName={listName}
            />
          </div>
        ))}
        <ItemTextBox sectionName={pageTitle} listName={listName} />
      </Panel>
    </Collapse>
  );
};

export default Accordion;
