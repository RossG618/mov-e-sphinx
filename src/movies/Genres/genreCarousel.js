import { useState, useEffect } from "react";
import _ from "lodash";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TitleSM } from "../../titles/title-sm";
import { getGenreMovies } from "../../SERVICES/tmdbService";

export const GenreCarousel = ({ genre_id }) => {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    console.log("useEffect");

    // const page1 = getPopularMoviesPage1();
    // const page2 = getPopularMovies(2);
    // const page3 = getPopularMovies(3);
    // const page4 = getPopularMovies(4);
    // const page5 = getPopularMovies(5);
    // Promise.all([page1, page2, page3, page4, page5])
    getGenreMovies(genre_id)
      .then((promises) => {
        const store = promises.data.results;
        const items = _.orderBy(store, "vote_average", "desc");
        const filteredItems = _.filter(items, {
          original_language: "en",
        });
        _.forEach(filteredItems, (res) => {
          setMovie((movies) => [...movies, res]);
        });
      })
      .catch((promises) => console.log(promises.data));
    getGenreMovies(genre_id, 2)
      .then((promises) => {
        const store = promises.data.results;
        const items = _.orderBy(store, "vote_average", "desc");
        const filteredItems = _.filter(items, {
          original_language: "en",
        });
        _.forEach(filteredItems, (res) => {
          setMovie((movies) => [...movies, res]);
        });
      })
      .catch((promises) => console.log(promises.data));
    getGenreMovies(genre_id, 3)
      .then((promises) => {
        const store = promises.data.results;
        const items = _.orderBy(store, "vote_average", "desc");
        const filteredItems = _.filter(items, {
          original_language: "en",
        });
        _.forEach(filteredItems, (res) => {
          setMovie((movies) => [...movies, res]);
        });
      })
      .catch((promises) => console.log(promises.data));
  }, [genre_id]);

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
          {movies.slice(0, 6).map((m) => (
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
                homePath={m.homepage}
              />
            </div>
          ))}
        </div>

        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 pb-5 mx-auto container">
          {movies.slice(6, 12).map((m) => (
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
                homePath={m.homepage}
              />
            </div>
          ))}
        </div>

        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container">
          {movies.slice(12, 18).map((m) => (
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
                homePath={m.homepage}
              />
            </div>
          ))}
        </div>
        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container">
          {movies.slice(18, 24).map((m) => (
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
                homePath={m.homepage}
              />
            </div>
          ))}
        </div>
      </Carousel>
    </>
  );
};
