import axios from "axios";
import { useState, useEffect } from "react";
import { Title } from "./title";
export const UpcomingTV = () => {
    const [bestTV, setBestTV] = useState([]);
    const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";

    useEffect(() => {
        const tvURL = `https://api.themoviedb.org/3/tv/`;
    const tvURLs = [
      `${tvURL}100088?api_key=${API_KEY}`,
      `${tvURL}1396?api_key=${API_KEY}`,
      `${tvURL}94605?api_key=${API_KEY}`,
      `${tvURL}119051?api_key=${API_KEY}`,
      `${tvURL}66732?api_key=${API_KEY}`,
      `${tvURL}207863?api_key=${API_KEY}`,
    ];

    const tvRequests = tvURLs.map((url) => axios.get(url));

    axios
      .all(tvRequests)
      .then((responses) => {
        responses.forEach((res) => {
          //  console.log(responses)
          //   bestTV.push(res.data);
          setBestTV((bestTV) => [...bestTV, res.data]);
          // console.log(res.data);
        });
      })
      .catch((res) => console.log(res));

    },[])

    return(
        <>
        
            {bestTV.map((tv) => (
            <Title
            key={tv.id}
            id={tv.id}
            posterPath={tv.poster_path}
            name={tv.name}
            firstDate={tv.first_air_date}
            endDate={tv.last_air_date}
            popularity={tv.popularity}
            homePath={tv.homepage}
          />
          ))}
        </>
    )
}