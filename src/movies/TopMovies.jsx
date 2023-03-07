import { useState } from "react";
import { TopRatedMovies } from "./topRateMovies";
import { Button } from "react-bootstrap";
export function TopMovies({favs, list}) {
  const [genre, setGenre] = useState(null);
  return (
<div className="top-rated " >
        <div className="container py-5 z-23">
          <small className="text-warning text-uppercase">
            online streaming
          </small>
          <h2 className="text-capitalize text-light fs-1 fw-bold">
            top rated movies
          </h2>
          <div className="my-5">
            <ul>
              
                <Button className="rounded shadow mx-2 text-uppercase text-light bg-transparent" value={null} onClick={e => setGenre(e.currentTarget.value)}>all movies</Button>
              
              
                <Button className="rounded shadow mx-2 text-uppercase text-light bg-transparent" value={28} onClick={e => setGenre(e.currentTarget.value)}>action</Button>
              
              
                <Button className="rounded shadow mx-2 text-uppercase text-light bg-transparent" value={35} onClick={e => setGenre(e.currentTarget.value)}>comedy</Button>
              
              
                <Button className="rounded shadow mx-2 text-uppercase text-light bg-transparent" value={27} onClick={e => setGenre(e.currentTarget.value)}>horror</Button>
              
              
                <Button className="rounded shadow mx-2 text-uppercase text-light bg-transparent" value={878} onClick={e => setGenre(e.currentTarget.value)}>sci-fi</Button>
              
            </ul>
          </div>
          <div className=" row row-cols-3  row-cols-md-4 row-cols-xl-4 row-cols-xxl-5">
            <TopRatedMovies genre_id={genre} favs={favs} list={list} aos={'zoom-in'}/>
          </div>
        </div>
      </div>

  )
}
