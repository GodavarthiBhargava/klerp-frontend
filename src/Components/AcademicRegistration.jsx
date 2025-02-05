import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const AcademicRegistration = () => {
  useGSAP(() => {
    gsap.from(".headding", {
      opacity: 0,

      duration: 1,
    });
  });
  return (
    <div className="w-full h-full bg-white  ">
      <h1 className="headding text-center text-red-500 font-bold font-[oswald] text-4xl  mt-6 tracking-wide">
        Academic Registration
      </h1>
    </div>
  );
};

export default AcademicRegistration;

