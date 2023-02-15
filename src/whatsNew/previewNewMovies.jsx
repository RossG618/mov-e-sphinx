import { useState } from "react";
import { MovieShowcase } from "./movieShowcase";

export const PreviewNewMovie = ({ movieID }) => {
  //
 const [preview] = useState({});
  
  return (
    <>
      {console.log("preview", preview)}
      <MovieShowcase
        id={movieID}
      />
    </>
  );
};
