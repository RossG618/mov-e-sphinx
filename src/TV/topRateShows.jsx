import _ from "lodash";
import { useState, useEffect } from "react";
import {  getGenreTV, getTopRatedTVs } from "../SERVICES/tmdbService";
import { TitleSM } from "../titles/title-sm";

export const TopRatedShows = ({genre_id}) => {
  const [bestTV, setBestTV] = useState([]);

  //pop
  //upcom
  //latest
  useEffect(() => {
    setBestTV([])
    if(genre_id){
      console.log('genre', genre_id)
      getGenreTV(genre_id, 1)
    .then((promises) => {
      const store = promises.data.results
      const items = _.orderBy(store, "vote_average", "desc");
      const filteredItems = _.filter(items, {
        original_language: "en",
      });
      _.forEach(_.take(filteredItems, 10), (res) => {
        setBestTV((bestTV) => [...bestTV, res]);
      });
    })
    .catch((promises) => console.log(promises.data));
    }else{

      getTopRatedTVs()
      .then((responses) => {
          console.log("hi", responses);
          _.forEach(_.take(responses.data.results, 10), (res) => {
            setBestTV((bestTV) => [...bestTV, res]);
          });
        })
        .catch((res) => console.log(res));
    }
  }, [genre_id]);

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
            vote={tv.vote_average}
            aos={'zoom-in'}

            // homePath={tv.backdrop_path}
          />
        </div>
      ))}
    </>
  );
};
