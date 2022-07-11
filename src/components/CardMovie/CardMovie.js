import React from "react";
import { ContainerBoxMovie } from "./styled";
import { BASE_URL_IMAGE , SIZE_IMAGE } from "../../constants/url";

const CardMovie = (props)=>{
    
    const date = new Date(props.movie.release_date);
    const dateFormated = date.toLocaleDateString("pt-BR")

    return(
        <ContainerBoxMovie>
           <img src={`${BASE_URL_IMAGE}/${SIZE_IMAGE}/${props.movie.poster_path}`} alt={"poster do filme "}/>            
           <h1>{props.movie.title}</h1>         
           <p><span>Data de Lançamento:</span> {dateFormated}</p>
           <p><span>Popularidade:</span> {props.movie.popularity}</p>
           <p><span>Média de  votos:</span>{props.movie.vote_average}</p>
           <p><span>Quantidade de votos :</span>{props.movie.vote_count}</p>
        </ContainerBoxMovie>
    )
}

export  default CardMovie