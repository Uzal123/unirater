"use client";
import Topbar from "@/components/Topbar";
import React, { FC } from "react";

const page = () => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Topbar />
      <div className="content flex justify-center items-center bg-secondary">
        <div className="flex flex-col items-center justify-center p-8 gap-2 bg-secondary rounded-lg h-max">
          <div className="flex justify-center border-b-highlight border-b-2">
            <h1 className="text-3xl py-4 font-bold">Register</h1>
          </div>
          <h1 className="text-3xl py-4 font-bold">
            Welcome to Uni<span className="text-highlight">Rater</span>
          </h1>
          <form className="flex flex-col items-center justify-center gap-3">
            <p className="text-semibold">
              Enter your details below to Register
            </p>
            <Input
              label="Email"
              type="email"
              placeholder="test@example.com"
              onChange={inputChange}
            />
            <Input
              label="Username"
              type="text"
              placeholder="username"
              onChange={inputChange}
            />
            <Input
              label="Create a password"
              type="password"
              placeholder="*******"
              onChange={inputChange}
            />
            <button className="bg-highlight text-white rounded-lg p-2 w-full mt-4">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const Input: FC<InputProps> = ({ label, placeholder, onChange, type }) => {
  return (
    <div className="flex flex-col justify-center gap-1.5">
      <label className="text-sm font-light">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="p-2 rounded-lg focus:ring-1 focus:ring-highlight focus:outline-none"
      />
    </div>
  );
};
