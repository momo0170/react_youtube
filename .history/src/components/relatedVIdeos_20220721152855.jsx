import React from 'react';
import styles from '../css/relatedVideos.module.css';

function RelatedVIdeos({ item }) {
  return (
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={item.snippet.thumbnails.medium.url}
      />
      <div className={styles.TitleAndName}>
        <span className={styles.videoTitle}>{item.snippet.title}</span>
        <span className={styles.channelName}>{item.snippet.channelTitle}</span>
        <span className={styles.upload}>
          {item.snippet.publishedAt.slice(0, 10).split('-').join('. ')}
        </span>
      </div>
    </div>
  );
}

export default RelatedVIdeos;
