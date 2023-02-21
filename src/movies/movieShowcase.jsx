import '../home.css';
import '../title.css'
import _ from 'lodash';
import { useState, useEffect } from "react";
import { getMovie } from '../SERVICES/tmdbService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export const lineTextStyle = {
  maxWidth: '100%',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
export const MovieShowcase = ({movieID}) => {
 const [moreText, setText] = useState(false)
 const [preview, setPreview] = useState({});
  


 useEffect(() => {
   
   getMovie(movieID)
     .then((res) => {
       setPreview(res.data);
     })
     .catch((res) => console.log(res));
 }, [movieID]);
 
  return (
    <div className="upcoming_post-div p-3  z-23 d-flex border-secondary row row-cols-1 row-cols-lg-2 align-items-center justify-content-center" key={preview.id} id={preview.id} style={{width: 'fit-content'}}>
      <div className="col pb-2">
        <a href={preview.homepage}>
          <img
            className="img-fluid shadow showcase-poster"
            src={`https://image.tmdb.org/t/p/w300/${preview.poster_path}`}
            alt="poster"
          />
        </a>
      </div>
      <div className="lsStyle-none justify-content-between text-light mt-3 px-5 col">
        <div className="text-start d-flex row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
          <a href={preview.homepage} className="col">
            <p className="text-light fs-3 fw-bold text-capitalize mb-2 ">
              {preview.title}
            </p>
          </a>
          <div className="d-flex align-items-center text-end gap-2 mx-auto col">
          <p className="text-secondary fw-bold m-0 ">
            HD
          </p>
          <small className="border rounded-2 p-0 px-2 mx-1">{_.take(preview.release_date, 4)}</small>


          <span className="d-flex gap-2 justify-content-end ">
            {preview.runtime && <small className="mx-2">{preview.runtime} min</small>}
            <small className="d-flex gap-1 align-items-base">
              <FontAwesomeIcon className="text-warning" icon={faThumbsUp} />
              {Math.round(preview.popularity) / 10}
            </small>
          </span>
        </div>
        </div>
       <div className="row ">
        <div className="mt-3 text-start">
            <h5 className="mb-3 text-warning text-center">{preview.tagline}</h5>
            {moreText ? 
              <p className="text-start gap-3" >{preview.overview}</p>
           :
              <p className="text-start gap-3" style={lineTextStyle}>{preview.overview}</p>
          }
          {!moreText ? <p role="button" className="text-info" onClick={() => setText(true)}
          >More</p> :
          <p role="button" className="text-info" onClick={() => setText(false)}
          >Less</p>}
        </div>
<button className="btn btn-info fw-light align-self-end rounded border-0 w-50 mx-auto" >
                <p className="m-0" >DOWNLOAD</p>{" "}
                <svg
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
      
      </div>
    </div>
  );
};
