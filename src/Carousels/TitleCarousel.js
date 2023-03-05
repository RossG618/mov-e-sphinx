import React from 'react'
import { GenreCarousel } from '../movies/Genres/genreCarousel'
import { GenreTvCarousel } from './../TV/genreTvCarousel';
export default function TitleCarousel({aos, caraName, id, compName}) {
    // const [genre, setGenre] = useState(null);
  return (
    <div className=" z-23 mx-5 w-75 mx-auto" data-aos={aos}>
          <div className="justify-content-between d-flex mt-5 pt-5">
            <div className="text-start">
              <h6 className="text-uppercase fw-bold text-warning ">
                4k streaming
              </h6>
              <h2 className="text-light text-capitalize">{caraName}</h2>
            </div>
            {/* <ul className=" gap-3">
              <button className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark"  value={28} onClick={e => setGenre(e.currentTarget.value)}>
                action
              </button>
              <button className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark"  value={35} onClick={e => setGenre(e.currentTarget.value)}>
                comedy
              </button>
              <button className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark"  value={878} onClick={e => setGenre(e.currentTarget.value)}>
                sci-fi
              </button>
              <button className="btn mx-2 rounded-pill border border-2 text-capitalize text-bg-dark"  value={27} onClick={e => setGenre(e.currentTarget.value)}>
                horror
              </button>
            </ul> */}
          </div>
         { compName === 'movies' ? <GenreCarousel genre_id={id} />
         :
          <GenreTvCarousel genre_id={id} />
        }
        </div>
  )
}
