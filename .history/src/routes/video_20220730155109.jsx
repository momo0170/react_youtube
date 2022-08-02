import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/video.module.css';
import PropTypes from 'prop-types';

function Video({ video, loading }) {
  console.log('This is video');
  console.log('==============');
  return (
    <div className={styles.videos}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {video.map((item) => (
            <div className={styles.video} key={item.id.videoId}>
              <Link to={`/video/${item.id.videoId}`}>
                <img
                  className={styles.videoImg}
                  src={item.snippet.thumbnails.medium.url}
                />
                <div className={styles.info}>
                  <div className={styles.detail}>
                    <span className={styles.title}>{item.snippet.title}</span>
                    <span className={styles.channelName}></span>
                    <span className={styles.viewAndTime}></span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
Video.propTypes = {
  loading: PropTypes.bool,
};
export default Video;
