import React from "react";
import InputStyles from "./Input.module.css";

type InputProps = {
  type?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: { [key: string]: string };
  label?: string;
  name?: string;
  value?: string | string[];
  selectOptions?: string[]; // Array of options for select element
  accept?:string
  checked?:boolean
};

const Input = ({
  checked,
  accept,
  type = "text",
  onChange,
  style,
  placeholder,
  label,
  name,
  value,
  selectOptions,
}: InputProps) => {
  const isSelect = type === "select";

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    onChange?.({
      target: {
        name,
        value,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={InputStyles.wrapper}>
      {isSelect ? (
        <select
          aria-checked = {checked}
          id={label}
          name={name}
          value={value}
          onChange={handleInputChange}
          style={style}
          className={InputStyles.input}
        >
          {selectOptions &&
            selectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      ) : (
        <input
          id={label}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          style={style}
          className={InputStyles.input}
          accept={accept}
        />
      )}
      {label && <label htmlFor={label}>{label}</label>}
    </div>
  );
};

export default Input;
