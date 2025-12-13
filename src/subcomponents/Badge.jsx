import { Star } from "lucide-react";
import React from "react";

const Badge = () => {
  return (
    <div className="">

      <div className="md:w-[340px] md:h-[80px] w-[315px]   h-[80px] rounded-2xl bg-[#2b413b] py-2 px-2 flex gap-4 ">
        <div className="w-[65px]  h-full p-5 rounded-2xl bg-[#344a44]">
          <Star fill="#f2ac83" color="#f2ac83" />
        </div>
        <div className="flex-col gap-3 mr-2 pr-1">
          <h1 className="text-neutral-400">2023</h1>
          <h1 className="text-white whitespace-nowrap text-[0.9rem] md:text-[1rem]">Innovative Design Studio</h1>
        </div>
      </div>
    </div>
  );
};

export default Badge;
