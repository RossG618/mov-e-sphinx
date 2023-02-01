import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import './nav.css';
export default function Header() {
return(
    <nav className="navbar navbar-expand-lg navbar-body bg-dark shadow  position-fixed ">
    <div className="container justify-content-around ">

        <div className="d-flex align-items-center gap-1">
            <FontAwesomeIcon className="text-warning" icon={faFilm} size='2x'/>
            <h2 className="m-0 fw-bold text-light inter">Movi SPHINX</h2>
        </div>
        <div>
            <ul className="navbar-nav gap-4">
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder text-warning"> Home</li></a>
               <a href="/" className="text-decoration-none"> <li className="nav-item text-uppercase fw-bolder yellowHov">what's new</li></a>      
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