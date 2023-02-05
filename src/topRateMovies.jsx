import { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "./title";

export const TopRatedMovies = () => {
  const [upcomingTV, setValueTV] = useState([]);
  const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";

    useEffect(() => {
        const movieURL = `https://api.themoviedb.org/3/movie/upcoming`;
        // const movieURLs = [
        //   `${movieURL.results[0]}?api_key=${API_KEY}`,
        //   `${movieURL.results[1]}?api_key=${API_KEY}`,
        //   `${movieURL.results[2]}?api_key=${API_KEY}`,
        //   `${movieURL.results[3]}?api_key=${API_KEY}`,
        // ];
    
        // const requests = movieURLs.map((url) => axios.get(url));
    
        axios.get(`${movieURL}?api_key=${API_KEY}`)
        .then(resp => {
          let store = resp.data.results.slice(0, 10);
          store.forEach(res => {
            setValueTV((upcomingTV) => [...upcomingTV, res]);
            // console.log(res)
            // upcomingTV.push(res.data.results.slice(0, 4));
          });
          console.log(store)
        }).catch(res => console.log(res.data))
      }, [])
      
      return(
        <>
        
            {upcomingTV.map((m) => (
            <Title
              key={m.id}
              id={m.id}
              posterPath={m.poster_path}
              name={m.title}
              firstDate={m.release_date}
              runtime={m.runtime}
              popularity={m.popularity}
              homePath={m.homepage}
            />
          ))}
        </>
    )
}