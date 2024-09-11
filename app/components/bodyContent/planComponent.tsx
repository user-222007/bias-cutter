import React from "react";

interface PlanData {
  plan: string;
  complete: string;
}
interface OperatorData {
  plan: string;
  id: string;
}
interface TargetData {
  complete: string;
}
interface FabMetersData {
  complete: string;
}
interface MachineData {
  complete: string;
}

const plans: PlanData[] = [{ plan: "60", complete: "45" }];
const operator: OperatorData[] = [
  { plan: "Naveenkumar", id: "1001" },
  { plan: "Mohan", id: "1002" },
  { plan: "Nirmal", id: "1003" },
  { plan: "Mydha", id: "1004" },
  { plan: "Ramkumar", id: "1005" },
];
const target: TargetData[] = [
  { complete: "45" },
  { complete: "67" },
  { complete: "13" },
  { complete: "32" },
  { complete: "65" },
];
const fabMeters: FabMetersData[] = [{ complete: "45 Meters" }];
const machine: MachineData[] = [{ complete: "CNC Machine" }];

const PlanComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-red-300">
      {/* 1st half start */}
      <div className="flex flex-col md:flex-row justify-center ">
        {/* Plan Table */}
        <div className="flex-1 p-1 w-[30%]">
          {/* Table Headers */}
          <div className="flex justify-center bg-gray-100 p-4">
            <div className="font-bold text-[10px] text-center w-full">Plan</div>
            <div className="font-bold text-[10px] text-center w-full sm:ml-3 2xl:ml-0 ">
              Complete
            </div>
          </div>

          {/* Table Rows */}
          {plans.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-4 border-b border-gray-300 sm:gap-6 sm:mr-3 2xl:gap-0 2xl:mr-0 "
            >
              <div className="text-[10px] font-semibold text-center w-full">
                {item.plan}
              </div>
              <div className="text-[10px] font-semibold text-center w-full  ">
                {item.complete}
              </div>
            </div>
          ))}
        </div>

        {/* Operator Name */}
        <div className="flex-1 py-1 w-[60%]">
          {/* Table Headers */}
          <div className="flex justify-center bg-gray-100 p-4 ">
            <div className="font-bold text-[10px] text-center w-full">ID</div>
            <div className="font-bold text-[10px] text-center w-full  text-nowrap sm:ml-3 2xl:ml-0 ">
              Operator Name
            </div>
          </div>

          {/* Table Rows */}
          {operator.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-4 border-b border-gray-300 sm:gap-1 sm:mr-6 2xl:gap-0 2xl:mr-0 bg-green-300 "
            >
              <div
                className={` ${
                  item.plan.length < 5 ? "-ml-2" : ""
                } text-[10px] font-semibold text-center w-full ${
                  item.plan.length > 6 ? "pl-2" : ""
                }  `}
              >
                {item.id}
              </div>
              <div
                className={` ${
                  item.plan.length < 5 ? "-ml-5" : ""
                } text-[10px] font-semibold text-center w-full  ${
                  item.plan.length > 6 ? "ml-3  truncate" : ""
                } `}
              >
                {item.plan}
                {/* {item.plan.slice(0, 6) + (item.plan.length > 6 ? ".." : "")} */}
              </div>
            </div>
          ))}
        </div>

        {/* Target Achieved */}
        <div className="flex-1 p-1 w-[30%] ">
          {/* Table Headers */}
          <div className="flex justify-center bg-gray-100 p-4">
            <div className="font-bold text-[10px] text-center w-full text-nowrap">
              Target Achieved
            </div>
          </div>

          {/* Table Rows */}
          {target.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-4 border-b border-gray-300"
            >
              <div className="text-[10px] font-semibold text-center w-full">
                {item.complete}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd half start */}
      <div className="flex flex-col md:flex-row justify-center">
        {/* Total Fab Meters */}
        <div className="flex-1 p-4">
          {/* Table Headers */}
          <div className="flex justify-center bg-gray-100 p-4">
            <div className="font-bold text-[10px] text-center w-full">
              Total Fab Meters
            </div>
          </div>

          {/* Table Rows */}
          {fabMeters.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-4 border-b border-gray-300"
            >
              <div className="text-[10px] font-semibold text-center w-full">
                {item.complete}
              </div>
            </div>
          ))}
        </div>

        {/* Machine */}
        <div className="flex-1 p-4">
          {/* Table Headers */}
          <div className="flex justify-center bg-gray-100 p-4">
            <div className="font-bold text-[10px] text-center w-full">
              Machine
            </div>
          </div>

          {/* Table Rows */}
          {machine.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-4 border-b border-gray-300"
            >
              <div className="text-[10px] font-semibold text-center w-full">
                {item.complete}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanComponent;
