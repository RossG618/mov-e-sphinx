import "../home.css";
import "../whatsNew/whatsNew.css";

import { UpcomingMovies } from "../upcomingMovies";
// import { UpcomingTV } from "../upcomingTvShows";
import { TopRatedMovies } from "../topRateMovies";
import { UpcomingGenre } from "../whatsNew/upcomingActionMovies";
import { TopRatedShows } from './../topRateShows';
import { MovieShowcase } from "./movieShowcase";

export default function Movies() {
  return (
    <div className="overflow-hidden pt-5">
      <div className="recent d-flex position-relative align-items-center pt-5  justify-content-center full-height">
        <div className="pt-2 container">
          <MovieShowcase movieID={'561662'}/>
          <div className=" col    py-5 "> 
            <h2 className="text-uppercase text-light fw-bold orbitron ls-1px fs-1 z-23 mb-5 mx-3">
              new movies
            </h2>

            <div className="row row-cols-2 row-cols-sm-3 row-cols-xl-4  row-cols-xxl-6 mx-auto container">
              <UpcomingMovies />
            </div>
          </div>
          {/* <div className=" col  content-right px-5 pt-5 pb-5">
            <h2 className="text-uppercase text-light fw-bold orbitron ls-1px fs-1 z-23 mb-5 mx-3" >
              new shows
            </h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3  row-cols-xxl-5  ">
              <UpcomingTV />
            </div>
          </div> */}
        <div className="opac-box-recent"></div>
        </div>

        <div className="bg-pic-wn-bloodgirl py-5  "></div>
        <div className="bg-pic-wn-dragon  py-5 position-absolute"></div>
      </div>

      <div className="home pb-5 ">
        {/* <div className="opac-box-06"></div> */}

        <div className=" z-23 mx-5 w-75 mx-auto">
          <div className="justify-content-between d-flex mt-5 pt-5">
            <div className="text-start">
              <h6 className="text-uppercase fw-bold text-warning ">
                4k streaming
              </h6>
              <h2 className="text-light text-capitalize">action movies</h2>
            </div>
            {/* <ul className=" gap-3">
              <li className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark">
                action
              </li>
              <li className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark">
                comedy
              </li>
              <li className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark">
                sci-fi
              </li>
              <li className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark">
                horror
              </li>
            </ul> */}
          </div>
          <UpcomingGenre />
        </div>
        <div className="mx-5 z-23 w-75  justify-content-center mx-auto">
          <div className="justify-content-between d-flex mt- pt-">
            <div className="text-start">
              <h6 className="text-uppercase fw-bold text-warning ">
                4k streaming
               
              </h6>
              <h2 className="text-light text-capitalize">horror movies</h2>
            </div>
            
          </div>

          <UpcomingGenre />
        </div>
        <div className="mx-5 z-23 w-75 mx-auto">
          <div className="justify-content-between d-flex mt- pt-">
            <div className="text-start">
              <h6 className="text-uppercase fw-bold text-warning ">
                4k streaming
                
              </h6>
              <h2 className="text-light text-capitalize">action movies</h2>
            </div>
            
          </div>

          <UpcomingGenre />
        </div>
       
      </div>

      <div className="top-rated ">
        <div className="container py-5 z-23">
          <small className="text-warning text-uppercase">
            online streaming
          </small>
          <h2 className="text-capitalize text-light fs-1 fw-bold">
            top rated movies
          </h2>
          <div className="my-5">
            <ul>
              <li className="btn rounded border shadow mx-2 mb-2 text-uppercase fw-bold text-bg-light">
                all movies
              </li>
              <li className="btn rounded border shadow mx-2 mb-2 text-uppercase fw-bold text-bg-light">
                action
              </li>
              <li className="btn rounded border shadow mx-2 mb-2 text-uppercase fw-bold text-bg-light">
                comedy
              </li>
              <li className="btn rounded border shadow mx-2 mb-2 text-uppercase fw-bold text-bg-light">
                horror
              </li>
              <li className="btn rounded border shadow mx-2 mb-2 text-uppercase fw-bold text-bg-light">
                sci-fi
              </li>
            </ul>
          </div>
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 ">
            <TopRatedMovies />
          </div>
        </div>
      </div>

      <div className="top-rated-tv ">
        <div className="container py-5 z-23">
          <small className="text-warning text-uppercase">
            online streaming
          </small>
          <h2 className="text-capitalize text-light fs-1 fw-bold">
            world best TV shows
          </h2>
          <div className="my-5">
            <ul>
              <li className="btn rounded shadow mx-2 mb-2 text-uppercase fw-bold text-bg-dark">
                all shows
              </li>
              <li className="btn rounded shadow mx-2 mb-2 text-uppercase fw-bold text-bg-dark">
                action
              </li>
              <li className="btn rounded shadow mx-2 mb-2 text-uppercase fw-bold text-bg-dark">
                comedy
              </li>
              <li className="btn rounded shadow mx-2 mb-2 text-uppercase fw-bold text-bg-dark">
                horror
              </li>
              <li className="btn rounded shadow mx-2 mb-2 text-uppercase fw-bold text-bg-dark">
                sci-fi
              </li>
            </ul>
          </div>
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
            <TopRatedShows/>
          </div>
        </div>
      </div>

      <div className="trial z-23">
        <div className="container d-flex align-items-center justify-content-around py-3">
          <div>
            <h2 className="text-uppercase fw-bold">
              start trial first{" "}
              <span className=" text-decoration-underline">30 days.</span>
            </h2>
            <p className="fw-bold ls-1px">
              Enter email to create or restart your membership.
            </p>
          </div>
          <div className="d-flex">
            <input
              className="border-dark px-2 "
              type="email"
              placeholder="Email Address"
            />
            <button className="btn btn-dark px-4 rounded-0 shadow">
              Submit
            </button>
          </div>
        </div>
      </div>

   
    </div>
  );
}
