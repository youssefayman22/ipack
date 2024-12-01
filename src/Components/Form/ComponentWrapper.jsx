import { Controller } from "react-hook-form";

//This component wrapper passes props from form (parent)
//to custom Components (children) effectively

const ComponentWrapper = ({
  name,
  control,
  rules = {},
  Component,
  type,
  placeholder,
  defaultValue,
  options,
  title,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <Component
          onChange={field.onChange}
          hasError={!!fieldState.error}
          errorMessage={fieldState.error?.message}
          placeholder={placeholder || ""}
          type={type || "text"}
          options={options}
          title = {title}
          name = {name}
        />
      )}
    />
  );
};

export default ComponentWrapper;
