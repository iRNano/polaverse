import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import classes from './Anime.module.css';
import Container from '../layouts/Container';
import Loading from './Loading';

function Anime() {
  const params = useParams();
  const navigate = useNavigate();
  const [animeDetails, setAnimeDetails] = useState({});
  const [animeLoading, setAnimeLoading] = useState(false);

  useEffect(() => {
    setAnimeLoading(true);
    const getAnimeDetails = async () => {
      const temp = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}`)
        .then((resp) => {
          setAnimeLoading(false);
          return resp.json();
        });

      setAnimeDetails(temp.data);
    };

    getAnimeDetails()
      .catch((err) => console.log(err));
  }, []);
  // console.log(params)
  // console.log(animeDetails)
  return (
    <Container>
      {animeLoading ? <Loading /> : (
        <>
          <button type="button" onClick={() => navigate(-1)} className={classes.back}>
            {' '}
            {'< Back'}
          </button>

          <main className={classes.anime}>
            <figure className={classes.figure}>
              <img src={animeDetails.images?.webp?.large_image_url} alt="anime" />
            </figure>
            <article>
              <h1>{animeDetails.title}</h1>
              <div>
                <p>{`Rank : ${animeDetails.rank}`}</p>
                <p>{`Genres: ${animeDetails.genres?.map((genre) => genre.name).join(', ')}`}</p>
                <p>{`Type: ${animeDetails.type}`}</p>
                <p>{`Episodes: ${animeDetails.episodes}`}</p>
                <p>{`Status: ${animeDetails.status}`}</p>
                <p>{`Popularity ${animeDetails.popularity}`}</p>
                {/* <p>{``}</p>
                                <p>{``}</p> */}
              </div>
              <div>
                <h2>Synopsis</h2>
                <p className={classes.synopsis}>{animeDetails.synopsis}</p>
              </div>
            </article>
          </main>
        </>
      )}
    </Container>
  );
}

export default Anime;
