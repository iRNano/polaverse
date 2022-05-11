// import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './AnimeList.module.css';

function AnimeList({ animes }) {
  const navigate = useNavigate();
  //   console.log(animes);
  return (
    <div className={classes.container}>
      {animes.map((anime) => (
        //  <Link to={`/anime/${anime.mal_id}`}>
        <AnimeCard onClick={() => navigate(`/anime/${anime.mal_id}`)} key={anime.mal_id} anime={anime} />
        //  </Link>
      ))}
    </div>
  );
}

function AnimeCard({ onClick, anime }) {
  return (
    <div className={classes.card} onClick={onClick}>
      <figure>
        <img className={classes['card-image']} src={anime.images.jpg.image_url} alt="card" />
      </figure>
      <span>{anime.title}</span>
    </div>
  );
}

export default AnimeList;
