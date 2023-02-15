import _ from "lodash";
import { useState, useEffect } from "react";
import {  getTopRatedTVsPage1 } from "./SERVICES/tmdbService";
import { TitleSM } from "./titles/title-sm";
export const TopRatedShows = () => {
  const [bestTV, setBestTV] = useState([]);

  //pop
  //upcom
  //latest
  useEffect(() => {
    getTopRatedTVsPage1()
    .then((responses) => {
        console.log("hi", responses);
        _.forEach(_.take(responses.data.results, 10), (res) => {
          setBestTV((bestTV) => [...bestTV, res]);
        });
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      {bestTV.map((tv) => (
        <div className="pb-5" key={tv.id}>


          <TitleSM
            type={"tv"}
            id={tv.id}
            posterPath={tv.poster_path}
            name={tv.name}
            firstDate={tv.first_air_date}
            endDate={tv.last_air_date}
            popularity={tv.popularity}
            homePath={tv.homepage}
          />
        </div>
      ))}
    </>
  );
};
