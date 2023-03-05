import _ from "lodash";
import { useState, useEffect } from "react";
import { getPopularTVs } from "../SERVICES/tmdbService";
// import { Title } from "./title";
import { TitleSM } from '../titles/title-sm';
export const TrendingTV = ({aos}) => {
    const [trendTV, setTrendTV] = useState([]);        
    useEffect(() => {
      getPopularTVs()
        .then((responses) => {
          const store = responses.data.results;
          _.forEach(_.take(_.filter(_.orderBy(store, 'vote_average', 'desc'), {original_language: 'en'}), 12), (res) => {
            //  console.log(responses)
            //   bestTV.push(res.data);
            setTrendTV((trendTV) => [...trendTV, res]);
          });
        })
        .catch((res) => console.log(res));
      getPopularTVs(2)
        .then((responses) => {
          const store = responses.data.results;
          _.forEach(_.take(_.filter(store, {original_language: 'en'}), 12), (res) => {
            //  console.log(responses)
            //   trendTV.push(res.data);
            setTrendTV((trendTV) => [...trendTV, res]);
          });
        })
        .catch((res) => console.log(res));
     

    },[])


    return(
        <>
        
            {_.take(trendTV, 6).map((tv) => (
              <div className="pb-3" key={tv.id}>
                <TitleSM
                type={'tv'}                
                id={tv.id}
                posterPath={tv.poster_path}
                name={tv.name}
                firstDate={tv.first_air_date}
                endDate={tv.last_air_date}
                popularity={tv.popularity}
                vote={tv.vote_average}
                aos={aos}
                // homePath={tv.backdrop_path}
              />


              </div>
          ))}
        </>
    )
}