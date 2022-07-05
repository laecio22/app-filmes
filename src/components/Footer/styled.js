import styled from "styled-components";
import { whitePrimary,blackPrimary } from "../../colors/colors";

export const ContainerFooter = styled.footer`
    width:100% ;
    height:200px ;
    background-color:${blackPrimary};
    color: ${whitePrimary};  

`

export const SectionCredits = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const LogoTmdb = styled.img`
    width: 300px ;
    height:120px;
`

export const TextCredits = styled.p`
    font-size:22px;
`