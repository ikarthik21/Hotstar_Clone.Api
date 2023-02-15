import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchMovie = () => {
  const [Data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [MOVIES, setMovie] = useState([]);
  useEffect(() => {

    fetch(`https://movieapi-kk.onrender.com/movies`)
      .then((res) => res.json())
      .then((json) => {
        const movies = Object.values(json[0]).map(movie => {
          const convertedMovie = {
            movie_id: movie.movie_id,
            movie_genre: movie.movie_genre,
            movie_name: movie.movie_name,
            movie_img: movie.movie_img,
          };
          return convertedMovie;
        });
        setMovie(movies);
      }
      );

    const moviesArray = Object.values(MOVIES);
    setData(moviesArray);


  }, [MOVIES]);



  return (
    <Container>

      <SearchBox>
        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search for a Movie......" />
      </SearchBox>

      <MovieList >
        {Data.filter((movie) => movie.movie_name.toLowerCase().startsWith(search.toLowerCase())).map((movie, index) => (
          <Link to={"/movie/" + movie.movie_id} key={movie.movie_id} >
            <Wrapper key={movie.movie_id}>
              <img src={`${movie.movie_img}`} alt="" />
            </Wrapper>
          </Link>

        ))}
      </MovieList>
    </Container>
  );
};

const Container = styled.main`
position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  overflow-y: hidden;
  z-index:0;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  display:flex;
  margin-top:10px;
  flex-direction:column;
   align-items:center;



`;

const SearchBox = styled.div`
  width: 35vw;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  input:focus {
    outline: none;
  }
 
  input {
    height: 40px;
    font-size: 18px;
    padding: 10px;
    width: 100%;
    border-radius: 50px;
    font-family: 'Kanit', sans-serif;
    font-family: 'Ubuntu', sans-serif;
  }


  
   @media (min-width: 190px )and (max-width : 500px){
    
    width: 55vw;
   }



`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
 
  align-items :center;
   justify-content:center;
`;


export const Wrapper = styled.div`
cursor:pointer;
z-index:0;
border-radius: 6px; 
width: 180px;
padding: 25px 3px;
display:flex;
align-items :center;
justify-content:center;
img {
  inset: 0px;
  height: 200px;
  width: 150px;
  object-fit: center;
  z-index: 1;
  border-radius: 7px;
  top: 0;
  &:hover{
    transition-duration: 0.45s;
    z-index: 5;
    transform : scale(1.28,1.22);   
  }
}
`;



export default SearchMovie;
