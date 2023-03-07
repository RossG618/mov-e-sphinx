import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilm } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import { useState } from "react";
import { SearchBar } from "./searchBar";
import { LoginButton } from "./Login/login";
// import {LogoutButton} from './Login/login';
export default function Header() {
  const [showNav, setNav] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-body bg-dark shadow py-1 position-fixed  -navbar">
      <div className="d-flex align-items-center gap-1">
        <FontAwesomeIcon className="text-warning menu-mobile menu-left position-absolute" icon={faFilm} size="xl" />
        <h2
          className="m-0 fw-bold text-light inter colgrad-title michroma "
          id="nav-brand"
        >
          SPHINX
        </h2>
        <FontAwesomeIcon
          icon={faBars}
          className="text-secondary menu-mobile menu-right position-absolute"
          size="xl"
          onClick={() => setNav(!showNav)}
        />
      </div>
      <div
        className="  justify-content-center mx-auto  d-flex
"
      >
        <div className="nav-drop align-items-center">
          <ul
            className="align-items-center d-flex navbar-nav mx-1 gap-4 ls-1px"
            id={`${showNav ? "reveal" : "hide"}`}
          >
            <a href="/" className="text-decoration-none">
              {" "}
              <li className="nav-item text-uppercase fw-bolder yellowHov">
                {" "}
                Home
              </li>
            </a>
            <a href="/recentlyAdded" className="text-decoration-none">
              {" "}
              <li className="nav-item text-uppercase fw-bolder yellowHov">
                what's new
              </li>
            </a>
            <a href="/movies" className="text-decoration-none">
              {" "}
              <li className="nav-item text-uppercase fw-bolder yellowHov">
                movie
              </li>
            </a>
            <a href="/tv" className="text-decoration-none">
              {" "}
              <li className="nav-item text-uppercase fw-bolder yellowHov">
                tv show
              </li>
            </a>
            <a href="/pricing" className="text-decoration-none">
              {" "}
              <li className="nav-item text-uppercase fw-bolder yellowHov">
                pricing
              </li>
            </a>
            <a href="/favorites" className="text-decoration-none">
              {" "}
              <li className="nav-item text-uppercase fw-bolder yellowHov">
                favorites
              </li>
            </a>
            <LoginButton />
          </ul>
          <div
            id="searchbar-mobile"
            style={{ width: "fit-content" }}
            className=" block-to-line align-items-center  gap-2 search"
          >
            <SearchBar nav={setNav} />
          </div>
        </div>
        <div
          id="searchbar-desktop"
          style={{ width: "fit-content" }}
          className=" block-to-line align-items-center mx-1  gap-2  py-0"
        >
          <SearchBar nav={setNav} />
        </div>
      </div>
    </nav>
  );
}
