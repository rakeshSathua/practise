import React from 'react';
import Video from './Video';

function Videolist({videos, deleteVideos, editVideo}) {
  return (
    <>
        {
          videos.map(video => <Video
          key = {video.id}
          id ={video.id}
          title={video.title}
          deleteVideos={deleteVideos}
          editVideo={editVideo}
          ></Video>)
        }
    </>
  )
}

export default Videolist;