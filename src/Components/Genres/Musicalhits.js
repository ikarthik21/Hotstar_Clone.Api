import React from "react";
import { Carousel, Wrapper, settings } from '../Home/SliderDesign';
import { Link } from "react-router-dom";

const Musicalhits = (props) => {
  const { movies } = props;

  return (
    <>
      <h1> Musical Hits</h1>
      <Carousel   {...settings} >
        {
          movies.filter((val, idx) =>
            val.movie_genre.toLowerCase().includes("music")).map((val) => (
              <Link to={"/movie/" + val.movie_id} key={val.movie_id}  >

                <Wrapper key={val.movie_id} >
                  <img src={`${val.movie_img}`} alt="" />
                </Wrapper>
              </Link>
            ))
        }
      </Carousel>

    </>
  )
}

export default Musicalhits;