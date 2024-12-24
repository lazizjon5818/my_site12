import { useQuery } from "@tanstack/react-query";
import { request } from "@/api";
import React, { memo, useState } from "react";
import MovieGridItem from "@/components/movies/MovieGridItem";
import { Pagination, CircularProgress } from "@mui/material";
import Genres from "../Genres/Genres";

const fetchMovies = async ({ queryKey }) => {
  const [, page, selGenres] = queryKey;
  const { data } = await request("/discover/movie", {
    params: {
      page: page,
      with_genres: selGenres,
    },
  });
  return data;
};

const fetchGenres = async () => {
  const { data } = await request("/genre/movie/list");
  return data.genres;
};

const Latest = () => {
  const [page, setPage] = useState(1);
  const [selGenres, setSelGenres] = useState([]);

  const { data: genres, isLoading: genresLoading, error: genresError } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const {
    data: movies,
    isLoading: moviesLoading,
    isFetching,
    error: moviesError,
  } = useQuery({
    queryKey: ["movies", page, selGenres.join(",")], 
    queryFn: fetchMovies,
    keepPreviousData: true,
  });

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (genresError || moviesError) {
    return <div className="text-center text-red-500">Failed to load data. Try again later.</div>;
  }

  return (
    <div className="container">
      <div>
        {genresLoading ? (
          <div className="flex justify-center items-center h-32">
            <CircularProgress />
          </div>
        ) : (
          <Genres genres={genres} selGenres={selGenres} setSelGenres={setSelGenres} />
        )}
      </div>

      {moviesLoading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : movies?.results?.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <p>No movies found for the selected genres.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies?.results?.map((item, index) => (
              <div key={index} className="rounded-xl">
                <MovieGridItem {...item} />
              </div>
            ))}
          </div>
          <div className="flex justify-center py-6">
            <Pagination
              page={page}
              count={movies?.total_pages <= 500 ? movies?.total_pages : 500}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(Latest);
