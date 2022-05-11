import classes from './Anime.module.css'
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Anime = () => {

    let params = useParams()

    const [animeDetails, setAnimeDetails] = useState({})
    const [animeLoading, setAnimeLoading] = useState(false)
    const getAnimeDetails = async () =>{
        const temp = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}`)
            .then(resp=> {
                setAnimeLoading(false)
            return resp.json()
        })

        setAnimeDetails(temp.data)
    }
    useEffect(()=>{
        setAnimeLoading(true)
        getAnimeDetails()
    },[params])
    console.log(params)
    console.log(animeDetails)
    return(
        <main className={classes.anime}>
            {animeLoading? 'loading...' : (
                <Fragment>
        
            <figure>
                <img src={animeDetails.images?.webp?.large_image_url} alt="anime"></img>
            </figure>
            <article>
                <h1>{animeDetails.title}</h1>
                <div>
                    <p>{`Rank : ${animeDetails.rank}`}</p>
                    <p>{`Genres: ${animeDetails.genres.map(genre => {return genre.name}).join(', ')}`}</p>
                    <p>{`Type: ${animeDetails.type}`}</p>
                    <p>{`Episodes: ${animeDetails.episodes}`}</p>
                    <p>{`Status: ${animeDetails.status}`}</p>
                    <p>{`Popularity ${animeDetails.popularity}`}</p>
                    <p>{``}</p>
                    <p>{``}</p>
                </div>
                <div>
                    <h2>Synopsis</h2>
                    <p>{animeDetails.synopsis}</p>
                </div>
            </article>
            </Fragment>
            )}
        </main>
    )
}

export default Anime;