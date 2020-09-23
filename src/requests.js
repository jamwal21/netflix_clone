const API_KEY = "60298ffd3a9f4a9c461a2f19fe75b585";

const requests = {
    fetchTrendig: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=210749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };
  
  export default requests;