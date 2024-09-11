// pages/index.tsx
"use client";

import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Predefined values for each time category
  const runTimeValues = [50, 40, 60, 70, 80]; // Example values
  const lossTimeValues = [30, 25, 35, 20, 40]; // Example values
  const maintenanceTimeValues = [20, 35, 15, 10, 30]; // Example values

  // State to manage the current values
  const [runTime, setRunTime] = useState<number>(runTimeValues[0]);
  const [lossTime, setLossTime] = useState<number>(lossTimeValues[0]);
  const [maintenanceTime, setMaintenanceTime] = useState<number>(
    maintenanceTimeValues[0]
  );

  // Index to cycle through the arrays
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Automatically update values every minute (60,000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % runTimeValues.length);
    }, 5000); // 1 minute interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Update the state whenever the index changes
  useEffect(() => {
    setRunTime(runTimeValues[currentIndex]);
    setLossTime(lossTimeValues[currentIndex]);
    setMaintenanceTime(maintenanceTimeValues[currentIndex]);
  }, [currentIndex]);

  // Chart data configuration
  const data = {
    labels: ["Run Time", "Loss Time", "Maintenance Time"],
    datasets: [
      {
        label: "Time Distribution",
        data: [runTime, lossTime, maintenanceTime],
        backgroundColor: ["#34D399", "#EF4444", "#FBBF24"], // Tailwind green, red, yellow
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Time Distribution Chart</h1>

      {/* Render the Pie chart */}
      <div className="w-full max-w-xs mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;
