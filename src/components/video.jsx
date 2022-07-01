import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/video.module.css';

function Video() {
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=손흥민&key=AIzaSyDuHpbqM5TukVX_46jz6_ii0gus5XQxmqY',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideo(result.items);
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <div className={styles.videos}>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {video.map((item) => (
            <div className={styles.video} key={item.id.videoId}>
              <Link to={`/video/${item.id.videoId}`}>
                <img src={item.snippet.thumbnails.medium.url} />
                <span className={styles.title}>{item.snippet.title}</span>
              </Link>
              {/* <div className={styles.title}>{item.snippet.title}</div> */}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
export default Video;
