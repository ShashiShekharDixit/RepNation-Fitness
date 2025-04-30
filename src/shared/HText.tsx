import { FC, Fragment } from "react";

export interface HeaderTextProps {
  children: React.ReactNode;
}

export const HeaderText: FC<HeaderTextProps> = (props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
      {props.children}
    </h1>
  );
};
