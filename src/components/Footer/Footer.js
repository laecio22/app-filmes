import React from "react";
import {
  ContainerFooter,
  LogoTmdb,
  TextCredits,
  SectionCredits,
} from "./styled";
import imageLogo from "../../assets/logos/logoTmdb.svg";

const Footer = () => {
  return (
    <ContainerFooter>
      <SectionCredits>
        <LogoTmdb src={imageLogo} alt={"logo da The Movie Database"} />
        <TextCredits>
          Este produto usa a API do TMDB, mas não é endossado ou certificado
          pelo The Movie Database.
        </TextCredits>
      </SectionCredits>
    </ContainerFooter>
  );
};

export default Footer;
