import './movie.css';
import { PreviewNewMovie } from './../whatsNew/previewNewMovies';
import { UpcomingMovies } from '../upcomingMovies';
import { TopRatedMovies } from '../topRateMovies';
import { UpcomingGenre } from './../whatsNew/upcomingActionMovies';
import { useParams } from 'react-router-dom';
export const Movie = () => {
  
  const {id} = useParams();
  console.log('hi', id);
  return (
    <div className='pt-5' style={{background: '#181f2a'}}>
      <div className=" mt-5 container py-2 shadow rounded">
      
      <PreviewNewMovie movieID={id}/>
      </div>

      <h3 className='text-warning text-capitalize fw-bold mt-5'>related movies</h3>
      <div className=" mt-5 row row-cols-2 row-cols-md-3 row-cols-xl-4  row-cols-xxl-6 container mx-auto ">
      <UpcomingMovies/>
      </div>

      <h3 className='text-warning text-capitalize fw-bold mt-5'>new / upcoming</h3>
      <div className=" mt-5 row row-cols-2 row-cols-md-3 row-cols-lg-4  row-cols-xxl-5 container mx-auto ">
      <TopRatedMovies/>
      </div>

      <h3 className='text-warning text-capitalize fw-bold mt-5'>previously watched</h3>
      <div className="row mt-5 container mx-auto ">
      <UpcomingGenre />

      </div>
    </div>
  );
};
