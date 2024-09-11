"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Define types for local data
interface HourBasedProductionData {
  [key: number]: number[];
}

const HourBasedProduction: React.FC = () => {
  const [shiftNo, setShiftNo] = useState<number>(1);

  // Local data object to replace API input with sample data for different shifts
  const hourBasedProductionData: HourBasedProductionData = {
    1: [2, 4, 6, 8, 6, 4, 2, 0],
    2: [3, 5, 7, 6, 5, 4, 3, 2],
    3: [1, 3, 5, 7, 8, 7, 5, 3],
    4: [4, 5, 3, 5, 6, 8, 1, 3],
    5: [3, 6, 8, 1, 5, 3, 2, 4],
    6: [1, 5, 8, 2, 6, 4, 8, 1],
  };

  const [array, setArray] = useState<number[]>(hourBasedProductionData[1]); // Set default data for shift 1

  const getHourDetails = (shiftNo: number): void => {
    // Instead of an API call, use the local object data
    if (hourBasedProductionData[shiftNo]) {
      setArray(hourBasedProductionData[shiftNo]);
    }
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      setShiftNo((prevShiftNo) => {
        const newShiftNo = prevShiftNo + 1;
        if (newShiftNo <= 3) {
          // Assuming there are 3 shifts
          return newShiftNo;
        }
        return prevShiftNo;
      });
    }, 5000);

    setTimeout(() => {
      clearInterval(myInterval);
    }, 5000);
  }, []);

  useEffect(() => {
    getHourDetails(shiftNo);
  }, [shiftNo]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      x: {
        min: 0,
        max: 8,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        min: 0,
        max: 8,
        ticks: {
          stepSize: 1,
          callback: (value: number) => value.toString(), // Display all values from 0 to 8
        },
      },
    },
  };

  const data = {
    labels: [
      "1st Hour",
      "2nd Hour",
      "3rd Hour",
      "4th Hour",
      "5th Hour",
      "6th Hour",
      "7th Hour",
      "8th Hour",
    ],
    datasets: [
      {
        label: "Work Completed",
        data: array,
        borderColor: "red",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center p-4 bg-yellow-300">
      <div className="w-full h-full">
        <header className="mb-4 text-center">
          <h3 className="text-lg font-semibold">Hour Based Production</h3>
        </header>

        <div className="relative w-full h-96 bg-white shadow-md p-4 rounded-lg">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default HourBasedProduction;
