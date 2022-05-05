import { Fragment, useEffect, useState } from "react";
import AnimeList from '../components/AnimeList'
const Home = () => {

    const [topAnimes, setTopAnimes] = useState([])
    const getTopAnime = async () => {
        const temp = await fetch('https://api.jikan.moe/v4/top/anime').then(resp => {
        return resp.json()
        })

        // console.log(temp)
        if(temp.data) console.log(temp.data.slice(0,5))
        setTopAnimes(temp.data)
    }

    useEffect(()=>{
        getTopAnime();
        // console.log(topAnimes)
    },[])

    return(
        <div style={{display:'flex', width: '100%', 'min-height': '100vh', 'flex-wrap':'wrap'}}>
            {topAnimes.length? <AnimeList animes={topAnimes}  /> : 'loading...'}
        </div>
    )
}

export default Home;