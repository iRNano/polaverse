import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
const AnimeList = ({animes}) => {

    let navigate = useNavigate();
    console.log(animes)
    return(
        <Fragment>
         {animes.map(anime => {
             return (
                 <AnimeCard  onClick={() => navigate(`/${anime.mal_id}`)}key={anime.mal_id} anime={anime} />
             )
         })}
        </Fragment>
    )
}

const AnimeCard = ({anime}) => {


    return(
        <article >
            <figure>
                <img  src={anime.images.jpg.image_url} alt="card image"></img>
            </figure>
            <span>{anime.title}</span>
        </article>
    )
}

export default AnimeList;