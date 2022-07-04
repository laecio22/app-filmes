import React from "react";
import { ContainerHeader } from "./styled";

const Header = () => {
  return (
    <ContainerHeader>
      <h2>LaecioFlix</h2>
      <input type={"text"} placeholder={"digite nome do filme ou série"}/>
    </ContainerHeader>
  );
};

export default Header;
