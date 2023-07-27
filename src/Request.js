const key ="86354a441324897a92e0d7d3fb6c315a";

const request ={
    requestPopular:`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    // requestTopRated:`http://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestTopRated:`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    // requestHorror:`http://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=hprrpr&page=1$include_adult=false`,
    requestUpcoming:`http://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
};

export default request;