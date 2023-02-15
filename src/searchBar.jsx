import { useState, useEffect } from "react";
import { getSearchMovieQuery, getSearchTvQuery } from "./SERVICES/tmdbService";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { lineTextStyle } from "./whatsNew/tvShowcase";
import './searchItem.css'
// import axios from "axios";
export const SearchBar = () => {
  // const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [results, setresults] = useState([]);
  let newData = [];


  useEffect(() => {
    console.log("useEffect");
    newData = [];
    if (value) {
      let searchMovie = getSearchMovieQuery(value);
      let searchTv = getSearchTvQuery(value);
      // setData((data) => [...newData]);
      Promise.all([searchMovie, searchTv])
        .then((promises) => {
          let rez = [];

          _.forEach(promises, function (promise) {
            const items = _.take(promise.data.results, 12);
            const filteredItems = _.filter(items, {
              original_language: "en",
            });

            console.log('response', items, filteredItems);
            rez.push(...filteredItems);            
          });   
          
          setresults([...rez]);
        })
        .catch((res) => console.log(res));
    }
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="position-relative">
      <div className="rounded-pill border border-2 border-secondary p-0 d-flex">
        <input
          style={{ outline: "none", border: "none" }}
          className="rounded-pill text-bg-dark px-2 overflow-hidden"
          placeholder="search title"
          onChange={(e) => handleSubmit(e)}
          type="text"
        />
      </div>
      <div className="position-absolute searchList">
        {results.map((item) => (
          <div
            className="upcoming_post-div p-3 mt-5 z-23 d-flex border-secondary align-items-center justify-content-center w-50"
            key={item.id}
            id={item.id}
            style={{ width: "fit-content" }}
          >
            <div className="col pb-2">
              <a href={item.homepage}>
                <img
                  className="img-fluid shadow col-1"
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt="poster"
                />
              </a>
            </div>
            <div className="lsStyle-none justify-content-between text-light mt-3 px-5 col">
              <div className="text-start d-flex row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                <a href={item.homepage} className="col">
                  <p className="text-light fs-3 fw-bold text-capitalize mb-2 ">
                    {item.title || item.name}
                  </p>
                </a>
                <div className="d-flex align-items-center text-end gap-2 mx-auto col">
                  <p className="text-secondary fw-bold m-0 ">HD</p>
                  <small className="text-secondary m-0 ">
                    {item.release_date || item.first_air_date}
                  </small>
                  <span className="d-flex gap-2 justify-content-end ">
                    {item.runtime && (
                      <small className="mx-2">{item.runtime} min</small>
                    )}
                    <small className="d-flex gap-1 align-items-base">
                      <FontAwesomeIcon
                        className="text-warning"
                        icon={faThumbsUp}
                      />
                      {Math.round(item.popularity) / 10}
                    </small>
                  </span>
                </div>
              </div>
              <div className="row ">
                <div className="mt-3 text-start">
                  <h5 className="mb-3 text-warning text-center">
                    {item.tagline}
                  </h5>
                  <p className="text-start gap-3" style={lineTextStyle}>
                    {item.overview}
                  </p>
                </div>
                <button className="btn btn-info fw-light align-self-end rounded border-0 w-50 mx-auto">
                  <p className="m-0">DOWNLOAD</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ fill: "#255, 195, 7" }}
                    height="48"
                    width="48"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M11 40q-1.2 0-2.1-.9Q8 38.2 8 37v-7.15h3V37h26v-7.15h3V37q0 1.2-.9 2.1-.9.9-2.1.9Zm13-7.65-9.65-9.65 2.15-2.15 6 6V8h3v18.55l6-6 2.15 2.15Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
//show on change and rerender
