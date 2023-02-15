import { useState, useEffect } from "react";
import { TitleSM } from "./titles/title-sm";
import { getTopRatedMoviesPage1 } from "./SERVICES/tmdbService";
import _ from "lodash";

export const TopRatedMovies = () => {
  const [UpcominMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    // const movieURLs = [
    //   `${movieURL.results[0]}?api_key=${API_KEY}`,
    //   `${movieURL.results[1]}?api_key=${API_KEY}`,
    //   `${movieURL.results[2]}?api_key=${API_KEY}`,
    //   `${movieURL.results[3]}?api_key=${API_KEY}`,
    // ];

    // const requests = movieURLs.map((url) => axios.get(url));
    getTopRatedMoviesPage1()
      .then((resp) => {
        let store = _.take(resp.data.results, 10);
        _.forEach(store, (res) => {
          setUpcomingMovies((UpcominMovies) => [...UpcominMovies, res]);
          // console.log(res)
          // UpcominMovies.push(res.data.results.slice(0, 4));
        });
        console.log(store);
      })
      .catch((res) => console.log(res.data));
  }, []);

  return (
    <>
      {UpcominMovies.map((m) => (
        <div className=" pb-5" key={m.id}>
          <TitleSM
            type={"movies"}
            id={m.id}
            posterPath={m.poster_path}
            name={m.title}
            firstDate={m.release_date}
            runtime={m.runtime}
            popularity={m.popularity}
            homePath={m.homepage}
          />
        </div>
      ))}
    </>
  );
};
