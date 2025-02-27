import ky from "ky";

export const useMovieDb = () => {
  const VITE_TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

  const api = ky.extend({
    hooks: {
      beforeRequest: [
        (request) => {
          request.headers.set(
            "Authorization",
            `Bearer ${VITE_TMDB_ACCESS_TOKEN}`
          );
        },
      ],
    },
  });

  const searchUrl = "https://api.themoviedb.org/3/search/";
  type SearchParams = "movie" | "person" | "collection" | "TV" | "keyword"

  const search = async (param: SearchParams = "movie", query: string) => {
    const response = await api.get(`${searchUrl}/${param}`, {
        searchParams: {
            query
        }
    });


    console.log(response);
    return response
  };

  const getUrl = "https://api.themoviedb.org/3/search/";
  const getOne = async (param: SearchParams = "movie", id: number) => {
    const response = await api.get(`${getUrl}/${param}/${id}`)

    console.log(response)
    return response
  };

  return {
    search,
    getOne,
  };
};
