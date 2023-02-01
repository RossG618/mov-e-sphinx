import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationPin,
  faPlay,
  faTv,
  faVideo,
  faFilm,
  faPhone,
  faEnvelope,

} from "@fortawesome/free-solid-svg-icons";
import { Title } from "./title";
import { UpcomingMovies } from "./upcomingMovies";
//
export default function Home() {
  // const [content, setContent] = useState({});
//   const [upcoming, setValue] = useState([]);
  const [bestTV, setTV] = useState([]);

  useEffect(() => {
    // const movieURL = `https://api.themoviedb.org/3/movie/`;
    // const movieURLs = [
        //   `${movieURL}804150?api_key=${API_KEY}`,
        //   `${movieURL}9552?api_key=${API_KEY}`,
        //   `${movieURL}49521?api_key=${API_KEY}`,
        //   `${movieURL}436270?api_key=${API_KEY}`,
        //   `${movieURL}254128?api_key=${API_KEY}`,
        // ];
        
        // const requests = movieURLs.map((url) => axios.get(url));
        
        // axios
        //   .all(requests)
        //   .then((responses) => {
            //     responses.forEach((res) => {
                //       //  console.log(responses)
                //       //   upcoming.push(res.data);
                //       setValue((upcoming) => [...upcoming, res.data]);
                //       //   console.log("upcoming", upcoming);
                //     });
                //   })
                //   .catch((res) => console.log(res));
                
                const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";
            const tvURL = `https://api.themoviedb.org/3/tv/`;
    const tvURLs = [
      `${tvURL}100088?api_key=${API_KEY}`,
      `${tvURL}1396?api_key=${API_KEY}`,
      `${tvURL}94605?api_key=${API_KEY}`,
      `${tvURL}119051?api_key=${API_KEY}`,
      `${tvURL}66732?api_key=${API_KEY}`,
    ];

    const tvRequests = tvURLs.map((url) => axios.get(url));

    axios
      .all(tvRequests)
      .then((responses) => {
        responses.forEach((res) => {
          //  console.log(responses)
          //   bestTV.push(res.data);
          setTV((bestTV) => [...bestTV, res.data]);

          console.log(res.data);
        });
      })
      .catch((res) => console.log(res));
  }, []);

  //     useEffect(() => {

  // axios.get(`${url}49521?api_key=${API_KEY}`)
  //       .then(res => {
  //         console.log(res.data);
  //         setContent(res.data);
  //       }).catch(res => console.log(res.data))

  //     }, [])

  // clickHandler = (event) => {
  //     if (event.keyCode === 13) {
  //        const query = event.target.value;
  //        const url = 'https://api.themoviedb.org/3/search/movie';
  //        const API_KEY = '22d11a2dc2e969e44e86767ccc60fac8';
  // axios.get(`${url}?api_key=${API_KEY}&query=${query}`)
  //   .then(res => {
  //     const title = res.data['results'][0]['title'];
  //     this.setState({ title });

  //     const popularity = res.data['results'][0]['popularity']
  //     this.setState({ popularity });

  //     const poster = res.data['results'][0]['poster_path']//Problem
  //     this.setState({ poster });//Problem

  //   })
  //     }
  // }

  return (
    <div>
      <Header />
      <div className="home bg-dark d-flex position-relative align-items-center ">
        <div className="hero-content text-bg-dark bg-transparent text-start my-4 py-5 container">
          <h4 className="fs- fw-bold text-warning">Movi SPHINX</h4>
          <h1 className="display-3 fw-bold w-50">
            Unlimted <span className="text-warning yellow">Movies</span>, TV
            Shows & More
          </h1>

          <ul className="d-flex lsStyle-none gap-3 mt-3 mb-5 p-0 align-items-center">
            <li>
              <small className="border border-2 fw-bold text-bg-light px-2 py-1 m-0 ">
                PG-18
              </small>
            </li>
            <li>
              <small className="text-bg-transparent fw-bold text-light border border-2 px-2 py-1 m-0">
                HD/SD
              </small>
            </li>
            <span className="d-flex mx-2 gap-2">
              <li>genres</li>

              <li className="d-flex align-items-center">
                <FontAwesomeIcon
                  className="text-warning mx-2"
                  icon={faCalendarDays}
                />
                date
              </li>
              <li className="d-flex align-items-center">
                <FontAwesomeIcon className="text-warning mx-2" icon={faClock} />
                time
              </li>
            </span>
          </ul>

          <button className="text-uppercase btn btn-outline-warning rounded-pill border border-3 border-warning fs-5 fw-bold d-flex align-items-center py-2 px-4 gap-2">
            <FontAwesomeIcon className="mx-2" icon={faPlay} />
            watch now
          </button>
        </div>
        <div className="hero-left py-5"></div>
        <div className="hero-right py-5"></div>

        <div className="opac-box"></div>
      </div>

      <div className="home2 pb-5 ">
        <div className="opac-box-06"></div>

        <div className="container z-23">
          <div className="justify-content-between d-flex mt-5">
            <div className="text-start">
              <h6 className="text-uppercase fw-bold text-warning ">
                4k streaming
              </h6>
              <h2 className="text-light">Upcoming Movies</h2>
            </div>
            <ul className=" gap-3">
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
            </ul>
          </div>

          <div className="row row-cols-5">
            <UpcomingMovies />
          </div>
        </div>
        <div className="download-offline pt-5">
          <div className="container d-flex py-5 z-23">
            <div className="d-flex gap-3 align-items-base col">
              <img
                className="border border-warning"
                src="https://www.slashgear.com/img/gallery/netflix-4k-streaming-on-macos-big-sur-to-require-a-t2-security-chip/intro-import.jpg"
                width="500px"
                alt="download"
              />
              <button className="btn btn-info fw-light h-50 align-self-end rounded border-0 ">
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
              </button>
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
                <small className="text-uppercase text-light  fw-bold m-0">
                  our services
                </small>
              </span>

              <h2 className="text-capitalize fw-bold text-light">
                dowload your movies shows watch offline
              </h2>
              <p className="text-secondary">
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
                    <p className="text-secondary">
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
                    <p className="text-secondary">
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

      <div className="top-rated bg-dark ">
        <div className="container py-5">
          <small className="text-warning text-uppercase">
            online streaming
          </small>
          <h2 className="text-capitalize text-light fs-1 fw-bold">
            top rated movies
          </h2>
          <div className="my-5">
            <ul>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                all movies
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                action
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                comedy
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                horror
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                sci-fi
              </li>
            </ul>
          </div>
          <div className="row row-cols-auto justify-content-between">
            <div className="col  upcoming_post-div">
              <div className="upcoming_poster poster1 rounded"></div>
              <div className="lsStyle-none d-flex justify-content-between text-light mt-3">
                <div className="text-start">
                  <li className="text-light fs-5 fw-bold text-capitalize mb-2">
                    title
                  </li>
                  <small className="text-bg-transparent fw-bold text-warning  py-1">
                    HD/SD
                  </small>
                </div>
                <div className="flex-column align-items-end text-end">
                  <li className="mb-3 text-warning fw-bold">2023</li>
                  <span className="d-flex gap-2 ">
                    <li>time</li>
                    <li>rating</li>
                  </span>
                </div>
              </div>
            </div>
            <div className="col  upcoming_post-div ">
              <div className="upcoming_poster poster4 rounded "></div>
              <div className="lsStyle-none d-flex justify-content-between text-light mt-3">
                <div className="text-start">
                  <li className="text-light fs-5 fw-bold text-capitalize mb-2">
                    title
                  </li>
                  <small className="text-bg-transparent fw-bold text-warning  py-1">
                    HD/SD
                  </small>
                </div>
                <div className="flex-column align-items-end text-end">
                  <li className="mb-3 text-warning fw-bold">2023</li>
                  <span className="d-flex gap-2 ">
                    <li>time</li>
                    <li>rating</li>
                  </span>
                </div>
              </div>
            </div>
            <div className="col  upcoming_post-div ">
              <div className="upcoming_poster poster3 rounded "></div>
              <div className="lsStyle-none d-flex justify-content-between text-light mt-3">
                <div className="text-start">
                  <li className="text-light fs-5 fw-bold text-capitalize mb-2">
                    title
                  </li>
                  <small className="text-bg-transparent fw-bold text-warning  py-1">
                    HD/SD
                  </small>
                </div>
                <div className="flex-column align-items-end text-end">
                  <li className="mb-3 text-warning fw-bold">2023</li>
                  <span className="d-flex gap-2 ">
                    <li>time</li>
                    <li>rating</li>
                  </span>
                </div>
              </div>
            </div>
            <div className="col  upcoming_post-div ">
              <div className="upcoming_poster poster2 rounded "></div>
              <div className="lsStyle-none d-flex justify-content-between text-light mt-3">
                <div className="text-start">
                  <li className="text-light fs-5 fw-bold text-capitalize mb-2">
                    title
                  </li>
                  <small className="text-bg-transparent fw-bold text-warning  py-1">
                    HD/SD
                  </small>
                </div>
                <div className="flex-column align-items-end text-end">
                  <li className="mb-3 text-warning fw-bold">2023</li>
                  <span className="d-flex gap-2 ">
                    <li>time</li>
                    <li>rating</li>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-rated-tv bg-secondary ">
        <div className="container py-5">
          <small className="text-warning text-uppercase">
            online streaming
          </small>
          <h2 className="text-capitalize text-light fs-1 fw-bold">
            world best TV shows
          </h2>
          <div className="my-5">
            <ul>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                all tv shows
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                action
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                comedy
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                horror
              </li>
              <li className="btn rounded border shadow mx-2 text-uppercase text-light">
                sci-fi
              </li>
            </ul>
          </div>
          <div className="row row-cols-5 ">
            {bestTV.map((tv) => (
              <Title
                key={tv.id}
                id={tv.id}
                posterPath={tv.poster_path}
                name={tv.name}
                firstDate={tv.first_air_date}
                popularity={tv.popularity}
              />
              //   <div className="col  upcoming_post-div " key={tv.id} id={tv.id}>
              //     <img
              //       className="upcoming_poster"
              //       src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
              //       alt=""
              //     />

              //     <div className="lsStyle-none d-flex justify-content-between text-light mt-3">
              //       <div className="text-start">
              //         <li className="text-light fs-5 fw-bold text-capitalize mb-2">
              //           {tv.name}
              //         </li>
              //         <small className="text-bg-transparent fw-bold text-warning  py-1">
              //           HD/SD
              //         </small>
              //       </div>
              //       <div className="flex-column align-items-end text-end">
              //         <li className="mb-3 text-warning fw-bold">
              //           {tv.first_air_date}
              //         </li>
              //         <span className="d-flex gap-2 ">
              //           <small className="mx-2">{tv.episode_run_time} min</small>
              //           <small>
              //             <FontAwesomeIcon
              //               className="text-warning"
              //               icon={faThumbsUp}
              //             />{" "}
              //             {Math.round(tv.popularity) / 10}
              //           </small>
              //         </span>
              //       </div>
              //     </div>
              //   </div>
            ))}

            {/* <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv4 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>

                </div>
                <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv3 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>
                    
                </div>
                <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv2 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>

                </div>
                <div className="col  upcoming_post-div mb-5">
                    <div className="upcoming_poster poster-tv1 rounded"></div>
                     <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                            <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>

                </div>
                <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv4 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>

                </div>
                <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv3 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>
                    
                </div>
                <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv2 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>

                </div>
                <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv2 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>

                </div>
                <div className="col  upcoming_post-div mb-5 ">
                <div className="upcoming_poster poster-tv2 rounded "></div>
                 <div className="lsStyle-none d-flex justify-content-between text-light mt-2">

                        <div className="text-start">
                        <li className="text-light fs-5 fw-bold text-capitalize mb-2">title</li>
                            <small className="text-bg-transparent fw-bold text-warning  py-1">HD/SD</small>
                        </div>
                        <div className="flex-column align-items-end text-end">
                        <li className="mb-3 text-warning fw-bold">2023</li>
                        <span className="d-flex gap-2 ">

                        <li>time</li>
                        <li>rating</li>
                        </span>

                        </div>
                    </div>

                </div> */}
          </div>
        </div>
      </div>

      <div className="trial ">
        <div className="container d-flex align-items-center justify-content-around py-4">
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

      <div className="footer bg-dark overflow-idden ">
        <div className="container py-4 row row-cols-4 mx-auto d-flex">
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
