import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Wrapper, settings } from '../Home_Components/SliderDesign';



const WebSeries = () => {
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
  return (

    < div id='webseries'>
      <h1 >Web Series</h1>
      <Carousel   {...settings} >
        {
          MOVIES.filter((val, idx) =>
            val.movie_genre.toLowerCase().includes("web series")).map((val) => (
              <Link to={"/movie/" + val.movie_id} key={val.movie_id} >

                <Wrapper key={val.movie_id}>
                  <img src={`${val.movie_img}`} alt="" />
                </Wrapper>
              </Link>
            ))
        }
      </Carousel>

    </div>
  )
}

export default WebSeries;