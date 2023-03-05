import { useState } from "react";
import { Button } from "react-bootstrap";
import { TopRatedShows } from "./topRateShows";
export const TopTV = () => {
  const [genre, setGenre] = useState(null);

  return (
    <div className="top-rated-tv z-23">
      <div className="container py-5">
        <small className="text-warning text-uppercase">online streaming</small>
        <h2 className="text-capitalize text-light fs-1 fw-bold">
          world best TV shows
        </h2>
        <div className="my-5">
          <ul>
            <Button
              className="rounded shadow mx-2 text-uppercase text-light bg-transparent"
              value={null}
              onClick={(e) => setGenre(e.currentTarget.value)}
            >
              all movies
            </Button>

            <Button
              className="rounded shadow mx-2 text-uppercase text-light bg-transparent"
              value={10759}
              onClick={(e) => setGenre(e.currentTarget.value)}
            >
              action
            </Button>

            <Button
              className="rounded shadow mx-2 text-uppercase text-light bg-transparent"
              value={35}
              onClick={(e) => setGenre(e.currentTarget.value)}
            >
              comedy
            </Button>

            <Button
              className="rounded shadow mx-2 text-uppercase text-light bg-transparent"
              value={10762}
              onClick={(e) => setGenre(e.currentTarget.value)}
            >
              kids
            </Button>

            <Button
              className="rounded shadow mx-2 text-uppercase text-light bg-transparent"
              value={10765}
              onClick={(e) => setGenre(e.currentTarget.value)}
            >
              sci-fi
            </Button>
          </ul>
        </div>
        <div className="row row-cols-3  row-cols-md-4 row-cols-xl-4 row-cols-xxl-5 ">
          <TopRatedShows genre_id={genre} />
        </div>
      </div>
    </div>
  );
};
