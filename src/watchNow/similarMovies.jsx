import { useEffect, useState } from "react";
import {getUpcomingMoviesPage1, getRelatedMovies } from "../SERVICES/tmdbService";
import { TitleSM } from "../titles/title-sm";
import _ from "lodash";
export const RelatedMovies = ({movieID}) => {
  const [upcoming, setValue] = useState([]);

  useEffect(() => {
    getRelatedMovies(movieID)
      .then((responses) => {
        _.forEach(_.take(_.filter(_.orderBy(responses.data.results, 'popularity', 'desc'), {original_language: 'en'}), 6), (res) => {
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