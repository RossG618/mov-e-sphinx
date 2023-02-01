import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
export const Title = (
  {id,
  posterPath,
  name,
  firstDate,
  runtime,
  popularity}
) => {
  return (
    <div className="col  upcoming_post-div "  id={id}>
      <img
        className="upcoming_poster"
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt="poster"
      />

      <div className="lsStyle-none d-flex justify-content-between text-light mt-3 px-2">
        <div className="text-start">
          <li className="text-light fs-5 fw-bold text-capitalize mb-2">
            {name}
          </li>
          <small className="text-bg-transparent fw-bold text-warning  py-1">
            HD/SD
          </small>
        </div>
        <div className="flex-column align-items-end text-end">
          <li className="mb-3 text-warning fw-bold">{firstDate.slice(0, 4)}</li>
          <span className="d-flex gap-2 ">
            {runtime && <small className="mx-2">{runtime} min</small>}
            <small>
              <FontAwesomeIcon className="text-warning" icon={faThumbsUp} />{" "}
              {Math.round(popularity) / 10}
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};
