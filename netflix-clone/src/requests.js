const API_KEY = "5ecc73b79478ec517848a64e6e2a6df1";

const requests = [
  {
    title: "Popular Movies",
    url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Popular Series",
    url: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  },
  {
    title: "Family",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  {
    title: "Documentaries",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];
export default requests;
