import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import React from "react";
import RecentlyAdded from './whatsNew/recentlyAdded';
import Header from './Header';
import Movies from './movies/movies';
import { Movie } from './watchNow/movieInfoPage';
import { Pricing } from './pricing';
import Favorites from './favorites';
import TV from './TV/tvShows';
import { ShowInfoPage } from './TV/showInfoPage';
import Footer from './Footer';
import { useState } from 'react';
function App() {

  return (
    <div className="App">
      <Router>
        <Header />
     < Routes>
     {/* <Route path={`/favorites`} element={<Favorites />}  /> */}
     <Route path={`/pricing`} element={<Pricing />}/>
     <Route path={`/movies/:id`} element={<Movie/>}/>
     <Route path={`/movies`} element={<Movies />}/>
     <Route path={`/tv/:id`} element={<ShowInfoPage/>}/>
     <Route path={`/tv`} element={<TV />}/>
     <Route path='/recentlyAdded' element={<RecentlyAdded />}/>
     <Route exact path='/' element={<Home />}/>
     {/* <Route  path='*' element={<ErrorPage />}/> */}

     

     </Routes>
<Footer/>
      </Router>
    </div>
  );
}

export default App;
