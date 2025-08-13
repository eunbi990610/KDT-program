import React, {useState, useEffect} from "react";
import axios from "../api/axios";
import requests from '../api/requests'


export default function Banner(){
    // 영화 데이터 넣을 변수 
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
      fetchData();
    },[]);

    const fetchData = async () => {
        // 현재 상영중인 여러 영화 정보 가져오기
        // const request = await axios.get(requests);
        const request = await axios.get(requests.fetchNowPlaying);
        //axios.get() : 비동기 함수 / 바로 값을 반환하지 않고, 나중에 결과를 준다. 
        console.log(request);

        // 여러 영화 중 영화 하나의 id를 가져오기
        const movieId = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;
        console.log('movieID', movieId);
        /*
        request : 전체 응답 결과
        request.data : 서버가 보낸 실제 json 본문
        request.data.results : 응답 데이터의 배열(json의 일부 필드) */

        //특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
        const {data : movieDetail} = await axios.get(`movie/${movieId}`,{
            params: {append_to_response: "videos"}
            // 쿼리파라미터 (GET요청 처럼 URL맨뒤에 ?append_to_response=videos 이렇게 표시됨 )
            /*
             {data : movieDetail}
             data = 응답받은 데이터 중에서 data필드
             data를 movieDetail 변수에 넣겠다. 
             <구조분해할당 >
              */
        })
        setMovie(movieDetail);

    }
        
     // 영화 설명칸 100자 이상시 ...으로 연결
    const truncate = (str, n)=>{
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    console.log('movie',movie);
  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button className="banner__button info">More Information</button>
          </div>

          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.65;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
