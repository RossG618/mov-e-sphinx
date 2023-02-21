import { useEffect, useState } from "react";
import {getUpcomingMoviesPage1, getRelatedMovies } from "../SERVICES/tmdbService";
import { TitleSM } from "../titles/title-sm";
import _ from "lodash";
export const RelatedShows = ({tvID}) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    getRelatedMovies(tvID)
      .then((responses) => {
        _.forEach(_.take(_.filter(_.orderBy(responses.data.results, 'popularity', 'desc'), {original_language: 'en'}), 6), (res) => {
          //   upcoming.push(res.data);
          setRelated((upcoming) => [...upcoming, res]);
          //   console.log("upcoming", upcoming);
        });
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <>

      {related.map((tv, index) => (
    <div className=" pb-3" key={tv.id}>
        <TitleSM
        type={"tv"}        
        id={tv.id}
        posterPath={tv.poster_path}
        name={tv.title}
        firstDate={tv.release_date}
        runtime={tv.runtime}
        popularity={tv.popularity}
        homePath={tv.homepage}
        />
        </div>
        ))}
    </>
  );
};
