import "../home.css";
import "../whatsNew/whatsNew.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faFilm,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { UpcomingMovies } from "../upcomingMovies";
// import { UpcomingTV } from "../upcomingTvShows";
import { UpcomingGenre } from "../whatsNew/upcomingActionMovies";
import { TvShowcase } from "./tvShowcase";
import { TopRatedMovies } from "../topRateMovies";
import { TopRatedShows } from "../topRateShows";
export default function TV() {
  return (
    <div className="overflow-hidden pt-5">
      <div className="recent d-flex position-relative align-items-center pt-5  justify-content-center full-height">
        <div className="pt-2 container ">
          <TvShowcase tvID={'100088'}/>
          <div className=" col    py-5 "> 
            <h2 className="text-uppercase text-light fw-bold orbitron ls-1px fs-1 z-23 mb-5 mx-3">
              new movies
            </h2>

            <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4  row-cols-xxl-6 mx-auto container justify-content-center">
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
          <div className="row row-cols-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 justify-content-center">
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

      <div className="footer bg-dark overflow-idden z-23">
        <div className="container pt-4 row row-cols-4 mx-auto d-flex">
          <div className="col flex-column">
            <div className="flex-column text-start">
              <span className="d-flex align-items-center gap-1">
                <FontAwesomeIcon
                  className="text-warning"
                  icon={faFilm}
                  size="2x"
                />
                <h2 className="m-0 fw-bold text-light inter">Movi SPHINX</h2>
              </span>

              <p className="text-secondary ">
                Movi SPHINX offer all sorts of gems from hard-to-find movies to
                brand-new releases
              </p>
            </div>

            <ul className="mt-4 lsStyle-none text-start text-light mx-0 p-0">
              <li className="mb-3">
                <FontAwesomeIcon icon={faLocationPin} />
                <span className="mx-2"> Address: PO Box BH12</span>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span className="mx-2">Phone: 07740211442</span>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="mx-2"> Email: info@moviSphinx.com</span>
              </li>
            </ul>
          </div>
          <div className="text-light col text-start">
            <h5 className="text-uppercase fw-bold ls-1px mb-4">categories</h5>
            <ul className="lsStyle-none  text-secondary  fw-light p-0">
              <li className="mb-3">Movies</li>
              <li className="mb-3">TV Shows</li>
              <li className="mb-3">Downloaded</li>
              <li className="mb-3">Streaming in 4K</li>
            </ul>
          </div>

          <div className="text-light col text-start">
            <h5 className="text-uppercase fw-bold ls-1px mb-4">recent posts</h5>
            <div className="d-flex mb-3 gap-3">
              <img
                className="rounded"
                src="https://thumbs.dreamstime.com/b/happy-friends-remote-watching-tv-home-friendship-leisure-people-entertainment-concept-control-drinks-85422107.jpg"
                style={{ objectFit: "cover" }}
                width="100"
                height="80"
                alt=""
              />
              <small>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam magni libero aut veritatis eius vel!
              </small>
            </div>
            <div className="d-flex mb-3 gap-3">
              <img
                className="rounded"
                src="https://thumbs.dreamstime.com/b/happy-friends-remote-watching-tv-home-friendship-leisure-people-entertainment-concept-control-drinks-85422107.jpg"
                style={{ objectFit: "cover" }}
                width="100"
                height="80"
                alt=""
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam magni libero aut veritatis eius vel!
              </p>
            </div>
          </div>

          <div className="text-light col text-start">
            <h5 className="text-uppercase fw-bold ls-1px mb-4">follow us</h5>
            <div className="d-flex align-items-center gap-2 ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/ross.gardner.94"
              >
                <svg
                  style={{ fill: "#5f5fe1" }}
                  width="36"
                  height="36"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/?lang=en"
              >
                <svg
                  width="36"
                  height="36"
                  style={{ fill: "#3aa3d9" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
              >
                <svg
                  className="insta rounded"
                  width="34"
                  height="34"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
              >
                <svg
                  className="rounded"
                  style={{ background: "#2c3" }}
                  fill="white"
                  width="36"
                  height="36"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>
            </div>
            <div>
              <div className="rounded-pill border border-4 border-secondary p-0 mt-4 d-flex">
                <input
                  style={{ outline: "none", border: "none" }}
                  className="rounded-pill text-bg-dark p-2 overflow-hidden"
                  type="email"
                  placeholder="Enter Email"
                />
                <button
                  className="text-bg-warning rounded-pill px-2 fw-bold align-items-center"
                  style={{ outline: "none", border: "none" }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
