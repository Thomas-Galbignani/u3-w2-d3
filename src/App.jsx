import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavBar';
import GenersSection from "./components/GenersSection";
import MyGallery from "./components/gallery/MyGallery";
import MyFooter from "./components/MyFooter";
import TVShows from './components/TVShows';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <GenersSection />
            <MyGallery titleMovie={`L.O.T.R saga`} searchQuery={`lord of the rings`} />
            <MyGallery titleMovie={`the avengers saga`} searchQuery={`avengers`} />
            <MyGallery titleMovie={`Doctor Who saga`} searchQuery={`doctor who`} />
          </>
        } />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <MyFooter className='bottom-0' />
    </BrowserRouter>
  )
}

export default App;