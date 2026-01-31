import React from "react";

const SocilaLinks = ({ links }) => {
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed z-10 shadow-sm ">
      <ul>
        {links.map((link, index) => {
          const isFirst = index === 0;
          const isLast = index === links.length - 1;
          const roundedClass = isFirst
            ? "rounded-tr-md"
            : isLast
              ? "rounded-br-md"
              : "";

          return (
            <li
              key={index}
              className={` group  bg-secondary hover:bg-secondary  flex justify-between items-center w-40 h-11  px-4  ml-[-110px] hover:rounded-md duration-300 hover:ml-[-10px] ${roundedClass}`}
            >
              <a
                href={link.fields.url}
                target="_blank"
                rel="noreferrer"
                className="flex w-full justify-between items-center  group-hover:[color:var(--link-color)]"
                style={{
                  "--link-color": link.fields.color || "var(--primary-color)",
                }}
              >
                {link.fields.name}
                {link.fields.svg && (
                  <div
                    className="w-5  h-5 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-current [&>svg]:stroke-[2]"
                    dangerouslySetInnerHTML={{ __html: link.fields.svg }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocilaLinks;
