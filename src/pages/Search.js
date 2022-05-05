import { useState } from "react"
import AnimeList from "../components/AnimeList"

const Search = () => {

    const [searchKeyword, setSearchKeyword] = useState('')
    const [searchResult, setSearchResults] = useState([])
    return(
        <div>
            <h1>Search</h1>
            <input></input>
            {searchResult.length? 'no items' : <AnimeList animes={searchResult} />}
        </div>
    )
}

export default Search;