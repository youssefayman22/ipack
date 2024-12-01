import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { updateUserData, userDataSelector } from "../../store/userDataSlice.js";

import ComponentWrapper from "./ComponentWrapper.jsx";
import CustomButton from "../Button/CustomButton.jsx";
import { formComponents } from "./FormComponents/FormComponents.jsx";

import useScreenSize from "../../hooks/detectScreenSize.jsx";

import { Flex, Popconfirm } from "antd";

import styles from "./FormContainer.module.css";
import "./antPopupStyle.css";

import { resetDataLists } from "../../store/dataSlice.js";
import { useState } from "react";

const FormContainer = ({ firstRowElements = 6 }) => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pageRefreshed, setPageRefreshed] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [dataFinal, setDataFinal] = useState();

  const oldValue = useSelector(userDataSelector);

  const screenSize = useScreenSize();
  const isMobile = screenSize.width <= 768;

  const handlePopupConfirm = () => {
    dispatch(resetDataLists());
    dispatch(updateUserData(dataFinal));
    navigate("/documents");
  };

  const handlePopupCancel = () => {
    setPageRefreshed((prev) => !prev);
    setPopupOpen(false);
    navigate("/");
  };

  const displayComponentColumn = (start, end = formComponents.length) => {
    return formComponents
      .slice(start, end)
      .map(({ name, component, attributes }, index) => (
        <div key={index + start}>
          <ComponentWrapper
            key={index + start}
            name={name}
            Component={component}
            control={control}
            {...attributes}
          />
          <br />
        </div>
      ));
  };

  const detectChange = (data) => {
    const { name, ...dataNoName } = data;
    const { name: nameStore, ...dataNoNameStore } = oldValue;

    return (
      nameStore.length > 0 &&
      JSON.stringify(dataNoName) != JSON.stringify(dataNoNameStore)
    );
  };

  const onSubmitHandler = (data) => {
    const dataSub = data;
    dataSub.isChildren = data.isChildren == "Yes";
    dataSub.isPet = data.isPet == "Yes";
    setDataFinal(dataSub);
    const hasChanged = detectChange(dataSub);
    if (hasChanged) {
      setPopupOpen(true);
    } else {
      dispatch(updateUserData(dataSub));
      navigate("/documents");
    }
  };

  return (
    <>
      <Popconfirm
        title="The changes you made will override the custom edits you did to the lists. Do you want to proceed?"
        open={popupOpen}
        onConfirm={handlePopupConfirm}
        onCancel={handlePopupCancel}
        okText="Proceed"
        cancelText="Revert Changes"
      >
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmitHandler)}
          key={pageRefreshed}
        >
          <Flex vertical={isMobile} gap={!isMobile ? "15%" : null}>
            <div className={styles.formColumn} key="0">
              {displayComponentColumn(
                0,
                Math.min(firstRowElements, formComponents.length)
              )}
            </div>

            <div className={styles.formColumn} key="1">
              {formComponents.length > firstRowElements
                ? displayComponentColumn(firstRowElements)
                : null}
              <div className={styles.nextButtonContainer}>
                <CustomButton
                  text="Next"
                  onSubmit={handleSubmit(onSubmitHandler)}
                />
              </div>
            </div>
          </Flex>
        </form>
      </Popconfirm>
    </>
  );
};

export default FormContainer;
