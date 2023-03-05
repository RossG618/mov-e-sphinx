// import "./home.css";
// import "./whatsNew/whatsNew.css";

// import { TitleSM } from "./titles/title-sm";
// import { useEffect } from "react";
// import { getMovie } from "./SERVICES/tmdbService";
// import { useState } from "react";
// import { TopTV } from "./TV/TopTV";
// import { TopMovies } from "./movies/TopMovies";
// //
// export default function Favorites() {
//   const [favs, setFavs] = useState([]);
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     list.map((movie) => {
//       console.log("favs", list);
//       getMovie(movie)
//         .then((res) => {
//           setFavs((favs) => [...favs, res.data]);
//         })
//         .catch((res) => console.log(res));
//     });
//   }, [list]);
//   return (
//     <div className="overflow-hidden pt-5">
//       <div className="opac-box-recent"></div>
//       <div className="bg-pic-wn-bloodgirl py-5  "></div>
//       <div className="recent d-flex position-relative align-items-center pt-5  justify-content-center full-height">
//         <div className="pt-5 container">
//           <div className="row row-cols-3 row-cols-xl-4  row-cols-xxl-6 mx-auto container">
//             {favs.map((item) => (
//               <div key={item.key}>
//                 <TitleSM
//                   id={item.id}
//                   posterPath={item.poster_path}
//                   name={item.title || item.name}
//                   firstDate={item.release_date || item.first_air_date}
//                   runtime={item.runtime}
//                   popularity={item.popularity}
//                   vote={item.vote_average}
//                   homePath={item.homepage}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <TopMovies favs={setList} list={list} />
//       <TopTV />
//     </div>
//   );
// }
