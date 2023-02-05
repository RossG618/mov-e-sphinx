import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
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
  return (
    <div className="col mb-3 z-23 upcoming_poster-div align-items-center px-5" key={id} id={id}>
      <a href={homePath}>

      <img
        className="w-50"
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
      <div className="lsStyle-none flex-column d-flex justify-content-center align-items-center text-light mt-2 bg-secondary ">
        <div className="text-start px-3 justify-content-between  d-flex">
          <a href={homePath}>
          <p className="text-light  fw-bold text-capitalize mb-2 ">
            {name}
          </p>
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
          <span className="align-items-center">
            <small className="mb-3 text-warning fw-bold">{firstDate.slice(0, 4)}</small>
          {/* {endDate > firstDate &&
          <small className="mb-3 text-warning fw-bold">-{endDate.slice(0, 4)}</small>
          } */}
          </span>
        </div>
      </div>
    </div>
  );
};
