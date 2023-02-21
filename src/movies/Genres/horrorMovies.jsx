import { useState, useEffect } from "react";
import _ from "lodash";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TitleSM } from "../../titles/title-sm";
import { Title } from "../../titles/title";
import { getHorrorMovies } from '../../SERVICES/tmdbService';

export const HorrorMovies = () => {
  //   const [actionCara, setActionCara] = useState([]);
  const [upcomAction, setUpcomAction] = useState([]);
  useEffect(() => {
    console.log("useEffect");

        // const page1 = getPopularMoviesPage1();
        // const page2 = getPopularMovies(2);
        // const page3 = getPopularMovies(3);
        // const page4 = getPopularMovies(4);
        // const page5 = getPopularMovies(5);
        // Promise.all([page1, page2, page3, page4, page5])
        getHorrorMovies()
        getHorrorMovies(2)
        .then((promises) => {
            const items = _.orderBy(promises.data.results, 'popularity', 'desc');
            const filteredItems = _.filter(items, {
              original_language: "en"
            });
            setUpcomAction(filteredItems)
          })
          .catch((promises) => console.log(promises.data))
  //       Promise.all([ getHorrorMovies(2), getHorrorMovies(4)])
  //       .then(promises => {

        
  //         let rez = [];
  //         _.forEach(promises, function (promise) {
  //           const items = _.orderBy(promise.data.results, 'popularity', 'desc');
  //           const filteredItems = _.filter(items, {
  //             original_language: "en"
  //           });
            
  //           console.log('response', items, filteredItems);
  //           rez.push(...filteredItems);            
  //         });   
          
  //         setUpcomAction([...rez]);
  //         console.log('horor', upcomAction)
  //       })
  //       .catch((res) => console.log(res));
    
  // }, []);
  // useEffect(() => {
  //    getHorrorMovies()
  //     .then((resp) => {
  //         _.forEach(res => {
  //           console.log('resp', res);

  //           let store = _.filter(_.take(res.data.results, 6), {genre_ids: 35});
  //           _.forEach(store, (response) => {
  //             setUpcomAction((upcomAction) => [...upcomAction, response]);
  //           });
  //         })
  //         .catch((res) => console.log(res.data));
  //       })
   
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
              <Title
                type={"movies"}
                key={m.id}
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
                homePath={m.homepage}
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
                homePath={m.homepage}
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
                homePath={m.homepage}
              />
            </div>
          ))}
        </div>
      </Carousel>
    </>
  );
};
