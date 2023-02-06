import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";


import './title.css';

//
export const Title = (
  {id,
  posterPath,
  name,
  firstDate,
  endDate,
  runtime,
  popularity,
homePath}
) => {

  const lineTextStyleTwo = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  return (
    <div className="col mb-3 z-23 upcoming_poster-div align-items-center " key={id} id={id}>
      <a href={homePath}>

      <img
        className="w-100"
        height="360"
        src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
        alt="poster"
      />
      </a>

      {/* <div className="lsStyle-none d-flex justify-content-center text-light mt-2 px-5">
        <div className="text-start px-3 ">
          <a href={homePath}>
          <p className="text-light  fw-bold text-capitalize mb-2 ">
            {name}
          </p>
          </a>
          <small className="text-bg-transparent fw-bold text-warning  py-1">
            HD
          </small>
        </div>
        <div className="flex-column align-items-end text-end px-4">
          <span className="align-items-center justify-content-end d-flex">
            <p className="mb-3 text-warning fw-bold">{firstDate.slice(0, 4)}</p>
          {endDate > firstDate &&
          <p className="mb-3 text-warning fw-bold">-{endDate.slice(0, 4)}</p>
          }
          </span>
          
          <span className="d-flex gap-2 justify-content-end ">
            {runtime && <small className="mx-2">{runtime} min</small>}
            <small className="d-flex gap-2 align-items-center">
              <FontAwesomeIcon className="text-warning" icon={faThumbsUp} />
              {Math.round(popularity) / 10}
            </small>
          </span>
        </div>
      </div> */}
      <div className="lsStyle-none flex-column d-flex justify-content-center align-items-center text-light p-3   bg-dark ">
        <div className="text-start  justify-content-between  d-flex ">
          <a href={homePath}>
          <small className="text-light  fw-bold  text-capitalize mb-2 title-name" style={lineTextStyleTwo}>
            {name}
          </small>
          </a> 
        </div>
        <div className="d-flex align-items-center gap-3 px-4">
         <small className="text-bg-transparent fw-bold text-warning  py-1">
            HD
          </small>
          
          <span className="d-flex gap-2 justify-content-end ">
            {/* {runtime && <small className="mx-2">{runtime} min</small>} */}
            <small className="d-flex gap-2 align-items-center">
              <FontAwesomeIcon className="text-warning" icon={faThumbsUp} />
              {Math.round(popularity) / 10}
            </small>
          </span>
          <div className="align-items-center">
            <small className="mb-3 text-warning fw-bold">{firstDate.slice(0, 4)}</small>
          {/* {endDate > firstDate &&
          <small className="mb-3 text-warning fw-bold">-{endDate.slice(0, 4)}</small>
          } */}
          </div>
        </div>
          <button className="rounded btn-info btn text-uppercase border-0 mt-3 w-100">watch now</button>
      </div>
    </div>
  );
};
