"use client";
import { FunctionComponent, useState } from "react";
import Input from "./ui/Input";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface HomeSignInProps {}

const HomeSignIn: FunctionComponent<HomeSignInProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  function validateEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <form className="flex flex-col gap-9 lg:flex-row lg:items-center mt-14">
      <Input
        error={error}
        placeholder="Email address"
        value={email}
        onFocus={() => setFocused(true)}
        focused={focused}
        onChange={(e) => {
          setError(false);
          setEmail(e.target.value);
        }}
        onBlur={() => {
          setFocused(false);
          validateEmail(email) ? setError(false) : setError(true);
        }}
      />
      <button
        type="submit"
        className="bg-red-600 w-fit px-6 py-2 flex items-center gap-4 text-white font-medium text-lg lg:text-2xl rounded-md hover:bg-red-700"
      >
        <p>Get Started</p>
        <ChevronRightIcon className="h-5 w-5" strokeWidth={3} />
      </button>
    </form>
  );
};

export default HomeSignIn;
