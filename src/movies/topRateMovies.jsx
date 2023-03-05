import { useState, useEffect } from "react";
import { TitleSM } from "../titles/title-sm";
import { getTopRatedMovies } from "../SERVICES/tmdbService";
import _ from "lodash";
import { getGenreMovies } from './../SERVICES/tmdbService';

export const TopRatedMovies = ({ genre_id, favs}) => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    // getTopRatedMoviesPage1()
    setTopMovies([])
    if(genre_id){
      console.log('genre', genre_id)
      getGenreMovies(genre_id, 1)
    .then((promises) => {
      const store = promises.data.results
      const items = _.orderBy(store, "vote_average", "desc");
      const filteredItems = _.filter(items, {
        original_language: "en",
      });
      _.forEach(_.take(filteredItems, 10), (res) => {
        setTopMovies((topMovies) => [...topMovies, res]);
      });
    })
    .catch((promises) => console.log(promises.data));
    }else {getTopRatedMovies()
      .then((resp) => {
        let store = _.take(resp.data.results, 10);
        
          _.forEach(store, (res) => {
            setTopMovies((topMovies) => [...topMovies, res]);
          });
       
        console.log(store);
        // console.log('genre', genre);
      })
      .catch((res) => console.log(res.data));}
  }, [genre_id]);
  
console.log('genre', genre_id)
 
  return (
    <>
      {topMovies.map((m) => (
        <div className=" pb-5" key={m.id}>
          <TitleSM
            type={"movies"}
            id={m.id}
            posterPath={m.poster_path}
            name={m.title}
            firstDate={m.release_date}
            runtime={m.runtime}
            popularity={m.popularity}
            vote={m.vote_average}
            aos={'zoom-in'}
            fav={favs}
            
          />
        </div>
      ))}
    </>
  );
};
