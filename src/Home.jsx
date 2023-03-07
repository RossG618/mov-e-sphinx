import React, { useState } from "react";
import "./home.css";
import Trial from "./Trial/trial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faPlay,
  faTv,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { TrendingMovies } from "./movies/TrendingMovies";
import { Link } from "react-router-dom";
import { TopTV } from "./TV/TopTV";
import { TopMovies } from "./movies/TopMovies";
import { TrendingTV } from "./TV/TrendingTV";
//
export default function Home() {
  const [movieSelected, setMovieSelected] = useState(true);
  return (
    <div>
      <div className="home bg-dark d-flex position-relative align-items-center h-100">
        <div className="hero-content text-bg-dark bg-transparent text-start my-4 py-5 container">
          <h4 className="fs- fw-bold text-warning">Movi SPHINX</h4>
          <h1 className="display-3 fw-bold w-50">
            Unlimted <span className="text-warning yellow">Movies</span>, TV
            Shows & More
          </h1>

          <div className="block-to-line lsStyle-none gap-3 mt-3 p-0 align-items-center ">
            <div className="d-flex mb-3">
              <small className="border border-2 fw-bold text-bg-light px-0 py-1 m-0 ">
                PG-18
              </small>
              <small className="text-bg-transparent fw-bold text-light border border-2 px-2 py-1 m-0">
                HD/SD
              </small>
            </div>
            <div className="d-flex mb-3  mx-2 gap-2">
              <p className="m-0">genres</p>

              <p className="d-flex align-items-center m-0">
                <FontAwesomeIcon
                  className="text-warning mx-2"
                  icon={faCalendarDays}
                />
                date
              </p>
              <p className="d-flex align-items-center m-0">
                <FontAwesomeIcon className="text-warning mx-2" icon={faClock} />
                time
              </p>
            </div>
          </div>
          <Link
            to="/recentlyadded"
            className="text-decoration-none text-uppercase btn btn-outline-warning rounded-pill border border-3 border-warning fs-5 fw-bold d-flex align-items-center py-2 px-3 gap-2 mt-4 "
            style={{ width: "fit-content" }}
          >
            <FontAwesomeIcon className="mx-2" icon={faPlay} />
            watch now
          </Link>
        </div>
        <div className="hero-left py-5"></div>
        <div className="hero-right py-5"></div>

        <div className="opac-box"></div>
      </div>

      <div className="home2 pb-5 ">
        <div className="opac-box-06"></div>

        <div className="container z-23">
          <div className="justify-content-between align-items-center d-flex block-to-line mt-2 mb-3">
            <div className="text-start">
              <h6 className="text-uppercase fw-bold text-warning ">
                4k streaming
              </h6>
              <h2 className="text-light">Trending</h2>
              <button
                className={`rounded shadow mx-2 text-uppercase text-light btn ${
                  movieSelected && "btn-outline-primary shadow"
                }`}
                onClick={() => {
                  setMovieSelected(true);
                }}
              >
                movies
              </button>
              <button
                className={`rounded shadow mx-2 text-uppercase text-light btn ${
                  !movieSelected && "btn-outline-success shadow"
                }`}
                onClick={() => {
                  setMovieSelected(false);
                }}
              >
                TV shows
              </button>
            </div>
            {/* { movieSelected ?
           <ul>
              
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-primary ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={null} onClick={e => setGenre(e.currentTarget.value)}>all movies</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-primary ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={28} onClick={e => setGenre(e.currentTarget.value)}>action</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-primary ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={35} onClick={e => setGenre(e.currentTarget.value)}>comedy</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-primary ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={27} onClick={e => setGenre(e.currentTarget.value)}>horror</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-primary ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={878} onClick={e => setGenre(e.currentTarget.value)}>sci-fi</button>
            
          </ul>
          :
          <ul>
              
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-success ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={null} onClick={e => setGenre(e.currentTarget.value)}>all shows</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-success ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={10759} onClick={e => setGenre(e.currentTarget.value)}>action</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-success ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={35} onClick={e => setGenre(e.currentTarget.value)}>comedy</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-success ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={10762} onClick={e => setGenre(e.currentTarget.value)}>kids</button>
            
            
              <button className={`rounded shadow mx-2 text-uppercase text-light btn btn-outline-success ${movieSelected ? 'btn-outline-succuess' : 'btn-outline-primary'}`} value={10765} onClick={e => setGenre(e.currentTarget.value)}>sci-fi</button>
            
          </ul>
          } */}
          </div>

          <div className="row row-cols-2 row-cols-md-3  row-cols-xl-5 row-cols-xxl-6">
            {movieSelected ? (
              <TrendingMovies aos={"zoom-in"} />
            ) : (
              <TrendingTV aos={"zoom-in"} />
            )}
          </div>
        </div>
        <div className="download-offline pt-5">
          <div className=" d-flex py-5 z-23 row row-cols-1 row-cols-xl-2 container mx-auto ">
            <div className="block-to-line gap-3 mb-5 align-items-base justify-content-center col">
              <img
                className="border border-warning img-square "
                src="https://www.slashgear.com/img/gallery/netflix-4k-streaming-on-macos-big-sur-to-require-a-t2-security-chip/intro-import.jpg"
                alt="download"
              />
              {/* <button className="btn btn-info fw-light  align-self-end rounded border-0 rot90" style={{height:500}}>
                <p className="rot90">DOWNLOAD</p>{" "}
                <svg
                  className="mt-4"
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
            <div className="flex-column text-start col">
              <span className="d-flex align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "rgb(255, 193, 7)" }}
                  height="48"
                  width="48"
                >
                  <path d="M8 25.5v-3h32v3Z" />
                </svg>
                <small className="text-uppercase text-light  fw-bold ">
                  our services
                </small>
              </span>

              <h2 className="text-capitalize fw-bold text-light">
                download your movies shows watch offline
              </h2>
              <p className="text-secondary ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                ratione officiis necessitatibus officia dolorem. Dignissimos
                consequuntur harum, quas, non est nulla repellendus corrupti
                distinctio ex magni voluptatibus. Nihil, voluptas nisi!
              </p>
              <div className="flex-column text-start mt-4">
                <div className="d-flex gap-3">
                  <span
                    className="rounded-circle align-items-center h-25 btn btn-outline-warning btnbtn-outline-info  py-3 mt-3"
                    style={{ outline: "dashed" }}
                  >
                    <FontAwesomeIcon
                      className="text-light"
                      icon={faTv}
                      size="3x"
                    />
                  </span>
                  <div className="flex-column">
                    <h4 className="text-capitalize text-light fw-bold">
                      enjoy on your TV
                    </h4>
                    <p className="text-secondary ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod, voluptates tempore hic voluptatum aliquid, minus
                      voluptatibus atque dicta, autem pariatur ut iure natus
                      facilis ratione.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="d-flex gap-3">
                  <span
                    className="rounded-circle align-items-center h-25 btn btn-outline-warning py-3 mt-3"
                    style={{ outline: "dashed" }}
                  >
                    <FontAwesomeIcon
                      className="text-light"
                      icon={faVideo}
                      size="3x"
                    />
                  </span>
                  <div className="flex-column">
                    <h4 className="text-capitalize text-light fw-bold">
                      watch anywhere
                    </h4>
                    <p className="text-secondary ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod, voluptates tempore hic voluptatum aliquid, minus
                      voluptatibus atque dicta, autem pariatur ut iure natus
                      facilis ratione.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopMovies />
      <TopTV />
      <Trial />
    </div>
  );
}
