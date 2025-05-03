import React from "react";

type Props = {
  name: string;
  description?: string;
  image: string;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`$
        {selectedPage === lowerCasePage ? "text-primary-500" : "text-white"}
        hover:text-primary-300 transition-colors duration-300 font-medium
      `}
    >
      {page}
    </AnchorLink>
  );
};

const Class = ({ name, description, image }: Props) => {
  const overLayStyle = `p-5 absolute z-30 h-[380px] w-[450px] 
    flex flex-col items-center justify-center 
    whitespace-normal bg-primary-500 text-center text-white 
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overLayStyle}>
        <p className="text-2xl"> {name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={`${image}`} alt={name} className="" />
    </li>
  );
};


export default Class;
