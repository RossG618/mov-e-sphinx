import _ from "lodash";
import { useState, useEffect } from "react";
import { getPopularTVsPage1 } from "./SERVICES/tmdbService";
// import { Title } from "./title";
import { TitleSM } from './titles/title-sm';
export const UpcomingTV = () => {
    const [bestTV, setBestTV] = useState([]);        
    useEffect(() => {
      getPopularTVsPage1()
        .then((responses) => {
          const store = responses.data.results;
          _.forEach(_.take(_.filter(store, {original_language: 'en'}), 6), (res) => {
            //  console.log(responses)
            //   bestTV.push(res.data);
            setBestTV((bestTV) => [...bestTV, res]);
            console.log('hi', res);
          });
        })
        .catch((res) => console.log(res));
     

    },[])


    return(
        <>
        
            {bestTV.map((tv) => (
              <div className="pb-3" key={tv.id}>
                <TitleSM
                type={'tv'}                
                id={tv.id}
                posterPath={tv.poster_path}
                name={tv.name}
                firstDate={tv.first_air_date}
                endDate={tv.last_air_date}
                popularity={tv.popularity}
                homePath={tv.homepage}
              />


              </div>
          ))}
        </>
    )
}