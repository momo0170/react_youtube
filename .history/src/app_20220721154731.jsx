import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import VideoInfo from './routes/videoInfo';
import Navbar from './components/navbar';
import { useRef, useState, useEffect } from 'react';

function App() {
  const inputRef = useRef();
  const [keyword, setKeyword] = useState('맥북');
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setKeyword(inputRef.current.value);
    inputRef.current.value = '';
    <VideoInfo />;
  };

  // keyword가 변경될 때마다 실행
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${keyword}&key=AIzaSyDuHpbqM5TukVX_46jz6_ii0gus5XQxmqY`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(keyword);
        setVideo(result.items);
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, [keyword]);

  console.log('This is app');
  console.log(video);
  return (
    <BrowserRouter>
      <Navbar onSubmit={onSubmit} inputRef={inputRef} />
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home video={video} loading={loading} />}
        />
        <Route
          path="/video/:videoID"
          element={<VideoInfo video={video} loading={loading} />}
          loading={loading}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
