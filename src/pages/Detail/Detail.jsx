import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { request } from "@/api";
// import Movies from "../../components/movies/Movies";
import { RiCoupon3Line } from "react-icons/ri"

function Detail() {
  const location = useLocation();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [activeButton, setActiveButton] = useState(1);

  console.log("Movie ID:", id);

  useEffect(() => {
    if (id) {
      
      request(`/movie/${id}`) 
        .then((res) => {
          setMovieDetails(res.data);
          console.log("API Response:", res);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
        });
    }
  }, [id]); 

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const genres = movieDetails.genres?.map((genre) => genre.name).join(", ");
  const releaseDate = new Date(movieDetails.release_date).toLocaleDateString();
  const duration = movieDetails.runtime ? `${Math.floor(movieDetails.runtime / 60)} hours ${movieDetails.runtime % 60} minutes` : "Unknown";
  const revenue = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(movieDetails.revenue);
  const budget = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(movieDetails.budget);
  const popularity = new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 1 }).format(movieDetails.popularity);
  const voteCount = new Intl.NumberFormat("en-US").format(movieDetails.vote_count);
  const voteAverage = new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 1 }).format(movieDetails.vote_average);
  const director = movieDetails.credits?.crew?.find((crew) => crew.job === "Director")?.name;
  const cast = movieDetails.credits?.cast?.slice(0, 10)?.map((castMember) => castMember.name).join(", ");
  const overview = movieDetails.overview;

  const backdropPath = movieDetails.backdrop_path;
  const title = movieDetails.title;
  const posterPath = movieDetails.poster_path;

  const releaseYear = releaseDate.split(", ")[1];

  const productionCompanies = movieDetails.production_companies?.slice(0, 5)?.map((company) => company.name).join(", ");
  const productionCountries = movieDetails.production_countries?.slice(0, 5)?.map((country) => country.name).join(", ");
  const spokenLanguages = movieDetails.spoken_languages?.map((language) => language.name).join(", ");
  const tagline = movieDetails.tagline;
  const imdbId = movieDetails.imdb_id;
  const status = movieDetails.status;
  const videos = movieDetails.videos?.results;
  const similarMovies = movieDetails.similar?.results;
  const recommendations = movieDetails.recommendations?.results;
  const similarMoviesTitle = similarMovies?.map((movie) => movie.title).join(", ");
  const recommendationsTitle = recommendations?.map((movie) => movie.title).join(", ");
  const similarMoviesOverview = similarMovies?.map((movie) => movie.overview).join(", ");
  const recommendationsOverview = recommendations?.map((movie) => movie.overview).join(", ");
  const similarMoviesPoster = similarMovies?.map((movie) => `${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`).join(", ");
  const recommendationsPoster = recommendations?.map((movie) => `${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`).join(", ");
  const similarMoviesBackdrop = similarMovies?.map((movie) => `${import.meta.env.VITE_IMAGE_URL}${movie.backdrop_path}`).join(", ");
  const recommendationsBackdrop = recommendations?.map((movie) => `${import.meta.env.VITE_IMAGE_URL}${movie.backdrop_path}`).join(", ");
  const similarMoviesReleaseDate = similarMovies?.map((movie) => new Date(movie.release_date).toLocaleDateString()).join(", ");
  const recommendationsReleaseDate = recommendations?.map((movie) => new Date(movie.release_date).toLocaleDateString()).join(", ");
  const similarMoviesVoteAverage = similarMovies?.map((movie) => new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 1 }).format(movie.vote_average)).join(", ");
  const recommendationsVoteAverage = recommendations?.map((movie) => new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 1 }).format(movie.vote_average)).join(", ");
  const similarMoviesTagline = similarMovies?.map((movie) => movie.tagline).join(", ");
  const similarMoviesImdbId = similarMovies?.map((movie) => movie.imdb_id).join(", ");
  const similarMoviesStatus = similarMovies?.map((movie) => movie.status).join(", ");


  console.log(genres)

