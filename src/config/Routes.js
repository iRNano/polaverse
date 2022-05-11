import { Routes, Route } from 'react-router-dom';
import Anime from '../components/Anime';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Search from '../pages/Search';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/anime/:animeId" element={<Anime />} />

      <Route path="/search" element={<Search />} />
      <Route
        path="*"
        element={
          <Page404 />
      }
      />
    </Routes>
  );
}

export default AppRoutes;
