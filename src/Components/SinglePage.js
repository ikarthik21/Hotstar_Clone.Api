import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Recommandations from "./Movie_Genres/Recommandations";




const SinglePage = (props) => {

  const [Video, setVideo] = useState({});

  const fetchVideo = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${Data.movie_trailer}&key=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setVideo(data.items[0].snippet);
  };

  const params = useParams();
  const [Data, setData] = useState({});
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(!showIframe);
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch('https://movieapi-kk.onrender.com/movies');
        const data = await response.json();
        const movie = data.find((movie) => movie[params.movie_id]?.movie_id === params.movie_id);
        if (movie) {
          setData(movie[params.movie_id]);
        }
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchVideo();
    fetchMovieData();
  }, [params.movie_id]);




  return (
    <Container>

      <Background>
        <Wrapper>
          <ContentBox>
            <h1>{Data.movie_name} - {Data.movie_release}</h1>
            <ContentDetails>
              <p>{Data.movie_genre}</p>
              <p></p>
              <p>{Data.movie_duration}</p>
              <p>Directed by {Data.movie_director}</p>
            </ContentDetails>
            <NoSpaceBox>
              <p>{Data.movie_cast}</p>
              <p>
                {Data.movie_desc}
              </p>
            </NoSpaceBox>
            <button onClick={handleClick} >Trailer</button>
          </ContentBox>
          <Imagebox>
            <img src={`${Data.movie_backimg}`} alt="" />
          </Imagebox>
        </Wrapper>
      </Background>

      <TrailerBox>

        <div style={{ maxHeight: showIframe ? `89vh` : "0", overflow: "hidden", transition: "max-height 0.5s ease-out", display: "flex", alignItems: "center", justifyContent: "center" }}>



          <iframe
            title={Video.title}
            src={`https://www.youtube.com/embed/${Data.movie_trailer}`}

            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen

          />
        </div>
      </TrailerBox>
      {showIframe ? (<div onClick={handleClick} > <img src="/images/down_arrow.png" alt="" style={{
        cursor
          : "pointer"
      }} /></div>) : null}


      <Recommandations />

    </Container>

  );
};


const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div` 

`;

const Wrapper = styled.div`
       font-family: 'Poppins', sans-serif;
       margin-top: 20px;
       display:flex;
       align-items :center;
       justify-content: center;
       border-radius: 10px;
       background-image: linear-gradient(to right,#0b0d13,#253b6df2);
       @media (min-width: 200px )and (max-width : 1200px){
        flex-direction:column-reverse;
   }
`;



const Imagebox = styled.div`
     img{
      height: 61vh;
      object-fit: center;
      width: 45vw;
      border-radius : 5px;
      opacity:0.85;
      z-index: -3px;
    }
      display:flex;
      align-items :center;
      justify-content: center;
     @media (min-width: 200px )and (max-width : 500px){
        
         img{
           height: 40vh;
            width: 90.3vw;
           }
     }
      
      @media (min-width: 500px )and (max-width : 800px){        
          img{
          height: 40vh;
          width: 91vw;
        }
  }
     @media (min-width: 800px )and (max-width : 1200px){
      img{
        height: 47vh;
         width: 92vw;
        }

  }
`


const ContentBox = styled.div`
// border: 5px solid  blue;
  display:flex;
  flex-direction : column;
  justify-content:center;
    padding: 10px 20px;
 p{
  line-height:25px;
  display :flex;
  align-items:center;
  justify-content:center;
  
}

 
button{
  background-color: #0f9dff;
  max-width: 100px;
  padding: 15px 10px;
  max-height: auto;
  cursor: pointer;
  color:white;

  border:none;
  border-radius: 10px;
  font-family: monospace;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover {
    background-color: #fefefe00;
    color: #0f9dff;
    font-weight: bolder;
    border: 3px solid #0f9dff;
  }
}

`


const ContentDetails = styled.div`
 display :flex;
p{
  margin-right : 15px;
}

flex-wrap:wrap;


}


`


const NoSpaceBox = styled.div`
  line-height: 5px;
  display :flex;
  flex-wrap:wrap;
  `


const TrailerBox = styled.div`
 diplay:flex;
 align-items:center;
 justify-content:center;

 iframe{
  margin-top: 15px;
  width: 74vw;
    height: 89vh;
    objectFit: fill;
    z-index: 0;
 } 
 
 @media (min-width: 800px )and (max-width : 1200px){
  iframe{
    width: 75vw;
      height:85vh;
      objectFit: fill;
   }
  }

   @media (min-width: 190px )and (max-width : 500px){
    iframe{
      width:  100vw;
        height: 45vh;
        objectFit: fill;
     }
}

 
`

export default SinglePage;