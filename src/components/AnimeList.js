import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import classes from './AnimeList.module.css'
const AnimeList = ({animes}) => {

    let navigate = useNavigate();
    console.log(animes)
    return(
        <div className={classes.container}>
         {animes.map(anime => {
             return (
                //  <Link to={`/anime/${anime.mal_id}`}>
                    <AnimeCard onClick={()=>navigate(`/anime/${anime.mal_id}`)}key={anime.mal_id} anime={anime} />
                //  </Link>
             )
         })}
        </div>
    )
}

const AnimeCard = ({onClick, anime}) => {


    return(
        <article className={classes.card}onClick={onClick}>
            <figure>
                <img  className={classes['card-image']} src={anime.images.jpg.image_url} alt="card"></img>
            </figure>
            <span>{anime.title}</span>
        </article>
    )
}

export default AnimeList;