import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilm } from "@fortawesome/free-solid-svg-icons";
import './nav.css';
import { useState } from 'react';
import {SearchBar} from './searchBar';
import {LoginButton} from "./Login/login";
// import {LogoutButton} from './Login/login';
export default function Header() {
    const [showNav, setNav] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(false);
return(
    <nav className="navbar navbar-expand-lg navbar-body bg-dark shadow  position-fixed  mobile-navbar">
    <div className=" container-fluid justify-content-between mx-auto mobile d-flex
">
        <div className="d-flex align-items-center gap-1 brand-nav">
            <FontAwesomeIcon className="text-warning" icon={faFilm} size='2x'/>
            <h2 className="m-0 fw-bold text-light inter colgrad-title michroma">SPHINX</h2>
            <FontAwesomeIcon icon={faBars} className="text-secondary menu-mobile " size='2x' onClick={() => setNav(!showNav)}/>

        </div>
        <div className="nav-drop align-items-center" >
            <ul className="d-flex navbar-nav gap-4 ls-1px"id={`${showNav ? 'reveal' : 'hide'}`}>
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov"> Home</li></a>
               <a href="/recentlyAdded" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">what's new</li></a>      
               <a href="/movies" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">movie</li></a>      
               <a href="/tv" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">tv show</li></a>      
               <a href="/pricing" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">pricing</li></a>      
               <a href="/favorites" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">favorites</li></a>      
            </ul>
        <div className="d-flex align-items-center mx-2 gap-2 search">
         <SearchBar nav={setNav}/>
        </div>
        </div>
        <div className="align-items-center justify-content-center">
           
            
            <LoginButton />

            
        </div>
    </div>

</nav>
)
}