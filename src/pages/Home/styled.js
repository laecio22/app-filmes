import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;

  h2 {
    padding-top: 50px;
    font-size: 32px;
  }
`;

export const SectionMovies = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap:50px ;
  justify-content: center;
  margin: 50px 0;
`;
