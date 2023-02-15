import '../watchNow/movie.css';
// import { PreviewNewMovie } from './../whatsNew/previewNewMovies';
import { UpcomingGenre } from '../whatsNew/upcomingActionMovies';
import { useParams } from 'react-router-dom';
import { TvShowcase } from '../whatsNew/tvShowcase';
import { UpcomingTV } from './../upcomingTvShows';
import { TopRatedShows } from '../topRateShows';
export const ShowInfoPage = () => {
  
  const {id} = useParams();
  console.log('hi', id);
  return (
    <div className='pt-5' style={{background: '#181f2a'}}>
      <div className=" mt-5 container py-2 shadow rounded">
      
      <TvShowcase tvID={id}/>
      </div>

      <h3 className='text-warning text-capitalize fw-bold mt-5'>related Shows</h3>
      <div className=" mt-5 row row-cols-2 row-cols-md-3 row-cols-xl-4  row-cols-xxl-6 container mx-auto ">
      <UpcomingTV/>
      </div>

      <h3 className='text-warning text-capitalize fw-bold mt-5'>new / upcoming</h3>
      <div className=" mt-5 row row-cols-2 row-cols-md-3 row-cols-lg-4  row-cols-xxl-5 container mx-auto ">
      <TopRatedShows/>
      </div>

      <h3 className='text-warning text-capitalize fw-bold mt-5'>previously watched</h3>
      <div className="row mt-5 container mx-auto ">
      <UpcomingGenre />

      </div>
    </div>
  );
};
