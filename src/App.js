import './App.css';
import { Routes, Route } from 'react-router-dom';

//react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//pages
import Homepage from './Pages/Home.page';
import MoviePage from './Pages/Movie.page';
import PlayPage from './Pages/Play.page';


function App() {
  return <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/movie/:id' element={<MoviePage />} />
    <Route path='/plays' element={<PlayPage />} />
  </Routes>


}

export default App;
