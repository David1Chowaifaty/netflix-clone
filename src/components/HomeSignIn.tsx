"use client";
import { FunctionComponent, useState } from "react";
import Input from "./ui/Input";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
interface HomeSignInProps {}

const HomeSignIn: FunctionComponent<HomeSignInProps> = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <form className="flex flex-col gap-9 lg:flex-row lg:items-center mt-14">
      <Input
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
