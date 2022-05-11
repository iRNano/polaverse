import { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import Container from '../layouts/Container';
import classes from './Search.module.css';

function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResult, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const debounce = (callback, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      //   console.log(args);
      timer = setTimeout(() => { callback.apply(this, args); }, timeout);
    };
  };
  const saveInput = (e) => {
    // console.log('time', e.target.value);
    setSearchKeyword(e.target.value);
  };
  const searchHandler = debounce((e) => saveInput(e));

  useEffect(() => {
    if (searchKeyword) {
      const searchAnime = async () => {
        setSearchLoading(true);
        const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${searchKeyword}&order_by=title&sort=asc&limit=10`)
          .then((resp) => resp.json());

        setSearchResults(temp.data);
        setSearchLoading(false);
      };

      searchAnime();
    }
  }, [searchKeyword]);

  return (
    <Container>
      <main className={classes.main}>
        <div className={classes.header}>
          <h1>Search</h1>
          <input onChange={searchHandler} placeholder="Search anime" />
        </div>
        <div className={classes.body}>
          {searchLoading ? <h1>Loading...</h1> : (
            searchResult.length ? <AnimeList animes={searchResult} /> : <p>No item found</p>
          )}
        </div>
      </main>
    </Container>

  );
}

export default Search;
