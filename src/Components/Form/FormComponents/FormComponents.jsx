import NameTextBox from "../../UsernameTextInput/NameTextBox.jsx";
import Activities from "../../Activities/Activities.js";
import RadioButtonGroup from "../../RadioButtonGroup/RadioButtonGroup.jsx";
import { options } from "../../../constants/radioButtonOptions.js";

import { ErrorMessageTextOptions } from "../../../constants/ErrorMessageTextOptions.js";
import Slider from "../../Slider/Slider.jsx";

const formComponents = [
  {
    name: "name",
    component: NameTextBox,
    attributes: {
      rules: {
        required: ErrorMessageTextOptions.emptyErrorMessage,
        pattern: {
          value: /^(?!\s*$)[A-Za-z\s]+$/,
          message: ErrorMessageTextOptions.hasNumberErrorMessage,
        },
      },
    },
  },
  {
    name: "gender",
    component: RadioButtonGroup,
    attributes: {
      rules: { required: ErrorMessageTextOptions.genderErrorMessage },
      options: options.genderOptions,
    },
  },
  {
    name: "destination",
    component: RadioButtonGroup,
    attributes: {
      rules: { required: ErrorMessageTextOptions.destinationErrorMessage },
      options: options.destinationOptions,
    },
  },
  {
    name: "transportation",
    component: RadioButtonGroup,
    attributes: {
      rules: { required: ErrorMessageTextOptions.transportationErrorMessage },
      options: options.transportationOptions,
    },
  },
  {
    name: "season",
    component: RadioButtonGroup,
    attributes: {
      rules: { required: ErrorMessageTextOptions.seasonErrorMessage },
      options: options.seasonOptions,
    },
  },
  {
    name: "days",
    component: Slider,
    attributes: {
      defaultValue: 1,
      title: "Length of Stay",
    },
  },
  {
    name: "isChildren",
    component: RadioButtonGroup,
    attributes: {
      rules: { required: ErrorMessageTextOptions.childrenErrorMessage },
      options: options.isChildrenOptions,
    },
  },
  {
    name: "isPet",
    component: RadioButtonGroup,
    attributes: {
      rules: { required: ErrorMessageTextOptions.petErrorMessage },
      options: options.isPetOptions,
    },
  },
  {
    name: "activities",
    component: Activities,
    attributes: {
      defaultValue: [],
    },
  },
];

export { formComponents };
