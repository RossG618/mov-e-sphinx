import axios from "axios";
import { useEffect, useState } from 'react';
import { Title } from "./title";
export const UpcomingMovies = () => {
    const [upcoming, setValue] = useState([]);

    useEffect(() => {
        const movieURL = `https://api.themoviedb.org/3/movie/`;
        const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";
        const movieURLs = [
          `${movieURL}804150?api_key=${API_KEY}`,
          `${movieURL}9552?api_key=${API_KEY}`,
          `${movieURL}49521?api_key=${API_KEY}`,
          `${movieURL}436270?api_key=${API_KEY}`,
          `${movieURL}254128?api_key=${API_KEY}`,
        ];
    
        const requests = movieURLs.map((url) => axios.get(url));
    
        axios
          .all(requests)
          .then((responses) => {
            responses.forEach((res) => {
              //  console.log(responses)
              //   upcoming.push(res.data);
              setValue((upcoming) => [...upcoming, res.data]);
              //   console.log("upcoming", upcoming);
            });
          })
          .catch((res) => console.log(res));

    },[])

    return(
        <>
            {upcoming.map((tv) => (
            <Title
              key={tv.id}
              id={tv.id}
              posterPath={tv.poster_path}
              name={tv.title}
              firstDate={tv.release_date.slice(0, 4)}
              runtime={tv.runtime}
              popularity={tv.popularity}
            />
          ))}
        </>
    )
}