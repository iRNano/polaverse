import { Fragment } from "react"

const AnimeList = ({animes}) => {
    console.log(animes)
    return(
        <Fragment>
         {animes.map(anime => {
             return (
                 <AnimeCard  key={anime.id}anime={anime} />
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