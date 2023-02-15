import { useEffect, useState } from "react";
import {getUpcomingMoviesPage1 } from "./SERVICES/tmdbService";
import { TitleSM } from "./titles/title-sm";
import _ from "lodash";
export const UpcomingMovies = () => {
  const [upcoming, setValue] = useState([]);

  useEffect(() => {
    getUpcomingMoviesPage1()
      .then((responses) => {
        _.forEach(_.take(responses.data.results, 6), (res) => {
          //   upcoming.push(res.data);
          setValue((upcoming) => [...upcoming, res]);
          //   console.log("upcoming", upcoming);
        });
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <>

      {upcoming.map((m, index) => (
    <div className=" pb-3" key={m.id}>
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
