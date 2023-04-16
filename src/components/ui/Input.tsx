"use client";
import { FunctionComponent, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  focused: boolean;
}

const Input: FunctionComponent<InputProps> = ({ focused, error, ...props }) => {
  const { placeholder, id, value } = props;

  return (
    <div>
      <label
        htmlFor={id}
        className={`relative flex items-center  rounded-md h-12 py-1 px-4 w-80 bg-black/40 border ring-gray-300 border-gray-600 ${
          focused && "ring"
        } ${error && "border-red-500 border-2"}`}
      >
        <span
          className={`px-4 font-semibold text-gray-500 absolute transition-all ${
            (focused || value !== "") && "top-3 -mt-2 text-white text-xs  "
          }`}
        >
          {placeholder}
        </span>
        <input
          {...props}
          className="  text-sm   w-full bg-transparent self-end focus:outline-none px-4    placeholder:text-transparent"
        />
      </label>
      {error && <p className="text-red-500">Invalid Email</p>}
    </div>
  );
};

export default Input;
