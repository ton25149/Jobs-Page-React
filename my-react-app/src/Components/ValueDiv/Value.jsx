import React from "react";
import simple from "../../Assets/simple.png";
import heart from '../../Assets/heart.png';
import shield from '../../Assets/shield.png';
const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[700px] block">
        The value that holds us true and to account
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center ">
        <div className="singleGrid rounded-[10px] hover:bg-[#edf1f7] p-[1.5rem] cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#9dc8f7] h-[40px] w-[40px] flex items-center justify-center ">
            <img src={simple} alt="" className="w-[70%]" />
          </div>

          <span className="font-semibold text-textColor text-[18px]">
            Simplicity
          </span>

        </div>
        <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
          Things being made beautiful simple are at the heart of everything we do.</p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#fc77a1] h-[40px] w-[40px] flex items-center justify-center ">
            <img src={heart} alt="" className="w-[70%]" />
          </div>

          <span className="font-semibold text-textColor text-[18px]">
            Simplicity
          </span>

        </div>
        <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
          We believe on making things better for everyone, even if just by a little bit!</p>
          </div>
          <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem] cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#cce47d] h-[40px] w-[40px] flex items-center justify-center ">
            <img src={shield} alt="" className="w-[70%]" />
          </div>

          <span className="font-semibold text-textColor text-[18px]">
            Simplicity
          </span>

        </div>
        <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold ">
          We work on the basis of creating trust which can be nurtured through authenticity and tranparency</p>
          </div>
      </div>
    </div>
  );
};

export default Value;
