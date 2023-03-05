import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../title.css";
import { useState } from "react";
//
export const list = [];
export const Title = ({
  id,
  type,
  posterPath,
  name,
  firstDate,
  endDate,
  runtime,
  popularity,
  homePath,
  setId,
}) => {
  const [hovTitle, setHovTitle] = useState(false);
  const [hovFav, setHovFav] = useState(false);

  const [favIcon, setFavIcon] = useState(false);
  // const boxShadow ={ 
  //   boxShadow: "12px 12px 2000px 150px rgba(0, 0, 0, 1)",
  // };
  const displayN = {display: 'none'};
  const lineTextStyle = {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    LineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  const handleFav = (id) => {
    setFavIcon(!favIcon);
    list.push(id)
    console.log(id)
  };
  return (
    <div
      className="col bg-dark z-23 upcoming_poster-div align-items-center overflow-hidden"
      key={id}
      id={id}
    >
      <span className="position-relative h-100 poster-span"
      onMouseEnter={() => setHovFav(true)}
      onMouseLeave={() => setHovFav(false)}
      
      >

          {/* <div className="opac-box-07" style={{height: '100%'}}>
                </div> */}
                
          {favIcon ? (
            <FontAwesomeIcon
            size="lg"
            className="fav-star text-warning "
            icon={faStar}
            onClick={(id) => handleFav(id)}

              />
              ) : (
                <FontAwesomeIcon
                size="lg"
                className="fav-star text-white"
                icon={faStar}
                onClick={(id) => handleFav(id)}
                style={hovFav ? '' : displayN}

                />
                )}
                
        <a href={homePath}>
          <img
            className="w-100 poster"
            src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
            alt="poster"
            
          />
        </a>
      </span>

     
      <div className="lsStyle-none flex-column d-flex justify-content-center align-items-center text-light">
        <div className="d-flex align-items-center gap-3 px-4">
          <span className="d-flex gap-2 justify-content-end ">
            {/* {runtime && <small className="mx-2">{runtime} min</small>} */}
            <small className="d-flex gap-1 align-items-center ">
              <FontAwesomeIcon className="text-warning" icon={faThumbsUp} />
              {Math.round(popularity / 10, 1) }
            </small>
          </span>

          <small className="text-bg-transparent fw-bold prosto ls-1px text-secondary  py-1">
            HD
          </small>

          <span className="align-items-center">
            <small className="mb-3 text-light fw-light" style={{color: '#aaa'}}>
              {firstDate.slice(0, 4)}
            </small>
            {/* {endDate > firstDate &&
          <small className="mb-3 text-warning fw-bold">-{endDate.slice(0, 4)}</small>
          } */}
          </span>
          
        </div>
        <div className=" text-start p-0 px-3 justify-content-between" >
        <a href={homePath} className="p-0">
            <p
              className="text-light fw-bold text-capitalize mb-2 p-0 title-name "
              onMouseEnter={() => setHovTitle(true)}
              onMouseLeave={() => setHovTitle(false)}
              style={hovTitle ? null : lineTextStyle}
            >
              {name}
            </p>
          </a>
        </div>
        <Link
          to={`/${type}/${id}`}
          onClick={(id) => setId(id)}
          className="rounded btn-info btn text-uppercase border-0 my-2 px-0 w-75"
        >
          <small>

          watch now
          </small>
        </Link>
      </div>
    </div>
  );
};
