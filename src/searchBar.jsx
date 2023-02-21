import { useState, useEffect } from "react";
import { getSearchMovieQuery, getSearchTvQuery } from "./SERVICES/tmdbService";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faX } from "@fortawesome/free-solid-svg-icons";
import './searchItem.css'
import { useNavigate } from "react-router-dom";
// import axios from "axios";

export const SearchBar = ({nav}) => {
  // const [data, setData] = useState([]);
  const history = useNavigate();
  const [value, setValue] = useState();
  const [results, setresults] = useState([]);
  
   const lineTextStyleSearch = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 5,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
   const lineTextStyle2 = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  useEffect(() => {
    console.log("useEffect");
    if (value) {
      let searchMovie = getSearchMovieQuery(value);
      let searchTv = getSearchTvQuery(value);
      Promise.all([searchMovie, searchTv])
        .then((promises) => {
          let rez = [];

          _.forEach(promises, function (promise) {
            const items = _.take(_.orderBy(promise.data.results, 'popularity', 'desc'), 12);
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
const clear = () => {
}
  return (
    <div className="position-relative ">
      <div class="input-group d-flex rounded-pill border border-2 border-secondary p-0 d-flex overflow-hidden align-items-center">
      <input
          style={{ outline: "none", border: "none" }}
          id='search'
          className=" rounded-pill text-bg-dark px-2 overflow-hidden "
          placeholder="search title"
          onChange={(e) => handleSubmit(e)}
          onClick={() => nav(false)}
          type="text"
        />
  <div class="input-group-append ">
    <span role='button' class="input-group-text bg-transparent border-0" style={{width: 'fit-content'}} id="basic-addon2" onClick={clear}><FontAwesomeIcon inverse icon={faX}/></span>
  </div>
</div>
      
           
     {value && <div className="position-absolute flix-bg searchList py-1 shadow"  style={{ width: "420px" }}>
        {results.map((item) => (
          <div
          className="upcoming_post-div px-1 pb-3  w-100 z-23 d-flex border-secondary align-items-start justify-content-center row row-cols-2"
          // onClick={history()}
          key={item.id}
          id={item.id}
          // onClick={useNavigate(`/${type}/${id}`)}
          >
            <div className="col-3 p px-0">
              <a href={item.homepage}>
                <img
                  className="img-fluid shadow w-100 poster"
                  src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt="poster"
                />
              </a>
            </div>
            <div className="lsStyle-none justify-content-between  text-light  col-8">
            {/* <div className="text-start d-flex row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2"> */}
              <div className="text-start ">
                <a href={item.homepage} className="col">
                  <small className="text-light  fw-bold text-capitalize " style={lineTextStyle2}>
                    {item.title || item.name}
                  </small>
                </a>
                <div className="d-flex align-items-center text-end gap-2 mx-auto col">
                  <small className="text-secondary fw-bold m-0 fs6">HD</small>
                  <small className="text-secondary m-0 ">
                    {_.take(item.release_date || item.first_air_date, 4)}
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
                <div className=" text-start">
                  <h5 className=" text-warning text-center">
                    {item.tagline}
                  </h5>
                  <small className="text-start gap-3 px-1" style={lineTextStyleSearch}>
                    {item.overview}
                  </small>
                </div>
                {/* <button className="btn btn-info fw-light align-self-end rounded border-0 w-50 mx-auto">
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
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
};
//show on change and rerender
