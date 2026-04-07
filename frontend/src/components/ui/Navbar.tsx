import React from "react";
import { Button } from "./Button";
import { FaPlus } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="w-full border-b-2 border-neutral-100  p-1 ">
      <div className="flex justify-between items-center">
        <a href="#">
          <div className="flex items-center justify-center ml-10 gap-2">
            <img
              src="/second-brain.png"
              className="h-12 w-12 p-2 cursor-pointer "
            />
            <p className="font-semibold text-xl font-mono hover:text-neutral-500 transition duration-200">Second Brain</p>
          </div>
        </a>

        <div className="flex justify-center ">
          <Button
            variant="primary"
            buttonText="Add Content"
            onClick={() => console.log("clicked")}
            startIcon={<FaPlus />}
          />
          <Button
            variant="secondary"
            buttonText="Share Brain"
            onClick={() => console.log("clicked 2")}
            startIcon={<IoShareOutline />}
          />
        </div>
      </div>
    </div>
  );
};
