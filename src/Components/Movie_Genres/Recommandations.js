import React, { useEffect, useState } from "react";
import { Carousel, Wrapper, settings } from '../Home_Components/SliderDesign';
import { Link } from "react-router-dom";

const Recommandations = () => {

  const [MOVIES, setMovie] = useState([]);


  useEffect(() => {
    fetch(`https://movieapi-kk.onrender.com/movies`)
      .then((res) => res.json())
      .then((json) => {
        const movies = Object.values(json[0]).map(movie => {
          const convertedMovie = {
            movie_id: movie.movie_id,
            movie_genre: movie.movie_genre,
            movie_img: movie.movie_img,
          };
          return convertedMovie;
        });
        setMovie(movies);
      }
      );
  }, []);








  const genres = ["drama", "romance", "sports"];
  const filteredMovies = MOVIES.filter(val => {
    const movieGenres = val.movie_genre.toLowerCase().split(",");
    return movieGenres.some(genre => genres.includes(genre.trim()));
  });


  return (
    <>
      <h1 id="recommonded">Recommended</h1>
      <Carousel {...settings}>
        {filteredMovies.map(val => (
          <Link to={"/movie/" + val.movie_id} key={val.movie_id}  >

            <Wrapper key={val.movie_id}>
              <img src={`${val.movie_img}`} alt="" />
            </Wrapper>
          </Link>
        ))}
      </Carousel>
    </>
  );
};


export default Recommandations;