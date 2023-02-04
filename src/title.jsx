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
    <div className="col mb-3 z-23 upcoming_poster-div" key={id} id={id}>
      <a href={homePath}>

      <img
        className="w-80"
        src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
        alt="poster"
      />
      </a>

      <div className="lsStyle-none d-flex justify-content-between text-light mt-2 px-4">
        <div className="text-start">
          <a href={homePath}>
          <p className="text-light  fw-bold text-capitalize mb-2 ">
            {name}
          </p>
          </a>
          <small className="text-bg-transparent fw-bold text-warning  py-1">
            HD
          </small>
        </div>
        <div className="flex-column align-items-end text-end ">
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
      </div>
    </div>
  );
};
