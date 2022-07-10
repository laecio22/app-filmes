import React from "react";
import { ContainerBoxMovie } from "./styled";
import { BASE_URL_IMAGE , SIZE_IMAGE } from "../../constants/url";

const CardMovie = (props)=>{   
    return(
        <ContainerBoxMovie>
           <img src={`${BASE_URL_IMAGE}/${SIZE_IMAGE}/${props.movie.poster_path}`} alt={"poster do filme "}/>            
           <h1>{props.movie.title}</h1>
           {/* <p>Sinopse:{props.movie.overview}</p> */}
           <p>Data de Lançamento: {props.movie.release_date}</p>
           <p>Popularidade: {props.movie.popularity}</p>
           <p>Média de  votos: {props.movie.vote_average}</p>
           <p>Quantidade de votos : {props.movie.vote_count}</p>
        </ContainerBoxMovie>
    )
}

export  default CardMovie