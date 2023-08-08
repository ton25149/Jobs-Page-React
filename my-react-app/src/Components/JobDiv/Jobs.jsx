import React from "react";
// import Icon
import { BiTimeFive } from "react-icons/bi";
//imported Logo
import logo1 from "../../Assets/logo-1.png";
import logo2 from "../../Assets/logo-2.png";
import logo3 from "../../Assets/logo-3.png";
import logo4 from "../../Assets/logo-4.png";
import logo5 from "../../Assets/logo-5.png";
import logo6 from "../../Assets/logo-6.png";
import logo7 from "../../Assets/logo-7.png";
import logo8 from "../../Assets/logo-8.png";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Web Developer at Canada Headquater",
    company: "Microsoft Corporation",
  },
  {
    id: 2,
    image: logo2,
    title: "Software Engineer",
    time: "10Hrs",
    location: "Los Angeles",
    desc: "Software Engineer at LA Headquater",
    company: "Meta",
  },
  {
    id: 3,
    image: logo3,
    title: "Backend Developer",
    time: "5Hrs",
    location: "New York",
    desc: "Backend Developer at New York Headquater",
    company: "Twitter",
  },
  {
    id: 4,
    image: logo4,
    title: "UX/UI Designer",
    time: "2days",
    location: "Bangkok",
    desc: "UX/UI Designer at Bangkok Headquater",
    company: "Line Corporation",
  },
  {
    id: 5,
    image: logo5,
    title: "DevOps Engineer",
    time: "1day",
    location: "Sweden",
    desc: "DevOps Engineer at Sweden Headquater",
    company: "Electronic Art",
  },
  {
    id: 6,
    image: logo6,
    title: "Project Manager",
    time: "Now",
    location: "Bangkok",
    desc: "Project Manager at Bangkok Headquater",
    company: "Wongnai",
  },
  {
    id: 7,
    image: logo7,
    title: "Network Engineer",
    time: "Now",
    location: "San Jose, CA",
    desc: "Network Engineer at San Jose, CA Headquater",
    company: "Cisco Systems ,Inc.",
  },
  {
    id: 8,
    image: logo8,
    title: "Data Engineer",
    time: "Now",
    location: "San Francisco",
    desc: "Data Engineer at San Francisco Headquater",
    company: "Nvidia Corporation",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

       {
        Data.map(({id, image, title, time,location,desc,company}) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 cursor-pointer">
            <span className="flex justify-center items-center gap-4 ">
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white ">
                {title}
              </h1>
              <span className="flex items-center text-[#ddd] gap-1  ">
                <BiTimeFive />
                {time}
              </span>
            </span>
            <h6 className="text-[#ccc]  ">{location}</h6>
            <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
              {desc}
            </p>
            <div className="company flex items-center gap-1 ">
              <img src={image} alt="Company Logo" className="w-[10%] " />
              <span className="text-[14px] py-[1rem] block group-hover:text-white">
                {company}
              </span>
            </div>
  
            <button
              className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor 
          hover:bg-white group-hover/item:text-textColor group-hover:text-white "
            >
              Apply now
            </button>
          </div>
          )
        })
       }

      </div>
    </div>
  );
};

export default Jobs;
