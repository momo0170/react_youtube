import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VideoInfo() {
  const { videoID } = useParams();
  const [] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyDuHpbqM5TukVX_46jz6_ii0gus5XQxmqY`
    )
      .then((response) => response.json())
      .then((result) => console.log(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return <h1>VideoInfo</h1>;
}

export default VideoInfo;
