import { useState, useEffect } from "react";
import _ from "lodash";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TitleSM } from "../titles/title-sm";
// import { getGenreMovies } from '../../SERVICES/tmdbService';
import { getGenreTV } from "../SERVICES/tmdbService";

export const GenreTvCarousel = ({ genre_id }) => {
  const [TV, setTV] = useState([]);

  useEffect(() => {
    console.log("useEffect");

    getGenreTV(genre_id)
      .then((promises) => {
        const store = promises.data.results;
        console.log("store", store);
        const items = _.orderBy(store, "vote_average", "desc");
        const filteredItems = _.filter(items, {
          original_language: "en",
        });
        console.log("promise", filteredItems);
        _.forEach(filteredItems, (res) => {
          setTV((TV) => [...TV, res]);
        });
      })
      .catch((promises) => console.log(promises.data));

    ////////////////////////////////////////////

    getGenreTV(genre_id, 2) 
      .then((promises) => {
        const store = promises.data.results;
        console.log("store2", store);
        const items = _.orderBy(store, "vote_average", "desc");
        const filteredItems = _.filter(items, {
          original_language: "en",
        });

        _.forEach(filteredItems, (res) => {
          setTV((TV) => [...TV, res]);
        });
      })
      .catch((promises) => console.log(promises.data));

    /////////////////////////////////////////////

    getGenreTV(genre_id, 3)
      .then((promises) => {
        const store = promises.data.results;
        console.log("store3", store);
        const items = _.orderBy(store, "vote_average", "desc");
        const filteredItems = _.filter(items, {
          original_language: "en",
        });

        _.forEach(filteredItems, (res) => {
          setTV((TV) => [...TV, res]);
        });
      })
      .catch((promises) => console.log(promises.data));
  }, [genre_id]);

  //   console.log("useEffect");

  //       // const page1 = getPopularMoviesPage1();
  //       // const page2 = getPopularMovies(2);
  //       // const page3 = getPopularMovies(3);
  //       // const page4 = getPopularMovies(4);
  //       // const page5 = getPopularMovies(5);
  //       // Promise.all([page1, page2, page3, page4, page5])
  //       getGenreTV(genre_id, 2)
  //       .then((promises) => {
  //         const items = _.orderBy(promises.data.results, 'popularity', 'desc');
  //         const filteredItems = _.filter(items, {
  //           original_language: "en"
  //         });
  //         console.log('promise',filteredItems)
  //         setPartTwo(filteredItems)
  //         })
  //         .catch((promises) => console.log(promises.data))

  // }, [genre_id]);

  // useEffect(() => {
  //   console.log("useEffect2");
  //       getGenreTV(genre_id, 2)
  //       .then((promises) => {
  //         const items = _.orderBy(promises.data.results, 'popularity', 'desc');
  //         const filteredItems = _.filter(items, {
  //           original_language: "en"
  //         });
  //         console.log('promise',filteredItems)
  //           setTV(filteredItems)
  //         })
  //         .catch((promises) => console.log(promises.data))

  // }, [genre_id]);

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
          {_.orderBy(TV, 'vote_average', 'desc').slice(0, 6).map((tv) => (
            <div className="pb-2" key={tv.id}>
              <TitleSM
                type={"tv"}
                key={tv.id}
                id={tv.id}
                posterPath={tv.poster_path}
                name={tv.name}
                firstDate={tv.first_air_date}
                runtime={tv.runtime}
                popularity={tv.popularity}
                vote={tv.vote_average}
                homePath={tv.homepage}
              />
            </div>
          ))}
        </div>

        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 pb-5 mx-auto container">
          {_.orderBy(TV, 'vote_average', 'desc').slice(6, 12).map((tv) => (
            <div className="pb-2" key={tv.id}>
              <TitleSM
                type={"tv"}
                key={tv.id}
                id={tv.id}
                posterPath={tv.poster_path}
                name={tv.name}
                firstDate={tv.first_air_date}
                runtime={tv.runtime}
                popularity={tv.popularity}
                vote={tv.vote_average}
                homePath={tv.homepage}
              />
            </div>
          ))}
        </div>
        <div className="  row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container ">
          {_.orderBy(TV, 'vote_average', 'desc').slice(12, 18).map((tv) => (
            <div className="pb-2" key={tv.id}>
              <TitleSM
                type={"tv"}
                key={tv.id}
                id={tv.id}
                posterPath={tv.poster_path}
                name={tv.name}
                firstDate={tv.first_air_date}
                runtime={tv.runtime}
                popularity={tv.popularity}
                vote={tv.vote_average}
                homePath={tv.homepage}
              />
            </div>
          ))}
        </div>

        <div className=" row row-cols-2 row-cols-sm-3 row-cols-xl-4 row-cols-xxl-6 pb-5 mx-auto container">
          {_.orderBy(TV, 'vote_average', 'desc').slice(18, 24).map((tv) => (
            <div className="pb-2" key={tv.id}>
              <TitleSM
                type={"tv"}
                key={tv.id}
                id={tv.id}
                posterPath={tv.poster_path}
                name={tv.name}
                firstDate={tv.first_air_date}
                runtime={tv.runtime}
                popularity={tv.popularity}
                vote={tv.vote_average}
                homePath={tv.homepage}
              />
            </div>
          ))}
        </div>
      </Carousel>
    </>
  );
};
