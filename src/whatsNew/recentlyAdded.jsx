import "../home.css";
import "./whatsNew.css";

import { UpcomingMovies } from "../movies/upcomingMovies";
import { UpcomingTV } from "../TV/upcomingTvShows";
import { TopMovies } from "../movies/TopMovies";
import { TopTV } from "../TV/TopTV";
import Trial from "../Trial/trial";
import TitleCarousel from "../Carousels/TitleCarousel";

export default function RecentlyAdded() {
  return (
    <div className="overflow-hidden pt-5">
      <div className="recent d-flex position-relative align-items-center   justify-content-center">
        <div className="row row-cols-1 row-cols-xl-2">
          <div className=" col   px-5 pt-5 pb-5 ">
            <h2 className="text-uppercase text-light fw-bold orbitron ls-1px fs-1 z-23 mb-5 mx-3">
              new movies
            </h2>

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-3 row-cols-xxl-4 justify-content-center">
              <UpcomingMovies aos={"flip-left"} />
            </div>
          </div>
          <div className=" col  content-right px-5 pt-5 pb-5">
            <h2 className="text-uppercase text-light fw-bold orbitron ls-1px fs-1 z-23 mb-5 mx-3">
              new shows
            </h2>

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-3 row-cols-xxl-4 justify-content-center">
              <UpcomingTV aos={"flip-right"} />
            </div>
          </div>
          <div className="opac-box-recent"></div>
        </div>

        <div className="bg-pic-wn-bloodgirl py-5  "></div>
        <div className="bg-pic-wn-dragon  py-5 position-absolute"></div>
      </div>

      <div className="home pb-5 ">
        {/* <div className="opac-box-06"></div> */}

        <TitleCarousel
          aos={"fade-left"}
          caraName={"action movies"}
          id={28}
          compName={"movies"}
        />
        <TitleCarousel
          aos={"fade-right"}
          caraName={"horror movies"}
          id={27}
          compName={"movies"}
        />
        <TitleCarousel
          aos={"fade-left"}
          caraName={"comedy movies"}
          id={35}
          compName={"movies"}
        />
        <TitleCarousel
          aos={"fade-right"}
          caraName={"action & adventure movies"}
          id={10759}
          compName={"movies"}
        />
        <TitleCarousel
          aos={"fade-left"}
          caraName={"sci-fi shows"}
          id={10765}
          compName={"movies"}
        />
        <TitleCarousel
          aos={"fade-right"}
          caraName={"comedy shows"}
          id={35}
          compName={"movies"}
        />
      </div>
      <TopMovies />
      <TopTV />
      <Trial />
    </div>
  );
}
