import { useEffect, useState } from 'react';
import AnimeList from '../components/AnimeList';
import Loading from '../components/Loading';
import Container from '../layouts/Container';
// import {getTopAnimeServ} from "../services/AnimesServices";
function Home() {
  const [topAnimes, setTopAnimes] = useState([]);
  const getTopAnime = async () => {
    const temp = await fetch('https://api.jikan.moe/v4/top/anime').then((resp) => resp.json());

    // console.log(temp)
    // if(temp.data) console.log(temp.data.slice(0,5))
    setTopAnimes(temp.data);
  };

  useEffect(() => {
    // getTopAnimeServ.then(resp => console.log(resp))
    getTopAnime();
    // console.log(topAnimes)
  }, []);

  return (
    <Container>

      {topAnimes.length ? <AnimeList animes={topAnimes} /> : <Loading />}

      {/* <Loading /> */}
    </Container>
  // <div style={{display:'flex', width: '100%', 'min-height': '100vh', 'flex-wrap':'wrap'}}>

  // </div>
  );
}

export default Home;
