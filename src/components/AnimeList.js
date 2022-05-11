import { Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"
const AnimeList = ({animes}) => {

    let navigate = useNavigate();
    console.log(animes)
    return(
        <Fragment>
         {animes.map(anime => {
             return (
                 <Link to={`/anime/${anime.mal_id}`}>
                 <AnimeCard key={anime.mal_id} anime={anime} />
                 </Link>
             )
         })}
        </Fragment>
    )
}

const AnimeCard = ({anime}) => {


    return(
        <article>
            <figure>
                <img  src={anime.images.jpg.image_url} alt="card image"></img>
            </figure>
            <span>{anime.title}</span>
        </article>
    )
}

export default AnimeList;