import { useState, useEffect } from "react";
import _ from "lodash";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TitleSM } from "./../titles/title-sm";
import { getPopularMovies } from "../SERVICES/tmdbService";
export const UpcomingGenre = () => {
  //   const [actionCara, setActionCara] = useState([]);
  const [upcomAction, setUpcomAction] = useState([]);

  // useEffect(() => {
  //   getUpcomingMovies()
  //     .then((resp) => {
  //       let store = resp.data.results;
  //       store.forEach((res) => {
  //         setUpcomAction((upcomAction) => [...upcomAction, res]);
  //       });
  //     })
  //     .catch((res) => console.log(res.data));
  // }, []);
  useEffect(() => {
    getPopularMovies()
      .then((resp) => {
        let store = _.take(resp.data.results,6);
        _.forEach(store, (res) => {
          setUpcomAction((upcomAction) => [...upcomAction, res]);
        });
      })
      .catch((res) => console.log(res.data));
    getPopularMovies(2)
      .then((resp) => {
        let store = _.take(resp.data.results,6);
        _.forEach(store, (res) => {
          setUpcomAction((upcomAction) => [...upcomAction, res]);
        });
      })
      .catch((res) => console.log(res.data));
    getPopularMovies(3)
      .then((resp) => {
        let store = _.take(resp.data.results,6);
        _.forEach(store, (res) => {
          setUpcomAction((upcomAction) => [...upcomAction, res]);
        });
      })
      .catch((res) => console.log(res.data));
    getPopularMovies(4)
      .then((resp) => {
        let store = _.take(resp.data.results,6);
        _.forEach(store, (res) => {
          setUpcomAction((upcomAction) => [...upcomAction, res]);
        });
      })
      .catch((res) => console.log(res.data));
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        interval={2000}
        activeIndex={index}
        onSelect={handleSelect}
        showThumbs={false}
        className="shadow "
      >
        <div className="  row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container ">
          {upcomAction.slice(0, 6).map((m) => (
            <div className="pb-2"key={m.id}>
              <TitleSM
                type={"movies"}
                key={m.id}
                id={m.id}
                posterPath={m.poster_path}
                name={m.title}
                firstDate={m.release_date}
                runtime={m.runtime}
                popularity={m.popularity}
                vote={m.vote_average}
                // homePath={m.backdrop_path}
              />
            </div>
          ))}
        </div>

        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 pb-5 mx-auto container">
          {upcomAction.slice(6, 12).map((m) => (
            <div className="pb-2" key={m.id}>
              <TitleSM
                type={"movies"}
                key={m.id}
                id={m.id}
                posterPath={m.poster_path}
                name={m.title}
                firstDate={m.release_date}
                runtime={m.runtime}
                popularity={m.popularity}
                vote={m.vote_average}
                // homePath={m.backdrop_path}
              />
            </div>
          ))}
        </div>

        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container">
          {upcomAction.slice(12, 18).map((m) => (
            <div className="pb-2"key={m.id}>
              <TitleSM
                type={"movies"}
                key={m.id}
                id={m.id}
                posterPath={m.poster_path}
                name={m.title}
                firstDate={m.release_date}
                runtime={m.runtime}
                popularity={m.popularity}
                vote={m.vote_average}
                // homePath={m.backdrop_path}
              />
            </div>
          ))}
        </div>
        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container">
          {upcomAction.slice(18, 24).map((m) => (
            <div className="pb-2"key={m.id}>
              <TitleSM
                type={"movies"}
                key={m.id}
                id={m.id}
                posterPath={m.poster_path}
                name={m.title}
                firstDate={m.release_date}
                runtime={m.runtime}
                popularity={m.popularity}
                vote={m.vote_average}
                // homePath={m.backdrop_path}
              />
            </div>
          ))}
        </div>
      </Carousel>
    </>
  );
};
