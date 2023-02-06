import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import React from "react";
import RecentlyAdded from './whatsNew/recentlyAdded';
import Header from './Header';
import { Movie } from './watchNow/movieInfoPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
     < Routes>

     <Route path='/movie' element={<Movie/>} />
     <Route path='/recentlyAdded' element={<RecentlyAdded/>} />
     <Route exact path='/' element={<Home/>} />
     

     </Routes>

      </Router>
    </div>
  );
}

export default App;
