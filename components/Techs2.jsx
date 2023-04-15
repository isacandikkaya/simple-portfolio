import React from "react";
import Image from "next/image";

const Techs2 = ({ title, img }) => {
  return (
    <div className="bg-[#080808] hover:-translate-y-[3px] hover:bg-[#101010] transition-all duration-200 rounded-lg p-2 px-3 flex items-center justify-between">
      <p>{title}</p>
      <Image src={img} width={20} height={20} />
    </div>
  );
};

export default Techs2;
