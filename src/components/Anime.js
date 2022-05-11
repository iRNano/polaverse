import classes from './Anime.module.css'
import { useParams } from 'react-router-dom';
const Anime = () => {

    let params = useParams()
    console.log(params)
    return(
        <main className={classes.anime}>
            <figure>
            
            </figure>
            <article>

            </article>
        </main>
    )
}

export default Anime;