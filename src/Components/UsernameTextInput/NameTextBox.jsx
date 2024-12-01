import TextBox from "../TextBox/TextBox.jsx";
import styles from "../Form/FormContainer.module.css"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const NameTextBox = ({ hasError, onChange, errorMessage }) => {
  const defaultValue = useSelector((state)=>state.userDataReducer.name);
  useEffect(()=>{
    if(defaultValue)
      onChange(defaultValue)
  }, [defaultValue])
  return (
    <>
    <p className={styles.formLabel}>Add Traveler</p>
    <TextBox
      label="Name"
      placeHolder="Enter Your Name"
      onTextChange={onChange}
      isEmpty={hasError}
      errorMessage={errorMessage}
      defaultValue = {defaultValue}
    />
    </>
  );
};

export default NameTextBox;
