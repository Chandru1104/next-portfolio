import { getEntries } from "@/lib/contentful";
import React from "react";

const Skillssection = ({ skills }) => {
  return (
    <div
      id="expertise"
      className=" scroll-mt-36 flex flex-col items-center gap-7 p-5"
    >
      <p className=" font-bold text-2xl">Expertise</p>

      <div className=" w-full flex flex-wrap justify-between  gap-5 max-md:justify-center">
        {skills.map((skill) => (
          <div
            key={skill.sys.id}
            className=" bg-secondary rounded-3xl  flex  justify-between px-8 py-1 items-center w-[490px] max-lg:w-[340px]"
          >
            <p className=" font-semibold">{skill.fields.skillName}</p>
            <div className=" flex  items-center min-w-[120px]  gap-4">
              <p className=" font-bold text-2xl">|</p>
              <p className=" text-accent font-semibold">{skill.fields.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillssection;
