import React from "react";
import {
  ContainerHeader,
  TitleApp,
  FontAwesomeIcon,
  ContainerInputSearch,
  InputSearch
} from "./styled";

const Header = () => {
  return (
    <ContainerHeader>
      <TitleApp>LaecioFlix</TitleApp>
      <ContainerInputSearch>
        <InputSearch type={"text"} placeholder={"digite nome do filme ou série"} />
        <FontAwesomeIcon>
          <i className={"fa-solid fa-magnifying-glass"}></i>
        </FontAwesomeIcon>
      </ContainerInputSearch>
    </ContainerHeader>
  );
};

export default Header;
