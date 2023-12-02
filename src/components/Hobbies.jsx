import React from "react";
import Button from "./Button";
import Input from "./Input";

export const Hobbies = () => {
  return (
    <div>
      <div className="font-poppins text-base sm:text-red-500 md:text-Adio-blue lg:text-green-500 xl:text-gray-500">
        Hobbies: Coding, PLaying Violin, Reading
      </div>
      <Button text="Coming Soon" />

      <Input
        type="email"
        placeholder="enter your email address"
        label="Email"
      />
      <Input label="First name" />
      <Input label=" password" type="password" />
    </div>
  );
};

export const Age = () => {
  return <div></div>;
};
