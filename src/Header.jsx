import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilm } from "@fortawesome/free-solid-svg-icons";
import './nav.css';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
export default function Header() {
    const [showNav, setNav] = useState(false);
return(
    <nav className="navbar navbar-expand-lg navbar-body bg-dark shadow  position-fixed  mobile-navbar overflow-hidden">
    <div className="container justify-content-around mobile">
        <div className="d-flex align-items-center gap-1 brand-nav">
            <FontAwesomeIcon className="text-warning" icon={faFilm} size='2x'/>
            <h2 className="m-0 fw-bold text-light inter">Movi/SPHINX</h2>
            <FontAwesomeIcon icon={faBars} className="text-secondary menu-mobile " size='2x' onClick={() => setNav(!showNav)}/>

        </div>
        <div className="nav-drop" id={`${showNav ? 'reveal' : 'hide'}`}>
            <ul className="navbar-nav gap-4 ls-1px">
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder text-warning"> Home</li></a>
               <NavLink to="/recentlyAdded" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">what's new</li></NavLink>      
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">movie</li></a>       
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">tv show</li></a>
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">pricing</li></a>
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">contact</li></a>
            </ul>
        </div>
        <div>###</div>
    </div>

</nav>
)
}