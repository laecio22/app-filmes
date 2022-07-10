import { React, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { MainContainer, SectionMovies } from "./styled";
import Footer from "../../components/Footer/Footer";
import CardMovie from "../../components/CardMovie/CardMovie";
import { BASE_URL, API_KEY } from "../../constants/url";
import axios from "axios";

const Home = () => {
  const [listBestMovies, setListMovies] = useState([]);
  const getBestMovies = () => {
    axios
      .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((response) => {
        // console.log(response)
        console.log(response.data.results);
        setListMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBestMovies();
  }, []);

  return (
    <>
      <Header />
      <MainContainer>
        <h2>Melhores Filmes</h2>
        <SectionMovies>
          {listBestMovies?.map((movie) => {
            return <CardMovie movie={movie} key={movie.id} />;
          })}
        </SectionMovies>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;
