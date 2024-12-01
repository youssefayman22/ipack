import TextBox from "../../TextBox/TextBox.jsx";
import AddIcon from "../../../assets/images/AddIcon.png";
import { addItem } from "../../../store/dataSlice.js";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const ItemTextBox = (props) => {
  const dispatch = useDispatch();

  const [itemToAdd, setItemToAdd] = useState("");

  const handleTextChange = (text) => {
    setItemToAdd(text);
  };

  const handleAddItem = () => {
    if (itemToAdd.trim() === "") {
      return;
    }
    dispatch(
      addItem({
        sectionName: props.sectionName,
        newItemName: itemToAdd,
        listName: props.listName,
      })
    );
  };

  return (
    <TextBox
      placeHolder="Add New Item"
      isPlaceHolderOpaque={true}
      iconSrc={AddIcon}
      onTextChange={handleTextChange}
      onEnterKeyDown={handleAddItem}
    />
  );
};

export default ItemTextBox;
