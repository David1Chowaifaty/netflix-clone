"use client";
import { FunctionComponent, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FunctionComponent<InputProps> = ({ ...props }) => {
  const { placeholder, id, value } = props;
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <label htmlFor={id} className="relative flex items-center">
      <span
        className={`px-4 font-semibold text-gray-500 absolute transition-all ${
          (focused || value !== "") && "top-2 -mt-2 text-white text-xs  "
        }`}
      >
        {placeholder}
      </span>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
        className="h-12 w-80 rounded-md text-sm align-bottom  outline-white px-4 border border-gray-600 bg-black/40 placeholder:text-transparent"
      />
    </label>
  );
};

export default Input;
