import RadioButtonGroup from "./RadioButtonGroup/RadioButtonGroup";
import {
  PetRadioLabel,
  PetRadioLabelYes,
  PetRadioLabelNo,
} from "../constants/textConstants";

/**
 * Form component to render two radio buttons for pet option
 *
 * @param {boolean} hasError - Indicates if there is an error
 * @param {function} onChange - Callback function to handle change events
 * @param {string} errorMessage - The error message to display
 * @returns {JSX.Element} The rendered Pet option component
 */
const PetRadioButton = ({ hasError, onChange, errorMessage }) => {
  const options = [
    {
      category: PetRadioLabel,
      inputs: [
        { label: PetRadioLabelYes, value: "true" },
        { label: PetRadioLabelNo, value: "false" },
      ],
    },
  ];

  return (
    <RadioButtonGroup
      hasError={hasError}
      errorMessage={errorMessage}
      onChange={onChange}
      options={options}
    />
  );
};

export default PetRadioButton;
