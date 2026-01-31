"use client";

import Image from "next/image";
import { useState } from "react";

const educationDetails = [
  {
    course: "BE in CIVIL ENGINEERING",
    institute: "Sree Sakthi Engineering College",
    year: "06/2015 to 05/2019",
    location: "Coimbatore",
  },
  {
    course: "Higher Secondary",
    institute: "Rajavignesh Higher Secondary School",
    year: "06/2014 to 03/2019",
    location: "Melamathur",
  },
];

export default function EducationExperienceToggle({ experiences }) {
  const [activeSection, setActiveSection] = useState("education");

  return (
    <div
      id="experience"
      className="scroll-mt-20 w-full flex flex-col items-center p-6 gap-11"
    >
      {/* Buttons for toggling */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveSection("education")}
          className={`px-4 text-2xl py-2 rounded-md font-bold ${
            activeSection === "education" ? "text-accent" : "text-muted"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveSection("experience")}
          className={`px-4 text-2xl py-2 rounded-md font-bold ${
            activeSection === "experience" ? "text-accent" : "text-muted"
          }`}
        >
          Education
        </button>
      </div>

      {/* Section Content */}
      <div className="w-full flex gap-10 overflow-x-auto md:overflow-hidden md:flex-nowrap md:justify-start md:scroll-smooth scrollbar-hide">
        {activeSection === "education"
          ? experiences?.map((experience) => (
              <div
                key={experience.sys.id}
                className="bg-secondary w-[250px] h-[250px] rounded-2xl flex flex-col items-center justify-center gap-3 shrink-0"
              >
                <div className="w-[60px] h-[60px] overflow-hidden rounded-full bg-foreground flex items-center justify-center mx-auto mt-4">
                  <Image
                    src={"/Company_icon.svg"}
                    width={60}
                    height={60}
                    alt="company icon"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold py-1">{experience.fields.role}</p>
                  <small className="text-[11px] text-accent">
                    {experience.fields.companyName}
                  </small>
                  <small className="text-[11px] text-gray-400">
                    {experience.fields.startDate} to{" "}
                    {experience.fields.endDate || "Present"}
                  </small>
                  <small className="text-[11px] text-gray-400">
                    {experience.fields.jobType}
                  </small>
                  <small className="text-[11px] text-gray-400">
                    {experience.fields.location}
                  </small>
                </div>
              </div>
            ))
          : educationDetails.map((education, index) => (
              <div
                key={index}
                className="bg-secondary w-[250px] h-[250px] rounded-2xl flex flex-col items-center justify-center gap-3 shrink-0"
              >
                <div className="w-[60px] h-[60px] overflow-hidden rounded-full bg-foreground flex items-center justify-center mx-auto mt-4">
                  <Image
                    src={"/College.svg"}
                    width={60}
                    height={60}
                    alt="college icon"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-semibold py-1">{education.course}</p>
                  <small className="text-[11px] text-accent">
                    {education.institute}
                  </small>
                  <small className="text-[11px] text-gray-400">
                    {education.year}
                  </small>
                  <small className="text-[11px] text-gray-400">
                    {education.location}
                  </small>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
