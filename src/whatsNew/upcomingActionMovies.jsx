import { useState, useEffect } from "react";
import axios from "axios";
// import { Title } from "../title";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TitleSM } from "./../titles/title-sm";
//  faArrowCircleRight, faArrowCircleLeft
//   } from "@fortawesome/free-solid-svg-icons";

export const UpcomingGenre = () => {
  //   const [actionCara, setActionCara] = useState([]);
  const [upcomAction, setUpcomAction] = useState([]);

  const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";

  useEffect(() => {
    const movieURL = `https://api.themoviedb.org/3/movie/upcoming`;

    // const movieURLs = [
    //   `${movieURL}?api_key=${API_KEY}`,
    //   `${movieURL}?api_key=${API_KEY}&page=2`,
    // ];

    // const requests = movieURLs.map((url) => axios.get(url));

    axios
      .get(`${movieURL}?api_key=${API_KEY}`)
      .then((resp) => {
        let store = resp.data.results;
        store.forEach((res) => {
          setUpcomAction((upcomAction) => [...upcomAction, res]);
          // upcomAction.push(res.data.results.slice(0, 4));
        });
        console.log(store);
      })
      .catch((res) => console.log(res.data));
    // axios
    // .all(requests)
    // .then((responses) => {
    //   responses.forEach((res) => {
    //     //  console.log(responses)
    //     //   upcoming.push(res.data);
    //     setUpcomAction((upcomAction) => [...upcomAction, res.data['results']]);
    //     //   console.log("upcoming", upcoming);
    //   });
    // })
    // .catch((res) => console.log(res));
  }, []);

  useEffect(() => {
    const movieURL = `https://api.themoviedb.org/3/movie/upcoming`;

    // const movieURLs = [
    //   `${movieURL}?api_key=${API_KEY}`,
    //   `${movieURL}?api_key=${API_KEY}&page=2`,
    // ];

    // const requests = movieURLs.map((url) => axios.get(url));

    axios
      .get(`${movieURL}?api_key=${API_KEY}&page=2`)
      .then((resp) => {
        let store = resp.data.results;
        store.forEach((res) => {
          setUpcomAction((upcomAction) => [...upcomAction, res]);
          // upcomAction.push(res.data.results.slice(0, 4));
        });
        console.log(store);
      })
      .catch((res) => console.log(res.data));
    // axios
    // .all(requests)
    // .then((responses) => {
    //   responses.forEach((res) => {
    //     //  console.log(responses)
    //     //   upcoming.push(res.data);
    //     setUpcomAction((upcomAction) => [...upcomAction, res.data['results']]);
    //     //   console.log("upcoming", upcoming);
    //   });
    // })
    // .catch((res) => console.log(res));
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
        <div className="  row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container ">
          {upcomAction.slice(0, 6).map((m) => (
            <TitleSM
              key={m.id}
              id={m.id}
              posterPath={m.poster_path}
              name={m.title}
              firstDate={m.release_date}
              runtime={m.runtime}
              popularity={m.popularity}
              homePath={m.homepage}
            />
          ))}
        </div>

        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container">
          {upcomAction.slice(6, 12).map((m) => (
            <TitleSM
              key={m.id}
              id={m.id}
              posterPath={m.poster_path}
              name={m.title}
              firstDate={m.release_date}
              runtime={m.runtime}
              popularity={m.popularity}
              homePath={m.homepage}
            />
          ))}
        </div>

        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container">
          {upcomAction.slice(12, 18).map((m) => (
            <TitleSM
              key={m.id}
              id={m.id}
              posterPath={m.poster_path}
              name={m.title}
              firstDate={m.release_date}
              runtime={m.runtime}
              popularity={m.popularity}
              homePath={m.homepage}
            />
          ))}
        </div>
        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 mx-auto container">
          {upcomAction.slice(18, 24).map((m) => (
            <TitleSM
              key={m.id}
              id={m.id}
              posterPath={m.poster_path}
              name={m.title}
              firstDate={m.release_date}
              runtime={m.runtime}
              popularity={m.popularity}
              homePath={m.homepage}
            />
          ))}
        </div>
      </Carousel>
    </>
  );
};
