import { useEffect, useState } from "react";
import { TitleSM } from "../titles/title-sm";
import _ from "lodash";
import { getPopularMovies } from "../SERVICES/tmdbService";
export const TrendingMovies = ({ genre_id, aos }) => {
  const [trending, setTrend] = useState([]);

  useEffect(() => {
    // setValue([]);
    // if (genre_id) {
    //   getUpcomingMovies(genre_id)
    //     .then((responses) => {
    //       const store = responses.data.results;
    //       const filterItems = _.filter(_.orderBy(store, 'release_date', 'desc'), {original_language: 'en'})

    //       _.forEach(_.take(filterItems, 6), (res) => {
    //         //   upcoming.push(res.data);
    //         setValue((upcoming) => [...upcoming, res]);
    //         //   console.log("upcoming", upcoming);
    //       });
    //     })
    //     .catch((res) => console.log(res));
    //   getUpcomingMovies(genre_id, 2)
    //     .then((responses) => {
    //       const store = responses.data.results;
    //       const filterItems = _.filter(_.orderBy(store, 'release_date', 'desc'), {original_language: 'en'})

    //       _.forEach(_.take(filterItems, 6), (res) => {
    //         //   upcoming.push(res.data);
    //         setValue((upcoming) => [...upcoming, res]);
    //         //   console.log("upcoming", upcoming);
    //       });
    //     })
    //     .catch((res) => console.log(res));

    //   getUpcomingMovies(genre_id, 3)
    //     .then((responses) => {
    //       const store = responses.data.results;
    //       const filterItems = _.filter(_.orderBy(store, 'release_date', 'desc'), {original_language: 'en'})

    //       _.forEach(_.take(filterItems, 6), (res) => {
    //         //   upcoming.push(res.data);
    //         setValue((upcoming) => [...upcoming, res]);
    //         //   console.log("upcoming", upcoming);
    //       });
    //     })
    //     .catch((res) => console.log(res));
    //   getUpcomingMovies(genre_id, 4)
    //     .then((responses) => {
    //       const store = responses.data.results;
    //       const filterItems = _.filter(_.orderBy(store, 'release_date', 'desc'), {original_language: 'en'})

    //       _.forEach(_.take(filterItems, 6), (res) => {
    //         //   upcoming.push(res.data);
    //         setValue((upcoming) => [...upcoming, res]);
    //         //   console.log("upcoming", upcoming);
    //       });
    //     })
    //     .catch((res) => console.log(res));
    // } else {
    getPopularMovies()
      .then((responses) => {
        const store = responses.data.results;
        const filterItems = _.filter(_.orderBy(store, "release_date", "desc"), {
          original_language: "en",
        });

        _.forEach(_.take(filterItems, 6), (res) => {
          setTrend((trending) => [...trending, res]);
        });
      })
      .catch((res) => console.log(res));
    // }
  }, [genre_id]);

  return (
    <>
      {trending.map((m) => (
        <div className=" pb-3" key={m.id}>
          <TitleSM
            type={"movies"}
            id={m.id}
            posterPath={m.poster_path}
            name={m.title}
            firstDate={m.release_date}
            runtime={m.runtime}
            popularity={m.popularity}
            vote={m.vote_average}
            aos={aos}
            // homePath={m.backdrop_path}
          />
        </div>
      ))}
    </>
  );
};
