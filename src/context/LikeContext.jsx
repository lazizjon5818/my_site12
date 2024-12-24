import React, { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export const useLikedMovies = () => useContext(LikeContext);

export const LikeProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    const storedLikedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    setLikedMovies(storedLikedMovies);
  }, []);

  const addLike = (movie) => {
    const updatedLikedMovies = [...likedMovies, movie];
    setLikedMovies(updatedLikedMovies);
    localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
  };

  const removeLike = (movieId) => {
    const updatedLikedMovies = likedMovies.filter((movie) => movie.id !== movieId);
    setLikedMovies(updatedLikedMovies);
    localStorage.setItem("likedMovies", JSON.stringify(updatedLikedMovies));
  };

  return (
    <LikeContext.Provider value={{ likedMovies, addLike, removeLike }}>
      {children}
    </LikeContext.Provider>
  );
};
