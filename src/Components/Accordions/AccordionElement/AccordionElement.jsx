import React from "react";

import "./AccordionElement.css";

import DeleteIcon from "../DeleteIcon";

import { useDispatch } from "react-redux";
import {deleteItem} from "../../../store/dataSlice"

/* This function gets an object containing the (label and the id) and the delete function  */
const AccordionElement = ({ item, listName, sectionName }) => {
  const { id, itemName } = item;
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(
      deleteItem({
        id: id,
        listName: listName,
        sectionName: sectionName,
      })
    );
  };

  return (
    <div className="Center">
      <div className="AccordionElementBox">
        <div className="textBox">
          <h3 className="TextElement">{itemName}</h3>
        </div>
        <button
          onClick={() => onDelete(id, listName, sectionName)}
          className="DeleteButton"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default AccordionElement;
