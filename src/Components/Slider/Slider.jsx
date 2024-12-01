import React, { useState,useEffect } from "react";
import { Slider as AntdSlider } from "antd";
import SliderStyle from './Slider.css'
import { useSelector } from "react-redux";

/**
 *   
 * @param {object} SliderProps
 * @param {string} SliderProps.title
 * @param {Function} SliderProps.onSliderChange
 * @param {object} [SliderProps.style] - Custom styles for the slider
 * @return {JSX.Element}
 */

const Slider = ({ title, onChange, style = {width:"80%"} }) => {
  const defaultValue = useSelector(state => state.userDataReducer.days);

  useEffect(()=>{
    if(defaultValue)
      onChange(defaultValue)
  }, [defaultValue])

  const [lengthStay, setLengthStay] = useState(defaultValue);

  const onChangeLocal = (value) => {
    setLengthStay(value);
    onChange(value);
  };
  

  return (
    <div>
      <p className="title">{title}</p>
      <AntdSlider
        min={1}
        max={30}
        onChange={onChangeLocal}
        value={lengthStay}
        style={style}
        marks={{
          1: "1 day",
          30: "30 days",
        }}
      />
    </div>
  );
};

export default Slider;
