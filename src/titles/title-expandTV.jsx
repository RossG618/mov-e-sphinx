import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";


export const TitleExpandTV = ({
  id,
  posterPath,
  name,
  firstDate,
  endDate,
  runtime,
  popularity,
  homePath,
  overView,
  tagLine
}) => {
  const lineTextStyle = {
  maxWidth: '100%',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};
  return (
    <div className="upcoming_post-div mb-4 z-23 d-flex border-bottom border-secondary" key={id} id={id}>
      <div className="col-2 pb-2">
        <a href={homePath}>
          <img
            className="w-100"
            src={`https://image.tmdb.org/t/p/original/${posterPath}`}
            alt="poster"
          />
        </a>
      </div>

      <div className="lsStyle-none justify-content-between text-light mt-3 px-5 col">
        <div className="text-start">
          <a href={homePath}>
            <li className="text-light fs-3 fw-bold text-capitalize mb-2 ">
              {name}
            </li>
          </a>
        </div>
        <div className="d-flex align-items-center text-end gap-2">
          <li className="text-secondary fw-bold fs-5">
            HD
          </li>
          <span className="align-items-center justify-content-end d-flex rounded border border-3 border-secondary mx-2 px-2">
            <li className="text-light fw-bold">
              {firstDate.slice(0, 4)}
            </li>
            {endDate > firstDate && (
              <li className="text-warning fw-bold">
                -{endDate.slice(0, 4)}
              </li>
            )}
          </span>

          <span className="d-flex gap-2 justify-content-end ">
            {runtime && <small className="mx-2">{runtime} min</small>}
            <small className="d-flex gap-1 align-items-base">
              <FontAwesomeIcon className="text-warning" icon={faThumbsUp} />
              {Math.round(popularity) / 10}
            </small>
          </span>
        </div>
        <div className="mt-3 text-start">
            <h5 className="mb-3 text-warning text-center">{tagLine}</h5>
            <p className="text-start" style={lineTextStyle}>{overView}</p>
        </div>
      </div>
    </div>
  );
};
