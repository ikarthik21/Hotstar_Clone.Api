import React from 'react'
import styled from "styled-components";
import ImageSilder from './ImageSilder';
import Movies from './Movies';
import Recommandations from '../Movie_Genres/Recommandations';
import WebSeries from '../Movie_Genres/WebSeries';
import Musicalhits from '../Movie_Genres/Musicalhits';
import Action from '../Movie_Genres/Action';
import Retro from '../Movie_Genres/Retro';
import Comedy from '../Movie_Genres/Comedy';

const Home = () => {


  return (
    <div>
   
      <Container>
        <ImageSilder />
        <Movies />
        <Action />
        <Comedy />
        <WebSeries />
        <Musicalhits />
        <Recommandations />
        <Retro />
      </Container>
    </div>
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