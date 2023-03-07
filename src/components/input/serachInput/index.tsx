import { useState, ReactElement } from "react";
import { FaRegEye, FaEyeSlash, FaSearch } from "react-icons/fa";
import style from "../input.module.scss";
interface InputProps {
  label?: string;
  type?: string;
  name: string;
  error?: string | null;
  placeholder?: string;
  rightIcon?: string | ReactElement;
  onChange?: () => void;
  value?:string,
}

const SearchInputField = (props: InputProps) => {
  const { label, type, name, error, placeholder, rightIcon, onChange,value } = props;

  return (
    <div className="text-left text-xs  mb-6 w-full relative">
      {label && (
        <label
          htmlFor={name}
          className={`pr-2 text-sm md:text-base ${error && "text-red-500"}`}
        >
          {label}
        </label>
      )}

      <input
        name={name}

        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className={`rounded-lg text-black px-2 pl-9 mt-2 w-full py-1 h-10 text-sm md:text-base ${
          error && "border-2 border-red-500"
        }`}
      />

      <br />
      <FaSearch className={style.iconSearch} />
      <div>{rightIcon && rightIcon}</div>

      {error ? <span className="text-red-500 text-xs">{error}</span> : ""}
    </div>
  );
};

export default SearchInputField;
