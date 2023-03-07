import { useEffect, useState } from "react";
import {getMovieReviews } from "../SERVICES/tmdbService";
import _ from "lodash";
export const MovieReviews = ({movieID}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieID)
      .then((responses) => {
        _.forEach(_.take(_.filter(_.orderBy(responses.data.results, 'rating', 'desc'), {original_language: 'en'}), 6), (res) => {
          //   upcoming.push(res.data);
          setReviews((reviews) => [...reviews, res]);
          //   console.log("reviews", reviews);
        });
      })
      .catch((res) => console.log(res));
  }, [movieID]);

  return (
    <>

      {reviews.map((r, index) => (
    <div className=" pb-3" key={r.id}>
        {/* <TitleSM
        type={"movies"}        
        id={m.id}
        posterPath={m.poster_path}
        name={m.title}
        firstDate={m.release_date}
        runtime={m.runtime}
        popularity={m.popularity}
        homePath={m.homepage}
        vote={m.vote_average}

        /> */}
        <div class="feature col z-23">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <img src={r.avatar_path} alt="avatar"/>
          <small>{r.created_at.slice(0,8)}</small>
        </div>
        <h3 class="fs-2">{r.author}</h3>
        <p>{r.content}.</p>
        <a href="/" class="icon-link d-inline-flex align-items-center">
          Call to action
        </a>
      </div>
        </div>
        ))}
    </>
  );
};
