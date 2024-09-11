import Image from "next/image";
import React from "react";
import companyNameLogo from "../../../public/images/companyNameLogo.png";
import TvsMobility from "../../../public/images/tvsMobility.png";
import BodyContent from "../bodyContent/bodyContent";

const Navbar = () => {
  return (
    <div className="px-5  ">
      <div className="bg-[white] flex flex-col py-2 mt-5 rounded-[20px] sticky top-5 z-50">
        <div className="flex items-center justify-between px-5">
          <Image
            className=" rounded-md "
            alt="company logo"
            src={companyNameLogo}
            height={80}
            width={80}
          />
          <p className=" ml-8 font-bold">BIAS CUTTER</p>
          <Image
            className=" rounded-md"
            alt="company logo"
            src={TvsMobility}
            height={150}
            width={150}
          />
        </div>
      </div>
      <BodyContent />
    </div>
  );
};

export default Navbar;
