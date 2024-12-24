import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const fetchMovies = async (query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${import.meta.env.VITE_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();
  return data.results;
};

const Search = () => {
  const [query, setQuery] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchMovies", query], 
    queryFn: () => fetchMovies(query),
    enabled: query.length > 2,
  });

  return (
    <div className="p-6 text-center container ">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-3/5 p-3 text-lg rounded-md border border-gray-300 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isLoading && <p className="text-xl">Loading...</p>}
      {error && <p className="text-red-500 text-xl">Error: {error.message}</p>}
      
      <div className="flex flex-wrap justify-center">
        {data &&
          data.map((movie) => (
            <div
              key={movie.id}
              className="w-40 m-4 text-center transition-transform transform hover:scale-105"
            >
              <Link to={`/detail/${movie.id}`}> 
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-lg shadow-md"
                />
                <h3 className="mt-3 text-lg font-semibold">{movie.title}</h3>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