//   console.log(movieDetails,duration,popularity,voteCount,voteAverage,director,cast,posterPath);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="w-full bg-black flex items-center justify-center">
      <div className="container flex flex-col items-center max-w-4xl mx-auto p-6 text-center">
        <div className="relative">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${backdropPath}`}
            alt={title || "No Image"}
            className="h-[640px] rounded-lg object-cover"
            style={{ maxWidth: "none", maxHeight: "none" }}
          />
          <div className="absolute bottom-6 left-4 w-full text-center h-[250p] gap-4">
            <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="text-3xl font-medium text-white">{title}</h1>
                <p className="text-lg text-white">{releaseDate}</p>
                <button className="h-[60px] w-[350px] bg-red-700 rounded-lg opacity-90 flex justify-center items-center gap-3">
                <RiCoupon3Line className="text-[20px] text-white " />
                <span className="text-2xl text-white">Buy Ticket</span>
                </button>
            </div>
          </div>
        </div>

        {/* <p className="mt-4 text-lg text-white">
          <strong>Original Language:</strong> {movieDetails.original_language?.toUpperCase()}
        </p> */}
        <div className="h-[90px] flex justify-center items-center pt-4 px-3 ">
            <FontAwesomeIcon icon={faImdb} size="3x" color="orange" className="w-[100px] fa-fw p-4" /> 
            <p className="text-lg text-white">
             {movieDetails.vote_average}
            </p>
        </div>

        <div className="h-[1400px] w-[500px]  rounded-md">
          <div className="flex justify-center items-center space-x-4 mt-4 ">
            <button
              className={`p-3 rounded-lg text-white w-[48%] h-[60px] ${
                activeButton === 1 ? "bg-[#1D1D1D] text-red-600" : "bg-[#111111]"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              <span>Ticket</span>
            </button>
            <button
              className={`p-3 rounded-lg text-white w-[48%] h-[60px] ${
                activeButton === 2 ? "bg-[#1D1D1D] text-red-600" : "bg-[#111111]"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              <span>Film</span>
            </button>
            </div >
            <div className="ml-4 mr-4">
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Budget:</h3>
                    <p className="text-lg ">{budget}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Revenue:</h3>
                    <p className="text-lg ">{revenue}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Release Date:</h3>
                    <p className="text-lg text-end">{releaseDate}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Genres:</h3>
                    <ul className="text-lg text-end flex gap-1">
                    {movieDetails.genres?.map((genre) => (
                        <li key={genre.id}>{genre.name},</li>
                    ))}
                    </ul>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Duration:</h3>
                    <p className="text-lg text-end">{duration}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Popularity:</h3>
                    <p className="text-lg text-end">{popularity}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Vote Count:</h3>
                    <p className="text-lg text-end">{voteCount}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Vote Average:</h3>
                    <p className="text-lg text-end">{voteAverage}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Director:</h3>
                    <p className="text-lg text-end">{director}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Cast:</h3>
                    <ul className="text-lg text-end flex gap-1">
                    {cast?.map((castMember) => (
                        <li key={castMember}>{castMember},</li>
                    ))}
                    </ul>
                </div>
                <hr className="mt-12 mb-12" />
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Production Companies:</h3>
                    <p className="text-lg text-end">{productionCompanies}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Production Countries:</h3>
                    <p className="text-lg text-end">{productionCountries}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Spoken Languages:</h3>
                    <p className="text-lg text-end">{spokenLanguages}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Tagline:</h3>
                    <p className="text-lg text-end">{tagline}</p>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Similar Movies:</h3>
                    <ul className="text-lg text-end flex gap-1">
                    {similarMovies?.map((movie) => (
                        <li key={movie.id}>
                            <a href={`/movie/${movie.id}`}>{movie.title}</a>
                            <span className="text-slate-400 text-xs">({new Intl.NumberFormat("en-US", { style: "percent", minimumFractionDigits: 1 }).format(movie.vote_average)})</span>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="text-slate-400 mt-4 flex gap-3 justify-between">
                    <h3 className="text-xl">Similar Movies Status:</h3>
                    <p className="text-lg text-end">{similarMoviesStatus}</p>
                </div>
                <hr className="mt-12 mb-12" />
                <div className="text-slate-400 mt-4 flex gap-5">
                    <h3 className="text-xl">Overview:</h3>
                    <p className="text-lg text-start">{overview}</p>
                </div>
                <div className="flex items-center justify-center mt-14">
                    <button className="w-[98%] h-[60px] bg-red-700 rounded-lg flex justify-center">
                        <span className="text-slate-400 mt-4 flex">
                            Buy Ticket
                        </span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
