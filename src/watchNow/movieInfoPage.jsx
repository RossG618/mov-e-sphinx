import './movie.css';
// import { PreviewNewMovie } from './../whatsNew/previewNewMovies';
import { UpcomingGenre } from './../whatsNew/upcomingActionMovies';
import { useParams } from 'react-router-dom';
import { MovieShowcase } from '../movies/movieShowcase';
import { RelatedMovies } from './RelatedMovies';
import { UpcomingMovies } from '../movies/upcomingMovies';
import { TopMovies } from '../movies/TopMovies';
// import { MovieReviews } from './MovieReviews';
export const Movie = () => {
  
  const {id} = useParams();
  return (
    <div className='pt-5' style={{background: '#181f2a'}}>
      <div className=" mt-5 container py-2 shadow rounded">
      
      <MovieShowcase movieID={id}/>
      </div>
      {/* REVIEWS */}
      {/* <MovieReviews movieID={id}/> */}

      <h3 className='text-warning text-capitalize fw-bold mt-5'>related movies</h3>
      <div className=" mt-5 row row-cols-2 row-cols-md-3 row-cols-xl-4  row-cols-xxl-6  container mx-auto " data-aos="zoom-in">
      <RelatedMovies movieID={id}/>
      </div>
      {console.log('id', id)}

      <h3 className='text-warning text-capitalize fw-bold mt-5'>new / upcoming</h3>
      <div className=" mt-5 row row-cols-2 row-cols-md-3 row-cols-xl-4  row-cols-xxl-6  container mx-auto " data-aos="zoom-in-up">
      <UpcomingMovies/>
      </div>
      <h3 className='text-warning text-capitalize fw-bold mt-5'>Top Rated</h3>
      <TopMovies bg={'#181f2a'}/>
      {/* <div className=" mt-5 row row-cols-2 row-cols-md-3 row-cols-xl-4  row-cols-xxl-6  container mx-auto justify-content-center">
      
      </div> */}

      <h3 className='text-warning text-capitalize fw-bold mt-5'>previously watched</h3>
      <div className="row mt-5 container mx-auto " data-aos="zoom-in-up">
      <UpcomingGenre />

      </div>
    </div>
  );
};
