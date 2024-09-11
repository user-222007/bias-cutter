import React from "react";
import PlanComponent from "./planComponent";
import AngleWidthComponent from "./angleWidthComponent";
import HourBasedProduction from "./hourBasedProduction";
import RecipeDetails from "./recipeDetails";
import PieChart from "./pieChart";
import BarChartComponent from "./BarChartComponent";

const BodyContent = () => {
  return (
    <div className="bg-[white] flex flex-col py-2 mt-5 rounded-[20px] z-10  ">
      <div className="grid grid-cols-3 gap-4 bg-green-300 ">
        <PlanComponent />
        <AngleWidthComponent />
        <HourBasedProduction />
        <RecipeDetails />
        <PieChart />
        <BarChartComponent />
      </div>
    </div>
  );
};

export default BodyContent;
