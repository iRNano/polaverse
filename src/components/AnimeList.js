// import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AnimeList.module.css';

function AnimeList({ animes }) {
  const navigate = useNavigate();
  //   console.log(animes);
  return (
    <div className={classes.container}>
      {animes.map((anime, index) => (
        //  <Link to={`/anime/${anime.mal_id}`}>
        <AnimeCard onClick={() => navigate(`/anime/${anime.mal_id}`)} key={anime.mal_id} anime={anime} index={index} />
        //  </Link>
      ))}
    </div>
  );
}

function AnimeCard({ onClick, anime, index }) {
  return (
    <div className={classes.card} onClick={onClick} aria-hidden="true" role="button" tabIndex={index}>
      <figure>
        <img className={classes['card-image']} src={anime.images.jpg.image_url} alt="card" />
      </figure>
      <span>{anime.title}</span>
    </div>
  );
}

export default AnimeList;
