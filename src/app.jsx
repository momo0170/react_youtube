import { Routes, Route, useNavigate } from 'react-router-dom';
import Video from './routes/video';
import VideoInfo from './routes/videoInfo';
import Navbar from './components/navbar';
import { useRef, useState, useEffect } from 'react';

function App() {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('맥북');
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setKeyword(inputRef.current.value);
    inputRef.current.value = '';
    navigate(`${process.env.PUBLIC_URL}/`);
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
        setVideo(result.items);
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, [keyword]);

  return (
    <>
      <Navbar onSubmit={onSubmit} inputRef={inputRef} />
      <Routes>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          element={<Video video={video} loading={loading} />}
        />
        <Route
          path="/video/:videoID"
          element={<VideoInfo video={video} loading={loading} />}
          loading={loading}
        />
      </Routes>
    </>
  );
}

export default App;
