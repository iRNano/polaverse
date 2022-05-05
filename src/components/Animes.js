import { Fragment, useEffect, useState } from "react"
import AnimeList from "./AnimeList"
const Animes = () => {
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
        console.log(topAnimes)
    },[])

    // useEffect(()=> {
    //     if(topAnimes.length) console.log(topAnimes)
    // },[topAnimes])
    
    return(
        <Fragment>
        
        <main style={{display:'flex', width: '100%', 'min-height': '100vh', 'flex-wrap':'wrap'}}>
            
            <AnimeList animes={topAnimes} />
        </main>
        </Fragment>
    )
}

export default Animes