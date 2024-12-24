import React from "react";

const Genres = ({ genres, selGenres, setSelGenres }) => {
  const toggleGenre = (id) => {
    if (selGenres.includes(id)) {
      setSelGenres(selGenres.filter((genreId) => genreId !== id));
    } else {
      setSelGenres([...selGenres, id]);
    }
  };

  return (
    <div className="flex gap-4 overflow-x-auto py-2 px-4 w-full">
      {genres?.map((genre, index) => (
        <span
          key={index}
          onClick={() => toggleGenre(genre.id)}
          className={`whitespace-nowrap p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
            selGenres.includes(genre.id)
              ? "bg-blue-500 text-white shadow-lg transform scale-105"
              : "bg-slate-200 text-black hover:bg-slate-300"
          }`}
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default Genres;
