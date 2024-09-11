"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

const BarChartComponent: React.FC = () => {
  // Default data for the chart
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    labels: [
      "1 hour",
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours",
      "6 hours",
      "7 hours",
      "8 hours",
    ],
    datasets: [
      {
        label: "Production Time",
        data: [50, 60, 70, 80, 90, 85, 75, 65],
        backgroundColor: "rgba(34, 197, 94, 0.7)", // Green
      },
      {
        label: "Loss Time",
        data: [10, 20, 30, 15, 25, 35, 20, 10],
        backgroundColor: "rgba(239, 68, 68, 0.7)", // Red
      },
      {
        label: "Maintenance Time",
        data: [5, 10, 15, 10, 5, 20, 25, 15],
        backgroundColor: "rgba(234, 179, 8, 0.7)", // Yellow
      },
    ],
  });

  // Automatically update the data every 5 seconds for demo purposes (can be set to 1 minute)
  useEffect(() => {
    const updateData = () => {
      setChartData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset: ChartDataset) => ({
          ...dataset,
          data: dataset.data.map((value: number) =>
            Math.max(
              0,
              Math.min(80, value + Math.floor(Math.random() * 10 - 5))
            )
          ),
        })),
      }));
    };

    const interval = setInterval(updateData, 5000); // Update every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Chart options with y-axis and x-axis customization
  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Hours",
        },
      },
      y: {
        beginAtZero: true,
        max: 80,
        ticks: {
          stepSize: 10,
        },
        title: {
          display: true,
          text: "Time (minutes)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Machine Efficiency (Production, Loss, Maintenance)",
      },
    },
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <div className=" h-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChartComponent;
