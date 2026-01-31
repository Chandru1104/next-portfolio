import React from "react";
import { FileUser } from "lucide-react";
import { Download } from "lucide-react";

const data = [
  "Open to work",
  "Raising Fund",
  "Hiring",
  "Open to Invest",
  "Open to Consult",
  "Want to outsource",
];

const Aboutsection = ({ user }) => {
  return (
    <div
      id="about"
      className="  scroll-mt-24 bg-secondary rounded-3xl  p-10  flex justify-between min-h-[410px] max-lg:flex-wrap max-lg:justify-center gap-10"
    >
      <div>
        <p className="  text-accent font-extrabold text-2xl pb-3 ">
          Rajesh Rajendran
        </p>
        <p className="max-md:text-sm">
          Surveying with precision, building with confidence
        </p>
        <p className=" text-xl font-semibold  max-md:text-[16px]">
          Professional
        </p>
      </div>

      <div className=" flex gap-5 items-center  max-md:flex-wrap max-md:justify-center ">
        <div className="w-[120px] h-[144px] flex justify-center items-center text-center bg-background rounded-2xl max-md:w-full ">
          <div className="relative w-10 h-10 flex items-center justify-center cursor-pointer group">
            <a
              href={`https:${user[0].fields.resume.fields.file.url}`}
              className="relative w-10 h-10 flex items-center justify-center cursor-pointer group"
            >
              <FileUser
                size={80}
                className="absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />

              <Download
                color="#0add87"
                size={80}
                className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100 "
              />
            </a>
          </div>
        </div>
        <div className="bg-background rounded-2xl p-7 w-[390px] flex flex-wrap justify-between gap-2  max-md:flex-col max-md:w-full">
          {data.map((item, index) => (
            <div key={index} className="flex w-[160px] gap-2 ">
              <input type="radio" disabled />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
