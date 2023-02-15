//     useEffect(() => {

  // axios.get(`${url}49521?api_key=${API_KEY}`)
  //       .then(res => {
  //         console.log(res.data);
  //         setContent(res.data);
  //       }).catch(res => console.log(res.data))

  //     }, [])

  // clickHandler = (event) => {
  //     if (event.keyCode === 13) {
  //        const query = event.target.value;
  //        const url = 'https://api.themoviedb.org/3/search/movie';
  //        const API_KEY = '22d11a2dc2e969e44e86767ccc60fac8';
  // axios.get(`${url}?api_key=${API_KEY}&query=${query}`)
  //   .then(res => {
  //     const title = res.data['results'][0]['title'];
  //     this.setState({ title });

  //     const popularity = res.data['results'][0]['popularity']
  //     this.setState({ popularity });

  //     const poster = res.data['results'][0]['poster_path']//Problem
  //     this.setState({ poster });//Problem

  //   })
  //     }
  // }
  
  // const [preview, setPreview] = useState();
  // const [previewTV, setPreviewTV] = useState();
  // useEffect(() => {
  //   const movieURL = `https://api.themoviedb.org/3/movie/`;
  //   const tvURL = `https://api.themoviedb.org/3/tv/`;
  //   const API_KEY = "22d11a2dc2e969e44e86767ccc60fac8";

  //   axios
  //     .get(`${movieURL}550?api_key=${API_KEY}`)
  //     .then((res) => {
  //       //  console.log(responses)
  //       // setPreview.push(res.data);
  //       setPreview(res.data);
  //       console.log(preview);
  //     })
  //     .catch((res) => console.log(res));
  //   axios
  //     .get(`${tvURL}100088?api_key=${API_KEY}`)
  //     .then((res) => {
  //       //  console.log(responses)
  //       // setPreview.push(res.data);
  //       setPreviewTV(res.data);
  //       console.log(preview);
  //     })
  //     .catch((res) => console.log(res));
  // }, []);


  //
   // const movieURLs = [
    //   `${movieURL}?api_key=${API_KEY}`,
    //   `${movieURL}?api_key=${API_KEY}&page=2`,
    // ];
    
    // const requests = movieURLs.map((url) => axios.get(url));
    // axios
    // .all(requests)
    // .then((responses) => {
      //   responses.forEach((res) => {
        //     //  console.log(responses)
        //     //   upcoming.push(res.data);
        //     setUpcomAction((upcomAction) => [...upcomAction, res.data['results']]);
        //     //   console.log("upcoming", upcoming);
        //   });
        // })
        // .catch((res) => console.log(res));
        
        // const movieURLs = [
        //   `${movieURL}?api_key=${API_KEY}`,
        //   `${movieURL}?api_key=${API_KEY}&page=2`,
        // ];
      
        // const requests = movieURLs.map((url) => axios.get(url));
      
        // axios
        // .all(requests)
        // .then((responses) => {
        //   responses.forEach((res) => {
        //     //  console.log(responses)
        //     //   upcoming.push(res.data);
        //     setUpcomAction((upcomAction) => [...upcomAction, res.data['results']]);
        //     //   console.log("upcoming", upcoming);
        //   });
        // })
        // .catch((res) => console.log(res));