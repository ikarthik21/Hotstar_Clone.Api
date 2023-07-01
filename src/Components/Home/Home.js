import React from 'react'
import styled from "styled-components";
import ImageSilder from './ImageSilder';
import Movies from './Movies';
import Recommandations from '../Genres/Recommandations';
import WebSeries from '../Genres/WebSeries';
import Musicalhits from '../Genres/Musicalhits';
import Action from '../Genres/Action';
import Retro from '../Genres/Retro';
import Comedy from '../Genres/Comedy';

const Home = (props) => {
  const { movies } = props;

  return (
    <>
      <Container>
        <ImageSilder />
        <Movies />
        <Action movies={movies} />
        <Comedy movies={movies} />
        <WebSeries movies={movies} />
        <Musicalhits movies={movies} />
        <Recommandations movies={movies} />
        <Retro movies={movies} />
      </Container>
    </>
  )
}

const Container = styled.main`
  position: relative;
  font-family: 'Poppins', sans-serif;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  overflow-y: hidden;
  z-index:0;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
  @media (min-width: 200px) and (max-width: 480px) {  
    padding: 0px 5px;
  }
  font-family: 'Fredoka One', cursive;
  letter-spacing : 2px;
`
export default Home;