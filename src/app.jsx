import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import VideoInfo from './routes/videoInfo';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/video/:videoID" element={<VideoInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
