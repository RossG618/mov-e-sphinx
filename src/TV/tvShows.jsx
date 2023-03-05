import "../home.css";
import "../whatsNew/whatsNew.css";

// import { UpcomingMovies } from "../upcomingMovies";
// import { UpcomingTV } from "../upcomingTvShows";
// import { UpcomingGenre } from "../whatsNew/upcomingActionMovies";
// import { TvShowcase } from "./tvShowcase";
import { UpcomingTV } from "./upcomingTvShows";
import TitleCarousel from "../Carousels/TitleCarousel";
import Trial from "../Trial/trial";
import { TopMovies } from "../movies/TopMovies";
import { TopTV } from "./TopTV";
export default function TV() {
  return (
    <div className="overflow-hidden pt-5">
      <div className="recent d-flex position-relative align-items-center justify-content-center">
        <div className="container ">
          {/* <TvShowcase tvID={'100088'}/> */}
          <div>
            <h2 className="text-uppercase text-light fw-bold orbitron ls-1px fs-1 z-23 mb-5 mx-3">
              popular shows
            </h2>

            <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4  row-cols-xxl-6 mx-auto container justify-content-center">
              <UpcomingTV aos={"zoom-out"} />
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

        <TitleCarousel
          aos={"fade-left"}
          compName={"shows"}
          caraName={"action & adventure shows"}
          id={10759}
        />
        <TitleCarousel
          aos={"fade-right"}
          compName={"shows"}
          caraName={"sci-fi shows"}
          id={10765}
        />
        <TitleCarousel
          aos={"fade-left"}
          compName={"shows"}
          caraName={"comedy shows"}
          id={35}
        />
      </div>

      <TopMovies />

      <TopTV />

      <Trial />
    </div>
  );
}
