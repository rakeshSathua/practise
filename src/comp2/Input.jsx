import { useState , useEffect} from "react";
const initialObj = {
    channel: "Mystery",
    title:"",
    views:""
}

function Input({addVideos, editableVideo, updateVideo}) {
    let [video, setVideo] = useState(initialObj);
    function handleSubmit(e){
        console.log("Form Submitted");
        if (editableVideo){
          updateVideo(video);
        } else {
          addVideos(video);
        }
        
        setVideo(initialObj);
    }
    function handleChange(e){
        // console.log(e.target.name + " => " + e.target.value);
        setVideo({...video,
          [e.target.name]:e.target.value
        }); 

        console.log(e.target.name + "--" + e.target.value);
        //console.log(video);

        
    }
    useEffect(() =>{
      console.log("effect is running");
      if (editableVideo){

        setVideo(editableVideo);
      }

    }, [editableVideo]);


  return <>
    <input type="text" onChange={handleChange} name="title" placeholder="Title" value={video.title}/>
    <input type="text" onChange={handleChange} name="views" placeholder="Views" value={video.views}/>
    <button onClick={handleSubmit}>{editableVideo  ? "EDIT " :"ADD" }</button>
    
  </>
}

export default Input;