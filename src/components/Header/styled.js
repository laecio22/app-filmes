import styled from "styled-components";
import { whitePrimary, blackPrimary } from "../../colors/colors";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${blackPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  flex-wrap: wrap;
`;
export const TitleApp = styled.h2`
  color: ${whitePrimary};
  font-size:28px;
`;

export const ContainerInputSearch = styled.div`
  display: flex;
`;

export const InputSearch = styled.input`
  width: 280px;
  margin-right: 15px;
  height: 30px;
  padding-left:20px;
  font-size:18px;
`;

export const FontAwesomeIcon = styled.div`
  display: flex;
  align-items: center;

  .fa-magnifying-glass {
    color: ${whitePrimary};
  }
`;
