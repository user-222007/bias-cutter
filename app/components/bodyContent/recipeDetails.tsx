import React from "react";

const RecipeDetails = () => {
  return (
    <div>
      <div className="flex  flex-col items-center gap-4 ">
        <p className=" font-bold">Recipe Details</p>
        <div className="flex flex-col  gap-4">
          <div className="flex  px-4">
            <p className="w-48 font-semibold ">RECIPE NAME</p> :
            <p className="w-48 px-10 font-sans ">Mano Ranjith</p>
          </div>
          <div className="flex px-4 ">
            <p className="w-48 font-semibold">SAP NAME</p> :
            <p className="w-48 px-10 font-sans ">Mohan Raj</p>
          </div>
          <div className="flex px-4 ">
            <p className="w-48 font-semibold">FABRIC CODE</p> :
            <p className="w-48 px-10 font-sans ">DE00134</p>
          </div>
          <div className="flex px-4 ">
            <p className="w-48 font-semibold">CUTTING WIDTH</p> :
            <p className="w-48 px-10 font-sans ">
              10
              <span className=" text-gray-500 text-sm p-1 ">X</span>
              15
            </p>
          </div>
          <div className="flex px-4 ">
            <p className="w-48 font-semibold">CUTTING ANGLE</p> :
            <p className="w-48 px-10 font-sans ">145°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
