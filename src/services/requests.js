const API_KEY = "62af6c2ab8242a0b27b55919ee8937f5";

const requests = {
    fetchNowPlaying: `/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}`,
    fetchPopular: `/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    //TV SHOWS
    fetchTopRatedTvShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}>&language=en-US`,
    fetchLatestTvShow: `/tv/latest?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchActionAdventureTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchAnimationTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchCrimeTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchDramaTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchFamilyTvShows: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,

}

export default requests;