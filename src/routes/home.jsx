import React from 'react';
import Video from '../components/video';

function Home({ video, loading, channel }) {
  console.log('This is home');
  return (
    <>
      <Video video={video} loading={loading} />
    </>
  );
}

export default Home;
