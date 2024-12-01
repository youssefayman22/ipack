import React, { useState,useEffect } from "react";
import styles from "./RadioButtonGroup.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useSelector } from "react-redux";

/* To use the Radio button component 
1. Call the component in the form you want to use the radioButton in with options attribute that takes the value{options}
<RadioButtonGroup options={options} />

2. Add new object to the options variable consisting of :
    - Category Name 
    - Array of objects containing label and value
    
    ======= example ========
    const options = [
  {
    category: "Gender",
    inputs: [{label:Gender.Male, value: Gender.MALE }, {label:Gender.FEMALE, value: Gender.FEMALE }],
  },
];
*/

function mapValue(val)
{
  if (typeof(val)=="boolean")
  {
    return val==true ? "Yes" : "No";
  }
  return val;
}

const Input = ({ option, onChange, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(mapValue(defaultValue));
  const bindingData = (e) => {
    setSelectedValue(e.target.value);

    onChange(e.target.value);
  };

  return (
    <>
      <div className={option.inputs.length==3 ? styles.radioContainerThree : styles.radioContainerTwo }>
        {option.inputs.map((inp, index) => (
          <div key={index}>
            <input
              type="radio"
              id={inp.label}
              name={inp.label}
              value={inp.value}
              checked={selectedValue === inp.value}
              onChange={bindingData}
            />
            <label htmlFor={inp.label} className={styles.space}>{inp.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};
const RadioButtonGroup = ({ options, onChange, hasError, errorMessage, name }) => {
  const defaultValue = useSelector(state => state.userDataReducer[name]);

  useEffect(()=>{
    if(defaultValue!=undefined)
    {
      onChange(mapValue(defaultValue))
    }
  }, [defaultValue])

  return (
    <div className={styles.radioGroup}>
      {options.map((option, index) => (
        <div key={index}>
          <label className={styles.category} htmlFor={option.category}>
            {option.category}
          </label>
          <Input key={index} option={option} onChange={onChange} defaultValue={defaultValue} />
          {hasError && <ErrorMessage errorMessage={errorMessage} />}
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
