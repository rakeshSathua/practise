import Input from './comp2/Input';
import videoDB from './comp2/data/Mydata';
import React, { useState } from 'react';
import './Myapp.css';
import Videolist from './comp2/Videolist';

function Myapp() {
  let [videos, setVideos] = useState(videoDB);
   let [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video){
    setVideos([...videos, {...video, id : videos.length + 1}]);
    
  }
  function deleteVideos(id){
    setVideos(videos.filter(video => video.id !== id));
  }
  function editVideo(id){
    console.log("Edit of component "+ id + "  --> Clicked");
    setEditableVideo(videos.find(video => video.id === id));

  }

  function updateVideo(video){
    let index = videos.findIndex(v => v.id === video.id);
    const newVideo = [...videos]
    newVideo.splice(index, 1, video);
    setVideos(newVideo);
    setEditableVideo(null);
  }
  return (
    <> 
      <div className='container'>
        <Input videos={videos} addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></Input>
      </div>
      <hr></hr>

      <div>
        <Videolist videos={videos} deleteVideos={deleteVideos} editVideo={editVideo}></Videolist>
      </div>
    </>
  )
}

export default Myapp;