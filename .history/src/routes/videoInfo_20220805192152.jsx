import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import RelatedVIdeos from '../components/relatedVIdeos';
import styles from '../css/videoInfo.module.css';

function VideoInfo({ video, loading }) {
  const { videoID } = useParams();
  const [channel, setChannel] = useState([]);
  const [display, setDisplay] = useState('');
  const [clicked, setClicked] = useState(true);
  const [angle, setAngle] = useState(0);

  const MediaWidth = window.matchMedia('(max-width: 1100px)');
  const onClick = () => {
    if (MediaWidth.matches === true) {
      setClicked(!clicked);
      setDisplay(clicked ? 'hidden' : '');
      setAngle(clicked ? 180 : 0);
    }
  };

  const styleDisplay = {
    visibility: display,
    transition: `visibility 0.5s ease`,
    height: 0vh,
  };
  const styleRotate = {
    transform: `rotate(${angle}deg)`,
    transition: `transform 0.3s ease`,
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoID}&key=AIzaSyDuHpbqM5TukVX_46jz6_ii0gus5XQxmqY`
    )
      .then((response) => response.json())
      .then((result) => {
        setChannel(result.items[0]);
      })
      .catch((error) => console.log('error', error));
  }, [videoID]);

  return (
    <main>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className={styles.iframeContainer}>
            <iframe
              className={styles.iframe}
              width="100%"
              height="100%"
              type="text/html"
              src={`https://www.youtube.com/embed/${videoID}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <aside>
            <div className={styles.more}>
              <div>관련 동영상</div>
              <button
                className={styles.moreBtn}
                onClick={onClick}
                style={styleRotate}
              >
                <i className="fa-solid fa-angle-up"></i>
              </button>
            </div>
            <div className={`${styles.videos}`} style={styleDisplay}>
              {video.map((item) => (
                <Link to={`/video/${item.id.videoId}`} key={item.id.videoId}>
                  <RelatedVIdeos item={item} />
                </Link>
              ))}
            </div>
          </aside>
          <section>
            <article>
              <div className={styles.tags}>
                {channel.snippet &&
                  channel.snippet.tags &&
                  channel.snippet.tags.map((item) => `#${item} `)}
              </div>
              <div className={styles.title}>
                {channel.snippet && channel.snippet.title}
              </div>
              <div className={styles.upload}>
                <span>업로드 날짜</span>
                <span className={styles.date}>
                  {channel.snippet &&
                    channel.snippet.publishedAt
                      .slice(0, 10)
                      .split('-')
                      .join('. ')}
                </span>
                <span className={styles.time}>
                  {channel.snippet && channel.snippet.publishedAt.slice(11, 16)}
                </span>
              </div>
              <div className={styles.decsription}>
                {channel.snippet && channel.snippet.description}
              </div>
            </article>
          </section>
        </>
      )}
    </main>
  );
}
export default VideoInfo;
