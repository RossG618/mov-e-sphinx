import axios from "axios";
import { useState, useEffect } from "react";
import { TitleExpand } from "./title-expand";

export const PreviewNewTV = () => {
    //
    const [preview, setPreview] = useState([]);


  useEffect(() => {
    const tvURL = `https://api.themoviedb.org/3/tv/`;
    const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";
    axios
      .get(`${tvURL}100088?api_key=${API_KEY}`)
      .then((res) => {
        //  console.log(responses)
        // setPreview.push(res.data);
        setPreview(res.data);
        console.log(preview);
      })
      .catch((res) => console.log(res));
  }, []);
  return (
    <>
   <TitleExpand
              id={preview.id}
              posterPath={preview.poster_path}
              name={preview.name}
              firstDate={preview.first_air_date}
              runtime={preview.run_time}
              popularity={preview.popularity}
              homePath={preview.homepage}
              tagLine={preview.tagline}
              overView={preview.overview}
            />
    </>
  );
};
