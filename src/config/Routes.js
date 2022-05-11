import { Routes, Route } from "react-router-dom";
import Anime from "../components/Anime";
import Home from "../pages/Home";
import Search from "../pages/Search";

const AppRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Home />}>
            <Route path=":animeId" element={<Anime />}/>
        </Route>
        <Route path="/search" element={<Search />} />
    </Routes>
)

export default AppRoutes;