import { PiAngleThin } from "react-icons/pi";
import { AiOutlineColumnWidth } from "react-icons/ai";
interface OperatorData {
  plan: string;
  id: string;
  cutoff: string;
}
const operator: OperatorData[] = [
  { plan: "0", id: "12", cutoff: "1stCut" },
  { plan: "12", id: "37", cutoff: "2ndCut" },
  { plan: "15", id: "0", cutoff: "3rdCut" },
  { plan: "35", id: "62", cutoff: "4thCut" },
  { plan: "42", id: "31", cutoff: "5thCut" },
];

const AngleWidthComponent = () => {
  return (
    <div className="container w-full h-full bg-blue-300 p-1">
      {/* Operator Name */}
      <div className="flex-1 p-4">
        {/* Table Headers */}
        <div className="flex justify-center bg-gray-100 p-4">
          <div className="font-bold text-[10px] text-center w-full "></div>
          <div className="font-bold text-[10px] text-center  w-full  ">
            ANGLE
            <span className=" flex items-center justify-center">
              <PiAngleThin />
            </span>
          </div>
          <div className="font-bold text-[10px] text-center  w-full  ">
            WIDTH
            <span className=" flex items-center justify-center">
              <AiOutlineColumnWidth />
            </span>
          </div>
        </div>

        {/* Table Rows */}
        {operator.map((item, index) => (
          <div
            key={index}
            className="flex justify-center p-4 border-b border-gray-300"
          >
            <div className="text-[10px] text-center w-full font-semibold ">
              {item.cutoff}
            </div>

            <div className="text-[10px] text-center w-full font-semibold ">
              {item.id}
            </div>
            <div className="text-[10px] text-center w-full font-semibold ">
              {item.plan}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AngleWidthComponent;
