import React from "react";

const Footer = ({ links }) => {
  return (
    <div className="w-full p-10 flex flex-row max-md:flex-col items-center justify-around bg-secondary text-white gap-6">
      <div className=" min-w-[50%] flex flex-col gap-5">
        <h1 className=" font-bold text-xl">Rajesh Rajendran </h1>

        <p className=" text-sm ">
          @Copyright {new Date().getFullYear()} Made by Rajesh Rajendran
        </p>
      </div>
      <div className=" flex flex-col items-center gap-5 ">
        <div className="flex gap-4 items-center">
          {links?.map((link, index) => (
            <a
              key={index}
              href={link.fields.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:[color:var(--link-color)] duration-300"
              style={{
                "--link-color": link.fields.color || "var(--primary-color)",
              }}
            >
              {link.fields.svg && (
                <div
                  className="w-5 h-5 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current [&>svg]:stroke-[2]"
                  dangerouslySetInnerHTML={{ __html: link.fields.svg }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
